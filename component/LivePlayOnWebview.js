import React, { Component } from 'react';
import {WebView, View, StyleSheet, ActivityIndicator} from 'react-native';

const BASE_URL = "http://h.open.huajiao.com/l/index?&channelid=uclevel2&tag=live&uc_biz_str=S:custom|C:full_screen|M:true&liveid=";
class LivePlayOnWebview extends Component {
    static navigationOptions = ({ navigation }) => {
        let header = undefined
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            tabBarVisible,
            header,
            title: navigation.getParam('title', '获取title失败'),
            headerStyle: {
                backgroundColor: '#3496f0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoaded:false
        };
    }

    render() {
        const { navigation } = this.props;
        const relateid = navigation.getParam('relateid', '直播ID获取失败');
        return (
            <WebView
                source={{uri: BASE_URL+relateid}}
                mediaPlaybackRequiresUserAction={false}
                startInLoadingState={true}
                injectedJavaScript={"$('#_live_video_msgbox,#dayRanks,._cell _cell_fol,#_header_follow_box,.menu-box,#_mic_box,._pep_coin,#_mini_dialog').remove();" +
                "$('#_live_video_header a').attr('href','javascript:;');"}
            />

        );
    }
}


export default LivePlayOnWebview;
