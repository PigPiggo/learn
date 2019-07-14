# html5
## html5综述
- 新特性
    - 用于绘画的canvas元素；
    - 用于媒介回放的video和audio元素
    - 对本地离线储存的更好的支持
    - 新的特殊元素内容(语义化标签)
    - 新的表单控件 (calendar date time email url search)
    - 二维三维
    - 特效（过渡，动画）
- 相对于h4
    1. 进步：抛弃了一些不合理不常用的标记和属性
	2. 新增了一些标记和属性--表单
	3. 从代码角度而言，h5的网页结构代码更简洁。

-  html5 ie问题
- 
```
<head>
    <!-->[if It IE 9]>
    <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
    <![endif]-->
</head>
```
- 8个新的语义(semantic)元素
    - 一个语义元素能够清楚的描述其意义给浏览器和开发者
    - 语义元素全部是块级元素
    - 语义元素如下：
        - header
        - section
        - footer
        - aside
        - nav
        - main（主要内容）
        - article
        - figure和figcaption
- html5表单
## html5新元素
- 语义元素
    - 一个语义元素能够清楚的描述其意义给浏览器和开发者
        - 语义元素全部是块级元素
        - 语义元素如下：
            - header
            - section
            - footer
            - aside 侧边栏
            - nav 导航栏 
            - article 定义独立的内容
            - figure 包裹图片、代码、图标等不影响文档流的内容
            - figcaption 包裹在figure中，作为figure的标题，位于figure的头部或者尾部；        
- 兼容性问题
    - ie9会将部分语义标签转换为行内元素；
        - 需要在样式加上display:block;
    - ie8及以下完全不支持（不支持h5）；
        - 第一种方式：向html添加新元素
            - document.createElement("");
            - 用js中的document.createElement为ie浏览器添加新的元素(ie8及以下不支持)；
            - 默认创建的标签都是行内元素；
        - 第二种方式：引用第三方插件
            - html5shiv.js
## html5表单新增
- 表单新type属性值
    - email
        - 提供了默认的电子邮箱验证，必须包含@符号，及完整性验证；如果不满足这两点，可以阻断提交
    - tel
        - 没有提供验证；
        - 本质目的是为了在移动端打开数字键盘；
        - 数字键盘就意味着限制了用户只能输入数字；
    - url
        - 验证合法网址；
        - 必须包含http://
    - number
        - 只能输入数字；
        - 自带增加减少控件；
        - max属性：最大值；
        - min属性：最小值；
        - value：默认值；
    - search
        - 提供删除控件；
    - range
        - 可以设置最大值和最小值和默认值（默认为中间）
        - 直接就是可控件（调节音量）
    - color
        - 颜色拾取
        - 可以选取颜色
    - time（时间）
    - data
    - month
    - week
- 表单其他属性
    - placeholder:提示占位；
    - autofocus：自动获取焦点；
    - autocomplete：自动完成
        - on：打开
        - off：关闭
        - 必须成功提交过
        - 当前元素必须有name属性；
    - required:必须输入，如果不输入则会阻断提交；
        - 没有属性值
    - pattern：正则表达式验证；
    - file：文件
    - multiple：
        - 允许选择多个文件；
        - 允许填写多个邮箱，用逗号分割；
    - form
        - 允许不在form中的表单元素提交；
        - 之前必须指定了一个form的id，然后再当前需要提交的元素中添加form=“id”，就可以在提交该id表单的时候同时将当前元素提交；
- 新增的表单元素
    - datalist
    - keygen
    - output
- 新增表单事件
    - oninput：监听当前元素内容的改变；
        - 添加内容或者删除内容；
    - oninvalid：当验证不通过时触发；
-  进度条
    - progress:双标签
        - 属性：
            - max
            - value
    - meter：双标签
        - 度量器；衡量当前进度值
        - 属性：
            - high:规定的较高的值；
            - low：规定的较低的值；
            - max：最大值；
            - min：最小值；
            - value：当前度量值；
