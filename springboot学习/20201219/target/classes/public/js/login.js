$(function () {
    $("#login_form").submit(function () {//绑定表单提交事件

        //alert("submit")
        $.ajax({
            url:"main.html",
            type:"get",
            //dataType:"x-www-form-urlencoded",
            data:$("#login_form").serialize(),//请求数据，使用表单的数据
            contentType:"json",//响应数据类型
            success:function (data) {
                //alert(JSON.stringify(data))//json对象转字符串
                window.location.href="main.html"
            }
        })
        return false;
    })
})