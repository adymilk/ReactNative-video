import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        let header = undefined
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            header: false,
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

    render() {
        return (
            <View>
                <Text>设置界面待开发!</Text>
            </View>
        );
    }
}
