import React,{Component} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import Suggest from './component/Suggest'
import Live from './component/Live'
import Dance from './component/Dance'
import Photos from './component/Photos'
import movement from './component/movement'
import VideoPlayDetail from './component/VideoPlayDetail'
import LivePlayOnWebview from './component/LivePlayOnWebview'
import Category from "./component/Category";
import CategoryList from "./component/CategoryList";


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



const MaterialTopTabNavigator =  createMaterialTopTabNavigator(
    {

        直播: LiveStack ,
        推荐: SuggestStack ,
        分区: CategoryStack,
        舞蹈: Dance,
        相册: Photos,
        动态: movementStack
    },
    {
        initialRouteName: '推荐',
        animationEnabled: true,
        lazy: true,
        optimizationsEnabled: true,
        // swipeEnabled: false,
    }
);

const RootStack = createStackNavigator(
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