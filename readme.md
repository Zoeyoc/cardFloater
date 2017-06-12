题目：实现一个浮层卡片
========================

鼠标 hover 用户名，ajax 请求接口，显示详细用户信息。效果见示意图。

![效果示意](效果示意.gif)

假设用户信息接口为：`/user/detail?uid=:uid`，返回数据：

```json
{
    "success": true,
    "data": {
        "uid": "11111111",
        "nickname": "张三",
        "bio": "Hello World!",
        "following": 222,
        "followers": 111
    }
}
```
========================
使用nodeJS写了简单的服务器。
在command中运行本地服务器：node server.js。
浏览器本地打开页面index.html。
传送数据用了两种方式：CORS（Cross-origin resource sharing）和JSNOP
优劣：
CORS：支持所有类型的请求，但是IE浏览器不能低于IE10
JSNOP：兼容性好，但是只支持GET请求，可导致水坑攻击，而且在调用失败的时候不会返回各种HTTP状态码
运行结果实例见图