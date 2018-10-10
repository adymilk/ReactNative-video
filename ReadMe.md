# 软件名称：昕视界
![](http://image.coolapk.com/apk_image/2018/1009/10/530899677927348422-205560-o_1cpbap8vv1kdb1gs498f1ceaogk17-uid-638761@1080x1920.jpg)

**项目介绍**

1、React Native 开发的跨平台APP

2、视频接口来源于网络

3、代码开源，供有需要的同学学习和参考


**新特性**

[ ] 1、视频评论
[ ] 2、视频弹幕
[ ] 3、视频历史记录
[ ] 4、用户上传视频


**开发笔记**

1、自定义 `Navigator Header`

```js
import Header from "./component/header/Header";

const TabStack = createStackNavigator(
    {
        tabs: MaterialTopTabNavigator,
        VideoPlayDetail: VideoPlayDetail,
        LivePlayOnWebview: LivePlayOnWebview,
        CategoryList: CategoryList,
        Dance: Dance,
        CommunionDetail: CommunionDetail,

    },
    {
        navigationOptions: {
            //重点就在这里，<Header/> 是我自定义的 header
            header: <Header/>,
        },
    }
);
```

2、更改安卓项目包名后，运行报错 `Application adymilk.xinvideohasnotbeenregistered`
如图：
![图片来源网络](http://oe3vwrk94.bkt.clouddn.com/20181009-1.png)

解决方法如下：

打开RN 项目根目录下的 `app.json`
```json
{
  "name": "adymilk.xinvideo",
  "displayName": "adymilk.xinvideo"
}
```

我的包名修改后的是 `com.adymilk.xinvideo`，在这里只需要填写`com.` 后面的名称即可

3、安卓手机返回键 实现 `Webview` 网页后退功能

```js
componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}


// 获取 webview 事件返回的 canGoBack 属性 ， 判断网页是否可以回退
_onNavigationStateChange (navState){
    if(navState.canGoBack){
        global.isBack = true;
    }else{
        global.isBack = false;
    }
}

handleBackPress = () => {
    if (isBack) {
        this.refs['webView'].goBack();
        return true;
    }
}
    
render() {
        return (
            <WebView
                ref="webView"
                source={{uri: 视频播放链接}}
                onNavigationStateChange={this._onNavigationStateChange}
            />
        );
    }
``` 

代码要点解析

`ref="webView"` 相当于 `class="webView` 这样来理解会比较容易。
然后在 `RN` 生命周期 `componentDidMount` 和 `componentWillUnmount` 中调用 `handleBackPress` 方法。
通过 `this.refs['webView'].goBack();` 网页就可以通过安卓返回键实现返回了。

