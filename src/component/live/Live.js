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

//请求数量
const num = 60;

//API
const BASE_API = 'https://activity.uc.cn/uclive2017/roomlist?__dt=1392&__t=1538401886632&uc_param_str=dsdnfrpfbivesscpgimibtbmnijblauputogpintnwchgd&tag=live&entry=zbyp&num=';
const API = BASE_API + num;

// 计算左侧的外边距，使其居中显示
const {width,height} = Dimensions.get('window');
const cols = 2;
const marginLeft = 8;

const card_width = Number.parseInt((width - (cols+1)*marginLeft) / (cols));
const card_height = 120;
const hMargin = 10;


class Live extends Component {
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
                console.log(data)
                let dataList = data.data.feeds;
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
                onPress={() => this.pushTo('LivePlayOnWebview',rowData)}
            >

                <View style={styles.innerView}>
                    <Image source={{uri:rowData.image}} style={styles.imgView} />
                    <Text style={styles.categoryTitle}>{(rowData.nickname ? (rowData.nickname.length > 15 ? rowData.nickname.substr(0, 15) + "..." : rowData.nickname) : "")}</Text>
                    <Text style={styles.categorySamllTitle}>{rowData.watches} 人</Text>


                </View>
            </TouchableOpacity>
        )
    }


    pushTo(view,data){
        this.props.navigation.navigate(view,{
            relateid: data.relateid,
            title: data.title,
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
        paddingBottom: 20

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
        fontSize: 13,
        fontWeight: "600",
        textAlign:'center',
        padding: 5,
        width: card_width,
        color: '#2c2c2c',
    },
    categorySamllTitle:{
        textAlign:'left',
        paddingLeft: 12,
        width: card_width,
        color: '#858585',
    }
});

export default Live;