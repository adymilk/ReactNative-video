import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';

class Setting extends Component {
    render() {
        return (
            <View>
                <Text>ddd</Text>
                <Image source={{uri: 'http://oe3vwrk94.bkt.clouddn.com/back.png'}}
                       style={{width: 400, height: 400}} />
            </View>
        );
    }
}

export default Setting;