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
import Search from './component/category/category'
import Setting from './component/Setting'
// import RootStack from './util/Router'

const deviceW = Dimensions.get('window').width

const basePx = 375;
function px2dp(px) {
    return px *  deviceW / basePx
}
export default class TabDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {

        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                    // badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="分类"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="list" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="list" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'search'})}>
                    <Search/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="cog" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="cog" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <Setting/>
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
