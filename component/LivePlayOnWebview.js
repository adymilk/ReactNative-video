import React, { Component } from 'react';
import { WebView, View } from 'react-native';

const BASE_URL = "http://h.open.huajiao.com/l/index?&channelid=uclevel2&tag=live&uc_biz_str=S:custom|C:full_screen|M:true&liveid=";
class LivePlayOnWebview extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        // Setup the header and tabBarVisible status
        const header = state.params && (state.params.fullscreen ? undefined : null)
        const tabBarVisible = state.params ? state.params.fullscreen : true
        return {
            // For stack navigators, you can hide the header bar like so
            header,
            title: navigation.getParam('title', '获取title失败'),
            // For the tab navigators, you can hide the tab bar like so
            tabBarVisible,
        }
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
                injectJavaScript={"$('.h5_player_pause').click();"}
            />
        );
    }
}

export default LivePlayOnWebview;