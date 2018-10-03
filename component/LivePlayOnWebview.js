import React, { Component } from 'react';
import {WebView, View, StyleSheet, ActivityIndicator} from 'react-native';

const BASE_URL = "http://h.open.huajiao.com/l/index?&channelid=uclevel2&tag=live&uc_biz_str=S:custom|C:full_screen|M:true&liveid=";
class LivePlayOnWebview extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoaded:false
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        const header = state.params && (state.params.fullscreen ? undefined : null)
        return {
            header,
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

const styles = StyleSheet.create({
    listViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',
        // 侧轴方向
        backgroundColor: '#e7e1ea',
        paddingBottom: 120

    },

});

export default LivePlayOnWebview;
