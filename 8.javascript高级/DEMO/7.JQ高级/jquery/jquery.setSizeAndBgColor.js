/* 
这是核心代码js,完成改变背景颜色和内容区域大小问题;
2019-7-24;by 任天祥;
参数说明:
height:高度;
width:宽度;
bgColor:背景颜色
*/

;(function ($) {
    let that
    $.fn.setSizeAndBgColor = function (opts) {
        that = this;
        console.log(opts.bgColor)
        that.css({
            width : opts.width ,
            height : opts.height , 
            background : opts.bgColor
        })
        return this;
    }


})(jQuery)