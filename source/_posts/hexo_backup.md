---
title: 利用Github分支备份Hexo博客源文件
date: 2023-03-03 21:41:58
tags:
  - Github
  - Hexo
categories: Blog
---

## 前言

虽然`Hexo`部署博客很方便，但是当我们更换电脑时呢，在`github`中的其实只是在我们本地目录里的`.deploy_git`里面的内容，显然我们需要把源文件备份`push`到`github`上，这样只需要克隆到本地，简单配置后就可以了。

## 备份

### 新建分支

在`Github`上的博客仓库下创建一个新的分支`hexo`，并且将这个分支设置为默认分支

![image-20230303220316508](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230303220318.png)
![image-20230303220610166](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230303220611.png)

### 克隆`hexo`分支

```bash
$ git clone git@...git #(github page 的仓库地址)
```

把克隆下来的文件夹中的`.git`文件复制到博客根目录下，如果没有找到`.git`文件，其实是被隐藏了
![image-20230303221055486](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230303221056.png)

### 开始备份

进入到博客的根目录下`Git Bash`
```bash
$ git add .
$ git commit -m "Backup"
$ git push origin hexo
```

![image-20230303221457304](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230303221458.png)
此时可以在`Github`上发现完成备份。
之后每次在更改后，可以执行以下命令：

```bash
$ hexo clean
$ git add .
$ git commit -m "backup"
$ git push
$ hexo g -d
```

## 本地恢复

1. 换一台电脑，配置好 `Hexo` 的环境，配置 `Git SSH key`，把博客源文件代码克隆下来:
    ```bash
    $ git clone git@...git # (github page 的仓库地址)
    ```

2. 克隆后，默认分支是 `master`，需要切换到`hexo`分支（省略）

    ```bash
    $ git branch -a # 查看所有分支
    $ git checkout origin/hexo # 切换到xxx分支
    ```

3. 执行如下命令
    ```bash
    npm install hexo-cli --save
    npm install
    npm install hexo-deployer-git --save
    ```

    







