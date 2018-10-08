# 软件名称：昕视界

**项目介绍**

1、React Native 开发的跨平台APP

2、视频接口来源于网络

3、代码开源，供有需要的同学学习和参考

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