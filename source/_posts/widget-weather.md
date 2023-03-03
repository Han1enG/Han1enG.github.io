---
title: Hexo 添加天气插件
date: 2023-03-02 11:46:21
tags: 
  - Hexo
categories: Blog
---

## 注册 [和风天气](https://widget.qweather.com/create-simple)

## 生成代码

![image-20230302121309410](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230302121311.png)

> 根据个人需求自定义创建天气插件，最后点击生成代码。

```html
<div id="he-plugin-simple"></div>
<script>
WIDGET = {
  "CONFIG": {
    "modules": "01234",
    "background": "5",
    "tmpColor": "FF9900",
    "tmpSize": "16",
    "cityColor": "CCCCCC",
    "citySize": "16",
    "aqiColor": "D9D9D9",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "15px 10px 10px 20px",
    "shadow": "0",
    "language": "auto",
    "borderRadius": "5",
    "fixed": "true",
    "vertical": "top",
    "horizontal": "left",
    "left": "170",
    "top": "5",
    "key": "4b948664cade49598ad"
  }
}
</script>
<script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>
```

## 文件配置

1. 在`\themes\butterfly\source\js`目录下创建一个`weather.js`文件，填入生成的`script`部分中的代码。
    ```js
    WIDGET = {
      "CONFIG": {
        "modules": "01234",
        "background": "5",
        "tmpColor": "FF9900",
        "tmpSize": "16",
        "cityColor": "CCCCCC",
        "citySize": "16",
        "aqiColor": "D9D9D9",
        "aqiSize": "16",
        "weatherIconSize": "24",
        "alertIconSize": "18",
        "padding": "15px 10px 10px 20px",
        "shadow": "0",
        "language": "auto",
        "borderRadius": "5",
        "fixed": "true",
        "vertical": "top",
        "horizontal": "left",
        "left": "150",
        "top": "5",
        "key": "4b948664cade49598ad"
      }
    }
    ```

    

2. 打开主题配置文件`_config.butterfly.yml`，在`inject`的`bottom`处引入`js`文件。
    ```yml
    inject:
      bottom:
        - <script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>
        - <script src="/js/weather.js"></script>
    ```

3. 在`\themes\butterfly\layout\includes\header`路径下的`nav.pug`文件中配置装载组件。
    ```html
    <div id="he-plugin-simple"></div> # html写法
    #he-plugin-simple #或者pug写法
    ```

    ![image-20230302124917307](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230302124918.png)

## 重新部署

```bash
$ hexo cl
$ hexo g -d
```

![image-20230302164137336](https://images-1311785948.cos.ap-chengdu.myqcloud.com/typora/20230302164139.png)
