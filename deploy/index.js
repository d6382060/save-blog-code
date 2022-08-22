
let fs = require('fs');
let path = require('path');
let archiver = require('archiver');
let { NodeSSH } = require('node-ssh');
let { execSync } = require('child_process');

(()=> {

// 编译打包
execSync(`hexo clean`) // 清空编译
execSync(`hexo g`, { encoding: 'utf-8', stdio: 'inherit' }) // 重新编译


  // 正确设置本地dist文件路径
  const deployPath = path.resolve(__dirname, '.') // 打包成zip所在的目录
  const distPath = path.resolve(__dirname, '../public') // 编译完成目录



  // 服务器对象
  let connectOptions = {
      host: '', // ip
      username: 'root', // 服务器用户名
      port :22, // 端口，记得在控制台打开防火墙
      pathUrl:'/www/wwwroot/www.duduaaBlog.com', // 项目所在目录
      password:'' // 服务器密码
  }

  // 连接到服务器
  const ssh = new NodeSSH()
  const connect = () => {
    ssh
      .connect(connectOptions)
      .then(() => {
        console.info('Connect success!')
        uploadFile()
      })
      .catch(e => {
        console.error('Connect error:', e)
      })
  }

   // 上传文件到服务器
   const uploadFile = () => {
    ssh.putFile(`${deployPath}/public.zip`, `${connectOptions.pathUrl}/public.zip`).then(
      () => {
        console.info('Upload file success')
        ssh.execCommand('unzip -o public.zip && rm -rf public.zip', { cwd: connectOptions.pathUrl }).then(result => {
          console.info(`The update message is: ${result.stdout}`)
          if (!result.stderr) {
            console.info('Gratefule! update success!')
            process.exit(0)
          } else {
            console.info('Something wrong:', result)
            process.exit(0)
          }
        })
      },
      error => {
        console.error('Upload file error:', error)
      }
    )
  }

  // 本地文件压缩
  const zipDirector = () => {
    const output = fs.createWriteStream(`${__dirname}/public.zip`)
    const archive = archiver('zip', {
      zlib: { level: 3 } // 压缩层级 目前我们只有2层
    }).on('error', err => {
      throw err
    })
    output.on('close', err => {
      if (err) {
        console.error('Something error width the zip process:', err)
        return
      }
      connect()
      console.info(`${archive.pointer()} total bytes`)
      console.info('Archiver has been finalized and the output file descriptor has closed.')
    })
    output.on('end', () => {
      console.info('Data has been drained')
    })
    archive.pipe(output)
    archive.directory(distPath, '/')
    archive.finalize()
  }
  zipDirector()
})()