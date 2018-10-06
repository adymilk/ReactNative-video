import React from "react";
import {Button, Text, View} from "react-native";

class MV extends React.Component {
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
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>
        );
    }
}






export default MV;