import React from 'react'
import {StyleSheet, View,Image,Text} from "react-native";
import {Component,} from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={{flex:3, height: 40,flexDirection:'row',alignItems: 'center',
                }}>
                    <Icon
                        name="bars"
                        size={19}
                        style={styles.menu}
                        // onPress={() => this.props.navigation.openDrawer()}
                    />
                    <Image
                        onPress={() => this.props.navigation.openDrawer()}
                        style={styles.header_userHeadImg}
                        source={require('../../static/images/head.jpeg')}/>

                    <Text style={styles.appName}>十个视频</Text>
                </View>

                <View style={{flex:1, height: 40,flexDirection:'row',alignItems: 'center',
                    justifyContent: "center",}}>
                    <Icon
                        name="download"
                        size={19}
                        style={styles.download}
                    />
                    <Icon
                        name="download"
                        size={19}
                        style={styles.download}
                    />

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#3496f0',
        flexDirection:'row',
        height: 40,
        alignItems: 'center',
    },

    menu:{
        color: '#fff',
    },
    header_userHeadImg:{
        marginLeft: 10,
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    appName:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 20,
    },
    download:{
        flex:1,
        color: '#fff',
        height: 20,
    },
    search:{
        flex:1,

        color: '#fff',
        height: 20,
    }

});