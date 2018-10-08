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


class category extends Component {
    static navigationOptions = {
        // title: '视频分类',
        header: null,

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
                //插入第一个“全部”tab
                data.result.itemList.unshift(
                    {
                        "data": {
                            "dataType": "dance",
                            "icon": "http://oe3vwrk94.bkt.clouddn.com/category_dance.jpg",
                            "title": "#舞蹈",
                        }
                    }
                );
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
                onPress={() => this.isFirst(rowData)}
            >

                <View>
                    <Image source={{uri:rowData.data.icon}} style={styles.imgView} />
                    <Text style={styles.categoryTitle}>{(rowData.data.title).substr(1,rowData.data.title.length)}</Text>

                </View>
            </TouchableOpacity>
        )
    }

    isFirst(rowData){
        if (rowData.data.dataType === 'dance'){
            this.props.navigation.navigate('Dance',{
                title: rowData.data.title.substr(1,rowData.data.title.length),
            })
        }else {
            this.pushTolistVideo(rowData.data)
        }
    }
    pushTolistVideo(data){
        const title = (data.title).substr(1,data.title.length);
        this.props.navigation.navigate('CategoryList',{
            id: data.id,
            title: title,
        })

    }

}



const styles = StyleSheet.create({

    listViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',
        // 侧轴方向
        backgroundColor: '#e7e1ea',
        paddingBottom: 20,

    },
    wrapStyle:{
        width: card_width,
        height:card_height + card_height/3,
        marginLeft:marginLeft,
        marginTop:hMargin,
        backgroundColor: 'white',
        borderRadius: 5,
    },

    imgView:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width:card_width,
        height:card_height
    },
    categoryTitle:{
        fontSize: 16,
        textAlign:'center',
        padding: 5,
        width: card_width,
        height:card_height/3,
        color: '#2c2c2c',
    }
});

export default category;