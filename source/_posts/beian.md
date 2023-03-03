---
title: Hexo + Butterfly 添加备案信息
date: 2023-03-02 22:12:32
tags:
  - Hexo
categories: Blog
---

在`/themes/butterfly/layout/includes/footer.pug`文件中添加以下代码

```html
.framework-info
  img(src = 'https://static.dy208.cn/o_1dfilp8ruo521thr1hvf18ji17soa.png')
  span= ' '
  a(href='https://beian.miit.gov.cn/')= '黔ICP备2022002429号-1'
```

