import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import {api} from "../../config/api";
// 计算左侧的外边距，使其居中显示
const {width,height} = Dimensions.get('window');
const cols = 2;
const marginLeft = 8;

const card_width = Number.parseInt((width - (cols+1)*marginLeft) / (cols));
const card_height = 120;
const hMargin = 10;
let dataHotList = [];

class Suggest extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            // title: navigation.getParam('title', '获取title失败'),
            tabBarVisible: false,
        }
    };

    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoaded:false
        };
    }

    componentDidMount(){
        this.fetchHotData();
        this.fetchData();
    }

    fetchData(){
        fetch(api.hot)
            .then((response) => response.json())
            .then((data) => {
                let preDataList = [];

                for(let i=0; i<data.itemList.length; i++){
                    if (data.itemList[i].type === 'video'){
                        if (data.itemList[i].data.title === ""){
                            data.itemList[i].data.title = data.itemList[i].data.description;
                        }

                        preDataList.push(data.itemList[i]);
                    }
                }

                //数组合并
                let dataList = preDataList.concat(dataHotList);

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

    fetchHotData(){
        fetch(api.suggest)
            .then((response) => response.json())
            .then((data) => {
                for(let i=0; i<data.itemList.length; i++){
                    if (data.itemList[i].type === 'video'){
                        if (data.itemList[i].data.title === ""){
                            data.itemList[i].data.title = data.itemList[i].data.description;
                        }

                        dataHotList.push(data.itemList[i]);
                    }
                }

                console.log(dataHotList)
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
                onPress={() => this.pushToVideoDetail(rowData)}
            >

                <View style={styles.innerView}>
                    <Image source={{uri:rowData.data.cover.feed }} style={styles.imgView} />
                    <Text style={styles.categoryTitle}>{rowData.data.title ? (rowData.data.title.length > 18 ? rowData.data.title.substr(0, 18) + "..." : rowData.data.title) : ""}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    pushToVideoDetail(data){
        let updateTime
        let avatar
        let owner_nickname

        // if (data.data.author){
        //         owner_nickname=  data.data.author.name
        //         avatar = data.data.author.icon
        //         updateTime = ata.data.releaseTime
        // }else {
        //     owner_nickname=  data.data.content.data.author.name
        //     avatar = data.data.content.data.author.icon
        //     updateTime = data.data.content.data.date
        // }

        owner_nickname=  data.data.author.name
        avatar = data.data.author.icon
        updateTime = data.data.releaseTime

        this.props.navigation.navigate('VideoPlayDetail',{
            id: data.data.id,
            title: data.data.title,
            description: data.data.description,
            playUrl: data.data.playUrl,
            owner_nickname: owner_nickname,
            avatar: avatar,
            updateTime: updateTime,
            placeholder: data.data.cover.feed,
            shareCount: data.data.consumption.shareCount,
            collectionCount: data.data.consumption.collectionCount,
            replyCount: data.data.consumption.replyCount,
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
        paddingBottom: 10

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
        height:card_height+5,
    },
    imgView:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width:card_width,
        height:card_height
    },
    categoryTitle:{
        textAlign:'left',
        padding: 5,
        width: card_width,
        color: '#2c2c2c',
    }
});

export default Suggest;