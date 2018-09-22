
import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View, Button,} from "react-native";

export default class SampleAppMovies extends Component {

    render() {
        return this.renderLoadingView();
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>

                <View style={styles.title_wrapper}>
                    <Image source={{uri: 'https://reactnative.cn/img/header_logo.png'}}
                           style={{width: 36, height: 34,padding: 20}} />
                    <Text style={styles.title}>React Native</Text>
                    <Text style={styles.sub_title}>使用JavaScript和React编写原生移动应用</Text>
                </View>

                <View style={styles.bottom_wrapper}>
                    <Button
                        onPress={this.alertMsg}
                        title="开启 app 开发新时代"
                        color="#841584"
                    />
                </View>

            </View>

        );
    }

    alertMsg=()=>{
        alert("alertMsginInfo");
    };


}

var styles = StyleSheet.create({
    container: {
        flex: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    title_wrapper:{
        flex: 7,
        width: 500,
        height: 200,
        backgroundColor: '#222',
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color: "#fff",
        fontSize: 50
    },
    sub_title:{
        color: "#999",
        fontSize: 18,
        marginTop: 10
    },
    bottom_wrapper:{
        flex: 3,
        marginTop: 20,
    },
    btn:{
        fontSize: 20
    }

});