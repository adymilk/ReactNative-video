import React from "react";
import {Button, Image, View} from "react-native";

class MV extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            tabBarVisible: false,
        }
    }


    render() {
        return (
            <View style={{ flex: 1,backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{width: 350,height:350,marginBottom: 30}}
                    source={require('../../static/images/communion.jpg')} />
                <Button
                    title="开启社区之门"
                    onPress={() => this.props.navigation.navigate('CommunionDetail')}
                />
            </View>
        );
    }
}






export default MV;