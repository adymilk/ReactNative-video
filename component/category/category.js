import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
//API
const API = 'http://api.apiopen.top/videoCategory';

// 计算左侧的外边距，使其居中显示
const {width,height} = Dimensions.get('window');
const cols = 2;
const marginLeft = 8;

const card_width = Number.parseInt((width - (cols+1)*marginLeft) / (cols));
const card_height = 120;
const hMargin = 10;


import listVideo from './listVideo'

class category extends Component {
    static navigationOptions = {
        title: '视频分类',

    };

    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoaded:false
        };
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                let dataList = data.result.itemList;
                this.setState({
                    dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(dataList),
                    isLoaded:true
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    dataSource: null,
                    isLoaded:false
                })
            })
            .done()
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                {
                    this.state.isLoaded ?
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData)=>this._renderRow(rowData)}
                            contentContainerStyle={styles.listViewStyle}
                        /> :
                        <View style={styles.indicatorStyle}>
                            <ActivityIndicator size='large' color='#398DEE'/>
                        </View>
                }

            </View>
        );
    }
    // 注意TouchableOpacity和内层View容器的样式
    _renderRow(rowData){
        return (
            <TouchableOpacity
                style={styles.wrapStyle}
                activeOpacity={0.5}
                onPress={() => this.pushTolistVideo(rowData.data)}
            >

                <View style={styles.innerView}>
                    <Image source={{uri:rowData.data.icon}} style={styles.imgView} />
                    <Text style={styles.title}>{rowData.data.title ? (rowData.data.title.length > 20 ? rowData.data.title.substr(0, 20) + "..." : rowData.data.title) : ""}</Text>

                </View>
            </TouchableOpacity>
        )
    }


    pushTolistVideo(data){
        this.props.navigation.navigate('listVideo',{
            id: data.id,
        })

    }

}


const RootStack = createStackNavigator(
    {
        Home: category,
        listVideo: listVideo,
    },
    {
        initialRouteName: 'Home',
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


const styles = StyleSheet.create({
    headerContainer:{
        height:30,
        backgroundColor:'#398DEE',
        justifyContent:'center',
        alignItems:'center'
    },
    headerTxt:{
        color:'#fff',
        fontSize:14,
    },
    indicatorStyle:{
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    listViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',
        // 侧轴方向
        backgroundColor: '#e7e1ea',
        paddingBottom: 50,

    },
    wrapStyle:{
        width: card_width,
        height:card_height+50,
        marginLeft:marginLeft,
        marginTop:hMargin,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    innerView:{
        width: card_width,
        height:card_height+50,
    },
    imgView:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width:card_width,
        height:card_height
    },
    title:{
        padding: 5,
        width: card_width,
        color: '#2c2c2c',
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}


