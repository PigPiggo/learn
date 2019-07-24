## 概览
- DOM分为3类，核心dom、cssDOM、htmlDOM；
- js操作节点类型
    - 元素节点；
    - 属性节点；
    - 文本节点；
- 增
    - 原生js
        - appendChild();
        - insertBefore();
    - jQuery
        - append()/appendTo();父元素中所有的子元素之后添加
        - prepend()/prependTo();父元素所有子元素之前添加； 
        - `用以上四种方法，同一个子元素对象只能在父元素对象中添加一次;`
- 删
    - 原生JS
        - removeChild();
    - jQuery
        - remove();
        - empty();
        - detach();
- 改
    - 原生JS
        - replaceChild();
    - jQuery
        - replaceWith();
        - replaceAll();
- 查
- 复
    - jQuery()
        -clone();
- 替
- 包
    - jQuery;
        - wrap();
        - wrapAll();
        - wrapInner();
- 遍(遍历节点)
    - jQuery
        - children();
        - next();
        - prev();
        - silblings();
        - closet();
        - find();
## 原生对象和jQuery对象
1. 原生对象：通过原生方法获取的对象；
2. jQuery对象：用过JQ选择器获取的对象；
3. 区别：打印出来的对象不同；
    - 原生对象打印出来是整个标签；jq对象打印出来是不是；
    - 原生对象只能调用原生对象中的属性和方法； JQ对象只能调用JQ中的对象和方法；
    - 原生对象转JQ对象
        - 语法：`$(原生对象)`；
    - JQ对象转原生对象
        - 语法：`jq对象[0]`或者`jq对象.get(0)`
    - this在jq是原生对象;
---
## 增加节点
1. 增加已经存在的节点；
    - 将一个节点从一个地方转移到另一个地方；
2. 增加不存在的节点；
    - 创建一个新节点，在追加到另外一个地方；
3. 语法：
    - 在父元素中，所有子节点之前或之后追加节点
        - 父对象.append(子对象);
        - 子对象.append(父对象/父对象选择器);

        - 父对象.preppend(子对象);
        - 子对象.preppend(父对象/父对象选择器);
     - 在兄弟元素之前或者之后追加节点
        - 兄弟对象.before(新对象)/（新对象）.insertBefore(兄弟对象)；

        - 兄弟对象.after(新对象)/（新对象）.insertAfter(兄弟对象)；

        - `用以上几种方法，同一个子元素对象只能在父元素对象中添加一次;`
---
## 删除节点
1. 删除本身jq对象.remove():
    - jq对象.remove():删除本身，并返回该对象的引用,不保留行为（事件）； 
    - jq对象.detach()：删除本身，并返回该对象的引用，保留行为（事件）；
    - 以上两种方法均可以传递参数，用于删除指定类名或者id的元素,eg: `$("p").remove(".a,.b,#c");`
2. 删除元素中所有子节点
    jq对象.empty():元素本身存在，但是元素中的节点（包括文本）都被删除；
---
## 复制节点
- 语法：
    - jq对象.clone();
        - 默认传递参数为false，表示不复制行为（事件）；
        - 当参数为true时，表示复制行为（事件
        - 一个元素对象.克隆.添加；这种链式操作可以将同一个元素克隆给同一个父元素（兄弟元素）多次；
---
## 替换节点（了解）
- `jqObj.replaceWith("<ele></ele>");`单个元素替换
- `jqObj.replaceAll("<ele></ele>");`所有匹配的元素替换
---
## 包裹节点（了解）
- wrap();
- wrapAll();
---
## 遍历节点
- 这里的遍历节点就是获取jq对象； 
- 获取子元素节点：
    - children（）;
        - 父元素对象.children（）
        - children()方法可以传参数，用来获取指定class或者id的子元素，多个参数用逗号隔开；
- 获取兄弟节点
    - 获取下一个兄弟节点：next();
    - 获取之后所有兄弟：nextAll();
    - 获取上一个兄弟节点：prev（）;
    - 获取前面全部兄弟节点:prevAll();
---
## 向上向下查找节点；
- 向上查找节点：closest()；
    - 获取祖先元素；
- 向下查找节点：find();
    - 获取后辈元素； 
---
##each遍历
- 针对数组或者对象的遍历
- 遍历：将数组中或者对象中的元素，属性以及方法一次取出来；
- each语法：
    - 对象.each(function(index,dom){})
    - $.each(数组/对象,function(index,dom){
     })
    - index是索引，dom是元素；
## 定位属性
- 相对于浏览器窗口的偏移
    - jq对象.offset();
    - 其返回值为一个对象，对象中属性值有top和left；
- 相对于position为非默认值的祖先元素偏移量
    - jq对象.position();
- 这两个方法只能获取不能设置！
- 如果要设置只能通过css方法设置；
---
## 滚动距离
- jq对象.scrollTop():获取滚动条的距离
    - 有参数表示获取滚动条的距离；
---
## 文本操作
- html()---innerHtml;
    - 操作html代码；
    - 获取文本：jq对象.html();
        - 可以传递参数，参数为html代码，用来设置html；
- text()---innerText;
    - 操作普通文本；
    - 获取文本：jq对象text();
        - 可以传递参数，参数为text，用来设置text；
- val()---获取表单控件中的文本；
    - 获取文本：jq对象.val();
    - 设置文本：jq对象.val(参数)；
    - `jq对象.val(["a","b"])`表示设置下拉框，单选按钮或者多选按钮的默认选中状态；