/* 
* 功能:对联插件
* 时间:2019年7月25日
* 参数说明:
* leftImg:左侧图片地址;
* rightImg:右侧图片地址;
* LeftTop:左侧到顶部距离
* Left:左侧到浏览器边框距离
* RightTop:右侧到顶部距离
* Right:右侧到浏览器边框距离
*/

;(function ($) {
    
    var that;

    $.fn.extend({
        adBar : function (opts) {

            console.log(opts)
            that = this;
            // 左边的图
            var $leftBar = $('<div><img src=' + opts.leftImg + ' alt="广告" /></div>')
            $leftBar.css({
                width : '100px' ,
                height : '300px' ,
                position: 'fixed' ,
                top : opts.LeftTop ,
                left : opts.Left 
            })
            that.append($leftBar)
            // 右边的图
            var $rightBar = $('<div><img src=' + opts.rightImg + ' alt="广告" /></div>')
            $rightBar.css({
                width : '100px' ,
                height : '300px' ,
                position: 'fixed' ,
                top :  opts.RightTop ,
                right : opts.Right
            })
            that.append($rightBar)

            return that;
        }
    })

})(jQuery)