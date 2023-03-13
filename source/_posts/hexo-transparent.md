---
title: Hexo + Butterfly 文章页透明
date: 2023-03-05 12:16:58
tags:
  - Hexo
categories: Blog
---
1. 在 `\themes\butterfly\source\css`目录下新建 `article_transparent.css`文件，添加：

   ```css
   /* 首页文章栏背景透明 */
   #recent-posts>.recent-post-item,.layout_page>div:first-child:not(.recent-posts),.layout_post>#page,.layout_post>#post,.read-mode .layout_post>#post {
       background: var(--light_bg_color)
   }

   /* 侧边栏透明 */
   #aside-content .card-widget {
       background: var(--light_bg_color)
   }
   ```
2. 在主题配置文件 `_config.butterfly.yml`的 `inject`，在 `head`直接引入 `css`文件

   ```yaml
   - <script src="/css/article_transparent.js"></script>
   ```
