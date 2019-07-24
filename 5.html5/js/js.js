window.onload = function(){
    document.getElementById("score").oninput = function(){
        document.getElementById("level").value = this.value;
    }
    document.getElementById("phoneNumber").oninvalid = function(){
        this.setCustomValidity("请输入正确的手机号");
    };
}