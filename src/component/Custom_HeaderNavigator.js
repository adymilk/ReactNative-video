import React from 'react'

import {Navigator} from 'react-native'

///自定义路由导航
export default class Custom_HeaderNavigator extends Navigator.NavigationBar {
    render() {
        var routes = this.props.navState.routeStack;

        if (routes.length) {
            var route = routes[routes.length - 1];
            //返回null，导航将会消失，也就达到了隐藏导航栏的目的
            if (route.display === false) {
                return null;
            }else{
                // return super.render(); //这是调用系统提供的UI,我们不管直接注释掉，自己写一个自己需要的
                return (
                    <View style={{position:'absolute',top:0,left:0,width:width,height:Platform.OS === 'ios' ? 64 : 56,backgroundColor:'#f9f9f9',paddingTop:Platform.OS === 'ios' ? 20 : 20,justifyContent:'center',alignItems:'center'}}>
                        <View>
                            <Text>{route.name}</Text>
                        </View>
                    </View>
                );
            }
        }
    }
}
