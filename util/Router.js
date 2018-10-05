import React,{Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import Suggest from '../component/Suggest'
import Live from '../component/Live'
import Dance from '../component/Dance'
import Photos from '../component/Photos'
import movement from '../component/movement'
import VideoPlayDetail from '../component/VideoPlayDetail'
import LivePlayOnWebview from '../component/LivePlayOnWebview'
import Category from "../component/Category";
import CategoryList from "../component/CategoryList";
import Setting from "../component/Setting";


const SuggestStack = createStackNavigator(
    {
        Suggest: Suggest,
    }
);


const movementStack = createStackNavigator(
    {
        movement: movement,
    },
);




const LiveStack = createStackNavigator(
    {
        Live: Live,
    }
);

const CategoryStack = createStackNavigator(
    {
        Category: Category,
    }
);


const DanceStack = createStackNavigator(
    {
        Dance: Dance,
    },
);



const MaterialTopTabNavigator =  createMaterialTopTabNavigator(
    {

        直播: LiveStack ,
        推荐: SuggestStack ,
        分区: CategoryStack,
        舞蹈: DanceStack,
        相册: Photos,
        动态: movementStack
    },
    {
        // tabBarComponent: Setting,
        initialRouteName: '推荐',
        animationEnabled: true,
        lazy: true,
        optimizationsEnabled: true,
        // swipeEnabled: false,
    }
);

const TabStack = createStackNavigator(
    {
        tabs: MaterialTopTabNavigator,
        VideoPlayDetail: VideoPlayDetail,
        LivePlayOnWebview: LivePlayOnWebview,
        CategoryStack: CategoryStack,
        CategoryList: CategoryList,
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);


const RootStack = createDrawerNavigator(
    {
        首页: {
            screen: TabStack,
            navigationOptions:{
                title:'消息',                          //设置标题
                tabBarVisible:false,                  //隐藏标签栏，默认为true显示
                swipeEnabled:true,                    //是否允许滑动切换标签页，默认接收TabNavigator中的设置
                // tabBarIcon:(tab)=>renderIcon(tab,'message'),           //定义渲染Icon的方法
                tabBarLabel:'首页',             //定义标签文字或者渲染方法，如不设置默认渲染title
            }
        },
        设置: Setting,
    },
    {
        // drawerWidth:200,            //侧边栏的宽度
        // drawerPosition:'right',     //定义侧边栏位置右边，默认left左边
        // contentComponent:CustomDrawer,            //自定义侧边栏组件
        drawerBackgroundColor:'#c8eaff',          //侧边栏背景色
        contentOptions:{                          //对侧边栏中的标签详细设置如下↓
            activeTintColor:'#936eff',                 //标签激活时的前景色
            activeBackgroundColor:'#8fc3ff',           //标签激活时的背景色
            inactiveTintColor:'#598dff',               //标签未激活时的前景色
            inactiveBackgroundColor:'#c1e1ff',         //标签未激活时的背景色
            itemsContainerStyle:{                      //侧边栏整体样式
                borderTopWidth:2,borderTopColor:'#5153ff'
            },
            itemStyle:{                                //单个标签样式
                borderBottomWidth:2,borderBottomColor:'#41a6ff'
            },
            labelStyle:{                               //标签文字样式
                fontSize:16
            },
            // iconContainerStyle:styles.icon,            //标签icon样式
        }
    }
);

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor="#3496f0"/>
                <RootStack />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        width: 30,
        height: 30
    },
})