## 多媒体标签
- audio:音频
    - 属性：
        - src:路径（必须）；
        - controls:音频播放器控制器面板（必须）；
        - autoplay:自动播放；
        - loop:循环；
- video:视频
    - 属性
    - src:路径（必须）；
    - controls:音频播放器控制器面板（必须）；
    - autoplay:自动播放；
    - loop:循环；
    - poster:视频封面（默认第一帧）;
    - width:
    - height:
        - 一般宽高只设置一个，让他自己缩放
    - `source`:不同的浏览器支持的视频格式不同，所有可以添加多个视频格式，让浏览器自定选择；
        - 包裹在video中；
- 之前的方法
    - embed：直接插入视频文件，本质上手机已经安装的软件，有兼容性；
    - flash插件：
        - 学习flash增加使用成本
        - 苹果设备不支持flash
## HTML5 DOM操作
- 获取元素
    - document.querySelector()
    - document.querySelectorAll()
- 操作元素class样式
    - classList:当前元素所有class列表（数组）
    - classList.add():添加样式
        - 一次只能加一个；
    - classList.remove():删除样式
        - 一次只能删一个；
    - classList.toggle():有则删除，无则添加；
    - classList.contains():判定是否有这也样式；
    - classList.item():查看元素上的已有样式；
## HTML5自定义属性
- 规范
    - data-开头；
    - 后面至少有一个字符；
- 建议
    - 名称都用小写；
    - 不要有任何特殊符号；
    - 名称不要使用纯数字；
