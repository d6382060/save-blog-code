
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
      .connect(connectOptions) // 连接服务器，接收服务器用户名和密码端口等
      .then(() => { // 连接成功
        console.info('Connect success!')
        uploadFile() // 开始上传
      })
      .catch(e => { // 连接失败
        console.error('Connect error:', e)
      })
  }

   // 上传文件到服务器
   const uploadFile = () => {
    // 把第一个参数所在目录的文件上传到 ，第二个参数所在的目录下(服务器目录)
    ssh.putFile(`${deployPath}/public.zip`, `${connectOptions.pathUrl}/public.zip`).then(
      () => {
        // 上传成功
        console.info('Upload file success')
        // 解压并且删除上传的zip压缩包文件，解压到cwd目录下
        ssh.execCommand('unzip -o public.zip && rm -rf public.zip', { cwd: connectOptions.pathUrl }).then(result => {
          console.info(`The update message is: ${result.stdout}`)
          if (!result.stderr) {
            // 解压成功
            console.info('Gratefule! update success!')
            process.exit(0) // 退出
          } else {
            // 解压失败
            console.info('Something wrong:', result)
            process.exit(0)  // 退出
          }
        })
      },
      error => {
        // 上传失败
        console.error('Upload file error:', error)
      }
    )
  }

  // 本地文件压缩
  const zipDirector = () => {
    // 创建文件输出流
    const output = fs.createWriteStream(`${__dirname}/public.zip`)
    const archive = archiver('zip', {
      zlib: { level: 3 } // // 设置压缩级别
    }).on('error', err => {
      throw err
    })

    // 文件输出流结束
    output.on('close', err => {
      if (err) {
        console.error('Something error width the zip process:', err)
        return
      }
      // 连接服务器
      connect()
      console.log(`总共 ${archive.pointer()} 字节`)
      console.log('archiver完成文件的归档，文件输出流描述符已关闭')
    })

    // 数据源是否耗尽
    output.on('end', () => {
      console.log('数据源已耗尽')
    })
    // 通过管道方法将输出流存档到文件
    archive.pipe(output)
    // 从子目录追加文件并将其命名为“新子dir”在存档中
    archive.directory(distPath, '/')
    //完成归档
    archive.finalize()
  }
  zipDirector()
})()