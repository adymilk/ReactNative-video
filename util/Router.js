import React from 'react';
import {
    View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Suggest from '../component/Suggest'
import VideoPlayDetail from '../component/VideoPlayDetail'

const RootStack = createStackNavigator(
    {
        Suggest: Suggest,
        VideoPlayDetail: VideoPlayDetail,
    },
    {
        initialRouteName: 'Suggest',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3496f0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);



export default class App extends React.Component {
    render() {
        return(
            <View>
                <RootStack />
            </View>

        )
            ;
    }
}
