import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

//引入外部组件
import Home from './component/Home'
import Search from './component/Search'
import Mine from './component/Mine'
import Router from './util/Router'
import playVideoPage from './component/playVideoPage'

import {createStackNavigator} from "react-navigation";

const deviceW = Dimensions.get('window').width

const basePx = 375;
function px2dp(px) {
    return px *  deviceW / basePx
}



export default class TabDemo extends Component {
    state= {
        selectedTab: 'home'
    };

    render() {

        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="搜索"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="search" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="search" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'search'})}>
                    <Search/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="envelope" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="envelope" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <Mine/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('TabDemo', () => TabDemo);
