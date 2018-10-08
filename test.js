    var fileName = undefined;
    var sendInterval = 0;
    function openDialog(name) {
    if($('.Bullet').is(":visible")){
    $('.Bullet').hide()
}
    if (name) {
    fileName = name;
    $('.Bullet').show();
}
}
    function closeDialog() {
    $('.Bullet').hide();
}

    function sendCode() {
    var companyName = $.trim($('#companyName').val());
    var personName = $.trim($('#personName').val());
    var companyEmail= $.trim($('#companyEmail').val());
    var mobile = $.trim($('#mobile').val());
    if (companyName.length == 0) {
    return alert("请填写公司名称");
}
    if (personName.length == 0) {
    return alert("请填写姓名");
}
    if (companyEmail.length == 0) {
    return alert("请填写邮箱");
}
    if (mobile.length != 11) {
    return alert("请填写正确的11位手机号");
}
    if (sendInterval > 0) {
    return;
}
    $.ajax({
    type: "GET",
    url: "http://wenda.wecenter.com/?/down/send_code/",
    dataType: "json",
    data: {
    companyName:companyName,
    personName:personName,
    companyEmail:companyEmail,
    mobile: mobile,
    fileName: fileName
},
    xhrFields: {
    withCredentials: true
},
    success: function (result) {
    if (result.errno == 1) {
    sendInterval = 60;
    setInterval(function () {
    $("#sendButton").text(sendInterval > 0? (--sendInterval + "秒") : "获取验证码");
    if (sendInterval <= 0) {
    sendInterval = 0;
    clearInterval();
}
}, 1000);
}
    alert(result.err);
}
});
}

    function validCode() {
    var code = $.trim($("#smsCode").val());
    if (!code.length) {
    return alert("请填写验证码")
}

    $.ajax({
    type: "GET",
    url: "http://wenda.wecenter.com/?/down/valid_code/",
    dataType: "json",
    data: {
    code: code,
    fileName: fileName
},
    xhrFields: {
    withCredentials: true
},
    success: function (result) {
    if (result && result.errno==1) {
    closeDialog() ;
    window.location.href = 'http://wenda.wecenter.com/?/down/download/'
}else{
    alert(result.err);
}
}
});
}

