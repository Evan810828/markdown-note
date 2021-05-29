# Git 学习笔记_2021/5/24

## 起步
## 1.1 版本控制系统 Version Control System (VCS)
* 为了能够通过比较文件之间的细节来找出错误的来源
* 为了能够轻松、随时地回到之前某一时间点的状态

**本地版本控制系统**

利用简单的数据库来记录文件历次更新的差异<br/>
可以理解为在电脑上另存一个某文件的备份<br/>
这么做的缺点在于很容易混淆目录名称或是不小心覆盖掉备份文件

**集中式版本控制系统 Central Version Control System (CVCS)**

为了让不同电脑上的用户能协同工作<br/>
选定一个中央服务器<br/>
让不同用户通过连接到这台服务器进行版本的获取和更新
其缺点与本地版本控制系统相同，即数据保存在单一位置<br/>
一旦中央服务器受损，所有备份将完全消失

**分布式版本控制系统 Distributed Version Control System (DVCS)**

客户端不止是获取项目的最新快照，而是把整个仓库都克隆到本地，包括完整的历史记录<br/>
这样一来用户可以凭借本地的仓库对远端服务器进行修复或更改

## 1.2 git 环境配置

[Download Git](https://git-scm.com/download/win)

安装完git之后第一步要做的就是配置账号和邮箱<br/>
这些信息都会被加入到你在每一次使用web-based Git进行的版本更新里<br/>

首先在GitHub注册一个账号

然后在电脑终端使用
```
git config --global user.name "username"
```
和
```
git config --global user.email "emailaddress"
```
来配置.gitconfig文件，<br/>
其中用户名和邮箱均和GitHub账号相同

注：<br/>
一般可以在 ```Users/User/```路径下找到全局配置的.gitconfig文件<br/>
也可以通过在终端输入 ```git config --global --list```来查看.gitconfig文件内的配置

---
## 仓库操作
## 2.1 初始化仓库
```git init```

将本地的一个文件夹初始化为一个git仓库，但是内部文件一开始都没有被追踪<br/>

## 2.2 克隆远端仓库
```git clone <url> <repo name>```

(其中 `repo name` 是自定义的本地仓库名称, 可不设置)

---
## 2.3 文件的生命周期

在 git 仓库里文件一共有4中不同的状态：<br/>
1. **Untracked**: 此时git提交的文件快照中将不会有此文件
2. **Unmodified**: 存放着已被追踪但未被修改的文件
3. **Modified**: 又叫非暂存区，存放着已被追踪，已被修改，但在 git 仓库中尚未被暂存的文件
4. **Staged**: 又叫暂存区，存放着已被暂存的文件

### 2.3.1 检查文件状态
详细状态 `git status`<br/>
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

其中 `Changes to be committed` 代表暂存区，`Changes not staged for commit` 代表非暂存区<br/>
`new file` 代表新建了某文件，`modified` 代表某文件被修改

### 2.3.2 追踪新文件
```git add <file>```
```
$ git add README
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

    new file:   README
```

### 2.3.3 忽略文件
```.gitignore```
```
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf

```

### 2.3.4 提交更新
```git commit```

此时会启动文本编辑器来输入提交说明，启动的编辑器是通过 Shell 的环境变量 EDITOR 指定的，一般为 vim 或 emacs。 当然也可以按照 起步 介绍的方式， 使用 `git config --global core.editor` 命令设置你喜欢的编辑器

编辑器会显示类似下面的文本信息（本例选用 Vim 的屏显方式展示）：

```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Your branch is up-to-date with 'origin/master'.
#
# Changes to be committed:
#	new file:   README
#	modified:   CONTRIBUTING.md
#
~
~
~
".git/COMMIT_EDITMSG" 9L, 283C
```

退出编辑器时，Git 会丢弃注释行，用你输入的提交说明生成一次提交。