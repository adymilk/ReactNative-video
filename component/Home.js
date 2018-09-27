import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'http://211.149.159.75'}}
                startInLoadingState={true}
                renderLoading={this.webViewLoading}
                allowsInlineMediaPlayback={true}
            />
        )
    }

    webViewLoading(){
        return(
            <View style={styles.container}>
                <Text>拼命加载中...</Text>
            </View>
        )
    }


};

module.exports = Home;

// AppRegistry.registerComponent('Home', () => Home);
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    }
});
