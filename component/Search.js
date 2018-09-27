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
                source={{uri: 'https://m.taobao.com/'}}
                startInLoadingState={true}
                renderLoading={this.webViewLoading}
                allowsInlineMediaPlayback={true}
            />
        )
    }




};

module.exports = Home;

// AppRegistry.registerComponent('Home', () => Home);

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
