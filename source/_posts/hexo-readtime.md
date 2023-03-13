---
title: Hexo + Butterfly 添加阅读时间
date: 2023-03-09 20:33
tags:
  - Hexo
categories: Blog
---
> 参考博客：[花猪](https://cnhuazhu.top/butterfly/2021/02/24/Hexo%E9%AD%94%E6%94%B9/Hexo%E5%A2%9E%E6%B7%BB%E5%85%AC%E5%91%8A%E6%A0%8F%E8%AE%A1%E6%97%B6%E5%99%A8%E5%B0%8F%E9%83%A8%E4%BB%B6/)

1. 在`\themes\butterfly\source\js`目录下创建一个`readtime.js`文件
    ```js
    let oSpan = document.getElementsByTagName("readtime")[0];
    let localhostTime = new Date();                                 //获取页面打开的时间
    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
    setInterval(function () {
        let goTime = new Date();                                    //获取动态时间
        let diffTime = goTime.getTime() - localhostTime.getTime();
        var second = Math.floor(diffTime / 1000);                   //未来时间距离现在的秒数
        second = second % 86400;                                    //余数代表剩下的秒数；
        var hour = Math.floor(second / 3600);                       //整数部分代表小时；
        second %= 3600;                                             //余数代表 剩下的秒数；
        var minute = Math.floor(second / 60);
        second %= 60;
        // var str = tow(day) + '<span class="time">天</span>'
        var str = tow(hour) + '<span class="time">小时</span>'
            + tow(minute) + '<span class="time">分钟</span>'
            + tow(second) + '<span class="time">秒</span>';
        oSpan.innerHTML = "您已浏览当前界面" + str;
    }, 1000)
    ```

2. 在主题配置文件`_config.butterfly.yml`的`inject`的`bottom`处引入该`js`文件
    ```yaml
    - <script src="/js/readtime.js"></script>
    ```

3. 在`\themes\butterfly\layout\includes\widget`目录下找到`card_announcement.pug`文件

    ![image-20230309211729348](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230309211731.png)
