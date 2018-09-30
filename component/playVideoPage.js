import React, { Component } from 'react'
import {StyleSheet, View, ScrollView, Alert, Text, Image} from 'react-native'

import Video from 'react-native-af-video-player'



const theme = {
    title: '#FFF',
    more: '#446984',
    center: '#7B8F99',
    fullscreen: '#446984',
    volume: '#A5957B',
    scrubberThumb: '#234458',
    scrubberBar: '#DBD5C7',
    seconds: '#DBD5C7',
    duration: '#DBD5C7',
    progress: '#446984',
    loading: '#DBD5C7'
}
class ReactNavigationExample extends Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        // Setup the header and tabBarVisible status
        const header = state.params && (state.params.fullscreen ? undefined : null)
        const tabBarVisible = state.params ? state.params.fullscreen : true
        return {
            // For stack navigators, you can hide the header bar like so
            header,
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
        this.props.navigation.goBack()
        // Alert.alert(
        //     'Boom',
        //     'This is an action call!',
        //     [{ text: 'Aw yeah!' }]
        // )
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
                    rotateToFullScreen={true}
                    playInBackground={true}
                    playWhenInactive={true}
                    // theme={theme}
                />
                {/*返回*/}
                <Image
                    source={{uri: 'http://oe3vwrk94.bkt.clouddn.com/back.png'}}
                    style={{width:22,height:22,position:'absolute',top:15,left:15,zIndex:999}}
                />

                <ScrollView style={styles.bottomContainer}>
                    <View >
                        <Text style={styles.videoTitle}>{title}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text>{description}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    onFullScreen(){
        alert(111)
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
export default ReactNavigationExample