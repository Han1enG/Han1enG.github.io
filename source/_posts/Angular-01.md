---
title: Angular实践一搭建环境+创建项目
date: 2023-03-07 20:21:30
tags:
  - Angular
categories: 前端
---

> 公司要求使用`Angular`，学过`VUE`，了解过`React`，偏偏是没用过的`Angular`，重头啃

## 安装`node`

查看版本，之前都是在 `cmd` 窗口，今天学了个 `powershell` 窗口，感觉差不多，`shift+win+右键`
```bash
$ node -v
$ npm -v
```

## 安装 Angular

### 脚手架

```bash
$ npm install -g @angular/cli@14.0.2
```

### 查看版本

```bash
$ ng v # ng version
```

- 报错如下：![image-20230307203245952](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307203249.png)
- 解决办法：

1. 管理员运行`Aindows PowerShell`

2. 输入下面指令，并输入**A**更改权限

    ```bash
    $ set-ExecutionPolicy RemoteSigned
    ```

3. 输入下面指令查看当前状态

    ```bash
    $ get-ExecutionPolicy
    ```

![image-20230307204023044](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307204026.png)

- 再次查看版本号，安装成功

![image-20230307204001531](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307204004.png)

### 卸载 `Angular`

```bash
$ npm uninstall -g @angular/cli
```

## 创建项目

1. `cd`到存放项目的目录，输入命令

    ```bash
    $ ng new <项目名>
    $ yes
    $ css
    ```

    安装依赖的时间略久，可以先跳过安装依赖的步骤，只是建项目，等项目建完后再安装依赖
    ```bash
    $ ng new <项目名> --skip-install
    ```

    ![image-20230307210538230](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307210541.png)

2. 创建好之后的项目结构如下：
    ![image-20230307211545952](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307211739.png)

3. `cd`到项目的目录地址，输入命令：

    ```bash
    $ ng serve --open # ng serve --o 或 ng serve
    ```

    ![image-20230307210934205](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307210937.png)
    

> `stackoverflow`给出的解释是
> 		To Fix Error “This command is not available when running the Angular CLI outside a workspace Error”, Do **Right-Click on yours project name in VS Code** and Click **“Open in Integrated Terminal”** Option.

`VScode`中运行，打开默认浏览器，显示`Angular`的欢迎界面

![image-20230307211342981](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307211346.png)
![image-20230307211359547](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230307211402.png)



