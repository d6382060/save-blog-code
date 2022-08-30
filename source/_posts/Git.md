---
title: Git
tags: 
- Git
categories: 
- Git
---
# 版本控制
## 版本回退
> 每当修改一个文件到一定程度的时候，可以commit一个快照，如果不小心把文件改乱了或者删除了，可以通过这个commit来恢复。

1. 使用git log命令查看最近提交日志 加上`--pretty=oneline`参数简化输出信息
>要回退到上个版本，Git需要知道是哪个版本，在Git中*HEAD*表示的是当前版本，上一个版本就是*HEAD^*,上上个版本就是*HEAD^^*，往上100个版本可以写成*HEAD~100*

2. 使用 git reset 命令回退到上一个版本
```git
git reset --hard HEAD^
```
查看文件就已经回到了上一个版本，但是户发现，最新的版本在git log 里面没有了,这并意问这就不能回到最新版本了，知道知道他的commit id，就可以使用 `git reset --hard commit id`来回滚。commit id输入前5位就行

3. 使用 git reflog 来查看git操作记录
>这个命令可以查看所有的命令使用记录，在这可以看到commit id

<!--more-->
## 管理修改

1. git diff HEAD -- readme.txt
- 可以查看工作区和版本库里面的最新版本的区别

## 撤销修改
1. git checkout -- 文件名(相对路径)
 - 可以把文件在工作区的更改全部撤销，有两种情况
  1. 文件修改后还没有放到暂存区，现在，撤销修改就回到和版本库一模一样的状态
  2. 文件修改后添加到了暂存区，已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态

2. git reset HEAD <file>
> 错误的修改了，一个文件，不小心add到了暂存区可以把暂存区的修改撤销掉，重新放回工作区，然后在之下 git checkout -- 文件名，丢弃工作区的修改

## 删除文件
> 一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了：
```bash
rm test.txt
```
这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了：
现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit：
现在，文件就从版本库中被删除了。
另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：
```bash
git checkout -- test.txt
```
`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

# 分支管理

## 创建与合并分支
1. 查看分支：`git branch`
2. 创建分支：`git branch <name>`
3. 切换分支：`git checkout <name>`或者`git switch <name>`
4. 创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`
5. 合并某分支到当前分支：`git merge <name>`
6. 删除分支：`git branch -d <name>`