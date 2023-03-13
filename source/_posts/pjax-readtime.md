---
title: 开启PJAX后的坑
date: 2023-03-11 16:20:04
tags:
  - Pjax
  - Hexo
categories: Blog
---
> 刚开启的`PJAX`就出问题了，有些`JS`虽然加了 `data-pjax` 属性，依然没有重载，出现在用户自己编写的用于计算阅读时间的`js`函数中。

```js
// 原函数写法
aaaaaaaaaaaaaaa;
// 现在的写法
function pjax_reload() {
    aaaaaaaaaaaaaaa;
}
document.addEventListener("pjax:complete", function () {
  pjax_reload(); // Pjax 完成后，重新加载上面的函数
});
```