```
//获取自定义属性值；
<p data-school-name="itcast">
<script>
    var p = document.querySelector("p");
    var value = p.dataset["schoolName"];
    console.log(value);
</script>
```
## 网络监听接口
- ononline：网络连通的时候触发该事件；
    - wondow.addEventListener("ononline,function(){})；
- onoffline：网络断开的时候触发该事件；
    - wondow.addEventListener("onoffline",function(){})；
## 全屏接口
- 兼容解决：
    - chorme:webkit;
    - 火狐:moz;
    - ie:ms;
    - opero:o
- requestFullScreen():开启全屏显示；
- document.cancelFullScreen():关闭全屏显示；
- document.fullScreenElement:检查是否全屏；
    - 做兼容性时，只有火狐用驼峰命名法来写，其他的srceen的s是小写；
## fileReader
- 读取文件内容；
    - readAsText():读取文本文件。返回文本字符串，默认编码是utf-8；
    - readAsBinaryString():读取任意类型的文件，返回二进制字符串；这个方法不是用来读取给用户看，而是存储或者传输文件；
    - readAsDataURL:读取一段以data开头的字符串，这段字符串的本质就是DataURL.DataURL是一种将文件嵌入到文档的方案；
    - abort():中断读取；
- 读取步骤：
    1. 创建文件读取对象 var reader = new FileReader();
    2. 读取文件，获取DataURL 
        - 用第三种方法读取的时候，没有返回值，读取结果储存在作为属性，储存在reader.result中；
- 事件模型
    - FileReader提供一个完整的事件模型，用来捕获读取文件时的状态
    - onabort:读取文件中断片时触发
    - onerror:读取错误时触发
    - onload:文件读取成功完成时触发
    - onloadend:读取完成时触发，无论成功还是失败
    - onloadstart:开始读取时触发
    - onprogress:读取文件过程中持续触发
- 注意事项：
    - 获取input中上传文件，用的输files属性；值是一个数组！！！
## 拖拽接口
- 应用于被拖拽元素的事件
    - ondrag         应用于拖拽元素，整个拖拽过程都会调用--持续
    - ondragstart    应用于拖拽元素，当拖拽开始时调用
    - ondragleave    应用于拖拽元素，当鼠标离开拖拽元素时调用
    - ondragend    应用于拖拽元素，当拖拽结束时调用
- 应用于目标元素的事件
    - ondragenter    应用于目标元素，当拖拽元素进入时调用
    - ondragover    应用于目标元素，当停留在目标元素上时调用
    - ondrop        应用于目标元素，当在目标元素上松开鼠标时调用
    - ondragleave    应用于目标元素，当鼠标离开目标元素时调用
- 注意事项：
    - 要拖拽成功必须阻止浏览器默认事件
    - 在ondragover上阻止浏览器默认事件；
    - 在ondrop上添加对目标元素调用appendChild()方法；
- 将拖拽事件应用于多个元素
    1. 用document调用拖拽方法
    2. 将被拖拽的事件保存在e.dataTrasfer中
        - 被拖拽的元素保存在e.target属性中；
        - e.dataTrasfer.setData("text/html",e.target.id);
            - 这个方法只能保存字符串格式；
    3. 在ondrop中添加被拖拽元素；
        - 先获取目标区域
        - 获取被拖拽元素（id保存在dataTrasfer中），通过dataTrasfer.getData("text/html")调取id;
## 地理定位
- getCurrentPosition(sucess,error,option)
    - success:获取当前地理信息成功之后的回调函数；
        - 成功之后传递一个参数给回调函数，回调函数需要设置一个形参来接受这个参数；
        - 参数属性：
            - position.coords.latitude 纬度
            - position.coords.longitude 经度
            - position.coords.accuracy 精度
            - position.coords.altitude 海拔高度
    - error：获取当前地理信息失败之后的回调；
        - 失败之后传递一个参数给回调函数，回调函数需要设置一个形参来接受这个参数；
    - option：调整获取当前地理信息的方式；
        - option是一个对象，可以设置获取数据的方式
            - enableHightAccuracy:true/false是否使用高精度；
            - timeout:设置超时时间，单位ms；
            - maximumAge:设置浏览器重新获取地理信息的时间间隔，单位是ms；
## web存储
- window.sessionStorage
    - 可以存储数据到本地；存储容量大概是5m；
    - 这个数据是存储在当前页面的内存中；
    - 生命收起为关闭当前页面，关闭页面，数据会自动清除；
    - 方法：
        - .setItem(key,value):以键值对的形式储存数据；
        - .getItem(key):通过指定名称获取数据；
        - .remove(key):通过指定名称删除数据；
        - .clear():清空所有数据；
- window.localStorage:
    - 存储容量大概是20m；
    - 不同浏览器不能共享数据，但是通用以浏览器不同页面可以共享；
    - 数据存储在硬盘上，不会随着页面关闭而清空；
    - 方法：
        - .setItem(key,value):以键值对的形式储存数据；
        - .getItem(key):通过指定名称获取数据；
        - .remove(key):通过指定名称删除数据；
        - .clear():清空所有数据；
## 应用缓存
- 通过创建cahe manifest文件，可以创建web应用的离线版本；
- 优势：
    - 可配置需要缓存的资源；
    - 网络无连接用用仍然可用；
    - 本地读取缓存资源，提升访问速度；
    - 增强用户体验；
    - 减少请求，缓解服务器负担；
- 用法：
    - 在html标签中，添加一个属性
        - `manifest=""`;
    - 在目录下建一个文本文档，后缀名改成.appcache;
    - .appcache:
```
CHCHE MANIFEST
#文档的第一句

CACHE
#需要缓存的清单列表（一个为一行）；
../images/001.jpg

NETWORK
#每一次都需要重新从服务器获取的清单列表；
../images/002.jpg;

FALLBACK
#配置如果文件无法获取则使用指定的文进行替代；
../images/003.jpg ../images/004.jpg
```
- 注意：
    - 当有了指定缓存的文件，浏览器会优先读取缓存，即便是服务器更新了文件，浏览器也不会获取；
        - 解决办法：
            - 用户清空浏览器缓存
            - manifest 文件被修改（参阅下面的提示）
                - 更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法；
            - 由程序来更新应用缓存
    - 应用缓存无法使用
        - 解决方法：manifest文件需要配置正确的MIME-type,即 "text/cache-manifest"。必须在 web 服务器进行配置
## 自定义播放器
- 接口说明与界面说明
    - 




