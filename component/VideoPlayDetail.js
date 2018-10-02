import React, { Component } from 'react'
import {StyleSheet, View, ScrollView, Alert, Text, Image} from 'react-native'

import Video from 'react-native-af-video-player'



const theme = {
    title: '#FFF',
    more: '#fff',
    center: '#3496f0',
    fullscreen: '#446984',
    volume: '#fff',
    scrubberThumb: '#fff',
    scrubberBar: '#fff',
    seconds: '#fff',
    duration: '#fff',
    progress: '#fff',
    loading: '#3496f0'
}
class VideoPlayDetail extends Component {
    componentDidMount(){
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        const title = navigation.getParam('title', 'NO-title');
        console.log(title)
    }
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        // Setup the header and tabBarVisible status
        const header = state.params && (state.params.fullscreen ? undefined : null)
        const tabBarVisible = state.params ? state.params.fullscreen : true
        return {
            // For stack navigators, you can hide the header bar like so
            header:false,
            title: navigation.getParam('title', '获取title失败'),
            // For the tab navigators, you can hide the tab bar like so
            tabBarVisible,
        }
    }

    onFullScreen(status) {
        // Set the params to pass in fullscreen status to navigationOptions
        this.props.navigation.setParams({
            fullscreen: !status
        })
    }

    onMorePress() {
        Alert.alert(
            '标题',
            '功能开发中!',
            [{ text: '好的!' }]
        )
    }


    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'NO-ID');
        const url = navigation.getParam('playUrl', 'NO-ID');
        const description = navigation.getParam('description', 'NO-ID');
        const logo = "null";
        const placeholder = 'null'

        return (
            <View style={styles.container}>
                <Video
                    autoPlay={false}
                    url={url}
                    title={title}
                    logo={logo}
                    placeholder={placeholder}
                    onMorePress={() => this.onMorePress()}
                    onFullScreen={status => this.onFullScreen(status)}
                    rotateToFullScreen
                    playInBackground={true}
                    playWhenInactive={true}
                    inlineOnly
                    theme={theme}
                />

                <ScrollView style={styles.bottomContainer}>
                    {/*视频标题和描述*/}
                    <View>
                        <Text style={styles.videoTitle}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }

    onFullScreen(){
        console.log('正在全屏播放视频')
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomContainer:{
        padding: 10
    },
    videoTitle:{
        fontSize: 15,
        color: '#000000'
    }
});
export default VideoPlayDetail