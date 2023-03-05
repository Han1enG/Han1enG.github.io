---
title: Hexo + Butterfly 修改浏览器标题
date: 2023-03-05 12:10:58
tags:
  - Hexo
categories: Blog
---



1. 在`\themes\butterfly\source\js`目录下新建`funny_title.js`文件，添加：
    ```js
    var OriginTitle = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "/funny.ico");
            document.title = '╭(°A°`)╮ 怎么走了 ~';
            clearTimeout(titleTime);
        }
        else {
            $('[rel="icon"]').attr('href', "/favicon.ico");
            document.title = '(ฅ>ω<*ฅ) 欢迎回来 ~' + OriginTitle;
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
        }
    });
    ```
    
2. 在主题配置文件`_config.butterfly.yml`的`inject`，在`bottom`直接引入`js`文件
    ```yaml
    - <script src="/js/funny_title.js"></script>
    ```

