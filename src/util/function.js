import {Alert} from "react-native";

function getLocalTime(timestamp) {
    let date = new Date(timestamp);
    Y = date.getFullYear() + '年';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
    D = date.getDate() + '日 ';
    h = date.getHours() + '时';
    m = date.getMinutes() + '分';
    s = date.getSeconds() + '秒';
    // noinspection JSAnnotator
    return Y+M+D+h+m+s;
}

function randomVideoPlayednum(max=50000,min=1000) {
    let num = Math.floor(Math.random()*(max-min+1)+min);
    if (num >= 10000){
        //保留两位小数
        num = Math.round((num/10000)*100)/100;

        return num + '万'
    }else {
        return num;
    }
}

function showErrorMsg(msg='亲、非常抱歉。此功能暂时不开放！') {
    Alert.alert('提示',msg)
}

export{
    getLocalTime,
    randomVideoPlayednum,
    showErrorMsg,
}