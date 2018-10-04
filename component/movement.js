import React from "react";
import {Text, View} from "react-native";

class movement extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            title: navigation.getParam('title', '获取title失败'),
            tabBarVisible: false,
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={() =>{this.props.navigation.navigate('Setting')}}>动态页点击跳转!</Text>
            </View>
        );
    }
}






export default movement;