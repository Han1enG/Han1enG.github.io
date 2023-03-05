---
title: Hexo + Butterfly 修改H1~H6标题图标
date: 2023-03-05 20:10:58
tags:
  - Hexo
categories: Blog
---

## 获取图标`Unicide`值

在 [fontawesome](https://fontawesome.com/v6/icons/)上找到需要的图标，记录下`Unicode`值

## 配置文件

1. 在主题配置文件`_config.butterfly.yml`的`beautify`处，修改标题图标
    ```yaml
    beautify:
      enable: true
      field: post # site/post
      # title-prefix-icon: '\f0c1' 原锁链标题
      title-prefix-icon: '\f14e'
      title-prefix-icon-color: '#F47466'
    ```

2. 在`\themes\butterfly\source\css`目录下新建`title_icon.css`文件，添加：
    ```css
    /* 文章页H1-H6图标样式效果 */
    h1::before, h2::before, h3::before, h4::before, h5::before, h6::before {
        -webkit-animation: ccc 1.6s linear infinite ;
        animation: ccc 1.6s linear infinite ;
    }
    @-webkit-keyframes ccc {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn)
        }
    }
    @keyframes ccc {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn)
        }
    }
    ```

3. https://guole.fun/posts/butterfly-custom/ 
