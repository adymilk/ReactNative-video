import React, { Component } from 'react';
import {
    AppRegistry, Button,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

module.exports = DetailsScreen;

// AppRegistry.registerComponent('playVideoPage', () => playVideoPage);
var styles = StyleSheet.create({

});