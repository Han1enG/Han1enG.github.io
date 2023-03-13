---
title: 网站开启PJAX
date: 2023-03-11 14:48:04
tags:
  - Pjax
  - Ajax
  - Hexo
categories: Blog
---
> 参考文章： [保罗 ](https://paugram.com/coding/add-pjax-to-your-website.html)   [云泥](https://liuyib.github.io/2019/09/24/use-pjax-to-your-site/#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8)

## AJAX

[`AJAX`](https://www.runoob.com/ajax/ajax-intro.html) = 异步 `JavaScript` 和 `XML`，是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，`AJAX` 可以使网页实现异步更新。这意味着可以**在不重新加载整个网页的情况下，对网页的某部分进行更新**。传统的网页（不使用 `AJAX`）如果需要更新内容，必需重载整个网页面。有很多使用 AJAX 的应用程序案例，最常见的就是页面拉到底时浏览器会自动加载下一页的内容。

## PJAX

`PJAX = PushState + AJAX`，当用户点击链接发起请求时，`PJAX`  会拦截请求，然后触发 `Ajax` 请求和 `PushState`。其中，`Ajax` 使你的页面**局部刷新**，`pushState` 用于修改 `URL` 而不跳转页面，从而实现不跳转页面局部刷新的功能。可以提高用户体验，同时极大的减少服务器和宽带消耗。

## Butterfly + PJAX

### 开启PJAX

在`Butterfly`主题中已经集成了`PJAX`，在主题配置文件`_config.butterfly.yml`中找到`Pjax`将`enable`设置为`true`即可。

### 重载 JS 

由于通过 `PJAX` 切换的页面并没有完全刷新，浏览器不会将网页从头执行一遍，因此有些 `JS` 将不会生效。为了保证功能不失效，需要重新再执行一次，即**重载**。

在`Butterfly`主题中已经集成了解决方法在`pjax.pug`中，每次使用时在引入这些文件的标签上添加 `data-pjax` 属性

```yaml
inject:
  bottom:
    - <script data-pjax src="/js/ripples.js"></script>
```



