import React, { Component } from 'react';
import {
     WebView,
    BackHandler
} from 'react-native';

import {config} from "../../config/defaultMsgConfig";
import {api} from "../../config/api";


export default class CommunionDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let header = undefined
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            tabBarVisible,
            header,
            // title: navigation.getParam('title', '获取title失败'),
            title: config.communionDetailTitle,
            headerStyle: {
                backgroundColor: '#3496f0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

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
                source={{uri: api.communion}}
                onNavigationStateChange={this._onNavigationStateChange}
                mediaPlaybackRequiresUserAction={false}
                startInLoadingState={true}
                injectedJavaScript={"$('.header,footer').remove();"}
            />
        );
    }
}