---
title: Hexo 数学公式渲染(KaTeX)
date: 2023-03-02 17:03:10
tags:
  - Hexo
  - Latex
categories: Blog 
katex: true
---

> The *fastest* math typesetting library for the web.

## Katex

在网页中如何插入公式？如 $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$

一个办法是图片，但是极不方便，最好的办法还是用文字来描述数学公式，把渲染的工作交给引擎。`LaTeX`就是一个常用的排版工具，包括但不限于数学公式、表格、化学公式，而我们更多的需求是展示数学公式，所以只需要一个`LaTeX`的子集，能渲染数学公式即可，[KaTeX](https://katex.org/)就是这样一个支持`HTML`的轻量级的数学公式引擎。

## 文件配置

1. 打开主题配置文件`_config.butterfly.yml`，禁用`MathJax`，并修改 `KaTeX`
    ```yaml
    # MathJax
    mathjax:
      enable: false
      per_page: false
    
    # KaTeX
    katex:
      enable: true # false 需要時加載，須在使用的Markdown Front-matter 加上 katex: true
      per_page: false
      hide_scrollbar: true
    ```

2. 卸載掉`marked`或者`kramed`插件，安裝`hexo-renderer-markdown-it`，可以在`package.json`文件中查看。

    ```bash
    npm un hexo-renderer-marked --save # 卸载 marked 插件
    npm un hexo-renderer-kramed --save # 卸载 kramed 插件
    npm i hexo-renderer-markdown-it --save # 安装渲染插件
    npm install katex @renbaoshuo/markdown-it-katex # 安装渲染插件
    ```

3. 在`hexo`的根目录的`_config.yml`中配置
   
    ```yaml
    markdown:
      plugins:
        - plugin:
          name: '@renbaoshuo/markdown-it-katex'
          enable: true
          options:
            strict: false # 禁用掉 KaTeX 在命令行上输出的宂长的警告信息
    ```
    
4. 配置成功后，在需要渲染的文章开头，添加参数 `katex: true` 即可







