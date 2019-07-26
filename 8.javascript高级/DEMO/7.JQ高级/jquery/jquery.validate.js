/* 
* 名称:表单验证插件;
* 时间:2019年7月25日;
* 参数说明:
*/
;(function ($) {
    var that
    $.fn.validate = function () {
        that = this;
        
        // 监听提交事件
        that.on ('submit' , function () {
            // 定义标杆 ()
            var flag = true
            // 获取所有input
            var $inputs = that.find ('input[checkType]')
            // 循环需要验证的输入框
            $inputs.each (function (index, input){
                // 获取checkType
                var checkType = $(input).attr('checkType')

                //判断
                if (checkType === 'required') {
                    if ($(input).val () === ''){
                        $(input).css({'border' : '2px solid red'})
                        $(input).next ().text ('不能为空')
                        flag = false
                    }else{
                        $(input).css({'border' : '2px solid green'})
                        $(input).next ().text ('')
                    }
                } else if (checkType === 'email') {
                    var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
                    if (!emailReg.test ($(input).val ())){
                        $(input).css({'border' : '2px solid red'});
                        $(input).next ().text ('邮箱格式错误');
                    } else {
                        $(input).css({'border' : '2px solid green'})
                        $(input).next ().text ('')
                    }
                }
            })

            return flag;
        })
    }
})(jQuery)