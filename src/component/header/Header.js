import React ,{Component} from 'react'
import {StyleSheet, View,Image,Text,Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {showErrorMsg} from '../../util/function'
import {config} from '../../config/defaultMsgConfig'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header} ref="header">
                <View style={{flex:3, height: 40,flexDirection:'row',alignItems: 'center',
                }}>
                    <Icon
                        name="bars"
                        size={19}
                        style={styles.menu}
                        onPress={() => showErrorMsg()}
                    />
                    <Image
                        onPress={() => showErrorMsg()}
                        style={styles.header_userHeadImg}
                        source={require('../../static/images/head.jpeg')}/>

                    <Text style={styles.appName}>{config.appName}</Text>
                </View>

                <View style={{flex:1, height: 40,flexDirection:'row',alignItems: 'center',
                    justifyContent: "center",}}>
                    <Icon
                        name="search"
                        size={19}
                        style={styles.download}
                        onPress={() => showErrorMsg()}
                    />
                    <Icon
                        name="download"
                        size={19}
                        style={styles.download}
                        onPress={() => showErrorMsg()}
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