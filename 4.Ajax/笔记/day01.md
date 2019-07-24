## 课前准备
- localhost:代表自己的电脑；
- 127.0.0.1：代表自己的电脑；
- 自己的ip地址：局域网内都可以访问；
## 笔记
1. ajax基本介绍
- 概念：异步的javasctipt和xml，在不刷新全部网页的情况下，对网页进行局部刷新；
- ajax一般用于前后端数据交互
- ajax可以通过在浏览器和服务器进行少量的数据交换，可以实现网页的异步刷新。这意味着可以在不加载全部网页的情况下，对网页进行局部刷新；
- 好处：
    - 局部刷新，无需刷新页面，用户体验好；
    - 性能好，按需求获取数据，减轻服务器负担；
    - 主流浏览器都支持；
- 缺点：
    - 对搜索引擎支持不好（搜索引擎无法抓取关键字），不利于seo（搜索引擎优化）； 
- 使用场景：
    - 搜索引擎的智能提示；
    - 网页地图；
    - 表单验证；
2. ajax工作原理
- 相当于一个浏览器的对象
- 通过浏览器的javascript对象xmlhttpRequest（Ajax引擎）对象来向服务器发异步请求并接收服务器的相应数据，然后用JavaScript来操作DOM而局部更新页面
- 传统方式和服务器交互：
    - 浏览器发送请求；
    - 服务器响应请求并发送数据回来；
    - 浏览器接收数据请求，并渲染页面；
- Ajax原理
    - 浏览器创建一个Ajax引擎对象xmlhttpRequest（）
    - Ajax引擎发送请求
    - 服务器接收请求并发送数据回来；
    - Ajax引擎对象接收数据；
    - 通过javascript的DOM操作局部刷新页面内容；
3. ajax引擎对象
- 什么是Ajax引擎对象：主流浏览器自带的对象（xmlhttpRequest）ie5是ActiveXObject 
- 创建ajax对象：
    - 主流浏览器：
        - var ajax = new XMLHttpRequest();
    - 低版本ie
        - var ajax = new ActiveXObject();
4. 使用ajax发送get请求
    - 浏览器的所有请求都在network中发送
    - 发送请求语法
        1. 创建Ajax对象
            - `var ajax =  new XMLHttpResquest();`
        2. 使用Ajax引擎对象，配置请求方式和请求地址
            - `ajax.open("get",参数2","参数3")`
                - 参数1：请求的方式get或者post
                - 参数2：请求的服务器地址URL
                    - get方式传参数，语法：ajax.open("get","url?参数名1=参数值1&参数名2=参数值2")
                - 参数3：同步或者异步true/false 默认true（异步），通常不写第三个参数
        3. 监听Ajax引擎状态
            - `ajax.onreadystatechange = function(){`
                //合适的时候接受数据 ajax引擎对象的状态为4&http的状态码为200(代表成功)；
                if(ajax.readyState === 4 && status === 200){
                    //接受数据 服务器响应回来的数据，放在ajax引擎对象的一个属性里面：responseText;
                    var date = ajax.responseText
                }
            }
            - onreadystatechange:事件处理句柄（类似onclick），当准备状态改变，在后面接一个回调函数，这个函数用来处理和监听ajax引擎状态的改变
            - ajax引擎的状态有5个：0 1 2 3 4(4是最常用的)
                - 可以通过ajax.readyState获取到状态；
                - 0：请求未初始化；
                - 1：服务器已连接以建立；
                - 2：请求已接收；
                - 3：请求处理中；
                - 4：请求已完成，并且相应已就绪；
            - http状态码：
                - 200：请求成功；
                - 304：缓存；
                - 403：没有权限；
                - 404：找不到（url地址请求错误）；
                - 500：内部服务器错误（服务器不支持）；
                    - 可以通过ajax.status获取到状态码
            - 服务器的响应数据：
                - 保存在ajax引擎对象的一个属性里面：responseText;
                - 可以通过：ajax.responseText获取
                - 获取的数据类型是字符串！important
        4. 发送
            - `ajax.send()`
    
```
//创建ajax对象
var ajax = new XMLHttpRequsst()

//使用ajax引擎对象配置请求方式和地址
ajax.open("get","url?参数名1=参数值1&参数名2=参数值2")

//监听ajax状态，并在合适的时候接受数据
ajax.onreadystatechange = function(){
    //ajax.readyState:ajax引擎状态
    //ajax.status:http状态码
    if(ajax.readyState === 4 && ajax.status === 200){
        var data = ajax.responseText
        //DOM操作
    }
}

//发送
ajax.send();
```
5. 使用ajax发送post请求
    - 语法
```
        //创建ajax对象
        var ajax = new XMLHttpRequsst()

        //使用ajax引擎对象配置请求方式和地址
        ajax.open("post","url")

        //监听ajax状态，并在合适的时候接受数据
        ajax.onreadystatechange = function(){
            //ajax.readyState:ajax引擎状态
            //ajax.status:http状态码
            if(ajax.readyState === 4 && ajax.status === 200){
                var data = ajax.responseText`
                //DOM操作
            }
        }

        //设置请求头（在发送之前）
        ajax.setRequestHeader("Contant-Type","application/x-www-form-urlencoded")
        //发送
        ajax.send("参数名1"=参数值1&"参数名2"=参数值2);
```
6. 注意事项
    - get和post的区别；
        - get发送的数据量少；post发送的数据量多
        - 传参方式不一样：
            - get直接写在请求地址url后面
                - 语法：ajax.open("get","url?参数名1=参数值1&参数名2=参数值2")
            - post写在发送请求的send方法里面；
                - 语法：ajax.send("参数名1=参数值1&参数名2=参数值2")
        - get方法不安全，post方法比较安全
    - 传入的参数必须是字符串
    - ```一般用ajax.send(`username=${username}`)```
7. JSON
    - JSON是一种轻量级的数据格式，以键值对的方式存在
        - 语法：
            ｛
                key:value
            ｝
            JSON格式：
            {
                "name":"张三",
                "age":18,
                "email"123@qq.com",
                "fav":["耍飞刀"，"html","css"]
            }
            注意：现在前后端主流数据格式就是JSON；前端发请求，后端一般都返回JSON格式；
    - JSON是js的内置对象，主要有两个方法；
        - JSON.parse():把字符串转为JSON对象；
        - JSON.stringfy():把JSON对象转化成字符串；
6. jquary的ajax
    - get
        - 语法：$.get("请求地址",function(data){})
        - data就是请求到的数据；
    - post
         - 语法：$post("请求地址",function(){})
         - data就是请求到的数据;
    - 万能方式
        - 语法：
        $.ajax({
            url:"服务器地址",
            type:"get/post",
            dataType:"json",
            success:function(data){}
        - data就是请求到的数据；
        - 传参数:
            - get:直接拼接在url地址后面
            - post:写一个配置选项data
                - data:{key:value,}

        })
7. ajax的应用
8. 同步和异步
    - 同步：阻塞
    - 异步：非阻塞
    - 事件是异步的；
