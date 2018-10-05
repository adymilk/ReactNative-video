import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    BackHandler,
} from 'react-native';
import Video from 'react-native-af-video-player'



const theme = {
    title: '#FFF',
    more: '#fff',
    center: '#3496f0',
    fullscreen: '#fff',
    volume: '#fff',
    scrubberThumb: '#fff',
    scrubberBar: '#fff',
    seconds: '#fff',
    duration: '#fff',
    progress: '#fff',
    loading: '#3496f0'
}



//API
const BASE_API = 'http://api.apiopen.top/videoRecommend?id=';


// 计算左侧的外边距，使其居中显示
const {width,height} = Dimensions.get('window');
const cols = 1;
const marginLeft = 8;

const card_width = Number.parseInt((width - (cols+1)*marginLeft) / (cols));
const card_height = 120;
const hMargin = 10;


class VideoPlayDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        // const header = state.params && (state.params.fullscreen ? undefined : null)

        // alert(state.params.fullscreen)
        let header = undefined
        if (state.params.fullscreen === false){
            header = null
        }
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            tabBarVisible,
            header,
            title: navigation.getParam('title', '获取title失败'),
            headerStyle: {
                backgroundColor: '#3496f0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoaded:false
        };
    }

    componentDidMount(){
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        this.fetchData(id);
    }

    fetchData(id){
        id === 0 ? id = 110763 : id = id;
        // alert(id);
        fetch(BASE_API+id)
            .then((response) => response.json())
            .then((data) => {
                let dataList = [];
                for(let i=0; i<data.result.length; i++){
                    if (data.result[i].type !== "textCard" && data.code !== 400 ){
                        dataList.push(data.result[i]);
                    }
                }

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

        const { navigation } = this.props;
        const title = navigation.getParam('title', 'NO-title');
        const url = navigation.getParam('playUrl', 'NO-playUrl');
        const description = navigation.getParam('description', 'NO-ID');
        const logo = "null";
        const placeholder = 'null'
        return (


            <ScrollView style={{flex:1,backgroundColor: '#e7e1ea',}} ref='totop'>
                <View style={styles.container}>
                    <Video
                        autoPlay={false}
                        url={url}
                        logo={logo}
                        placeholder={placeholder}
                        onMorePress={() => this.onMorePress()}
                        onFullScreen={status => this.onFullScreen(status)}
                        rotateToFullScreen
                        playInBackground={true}
                        playWhenInactive={true}
                        scrollBounce={true}
                        lockPortraitOnFsExit={true}
                        theme={theme}
                    />

                    <View style={styles.bottomContainer}>
                        {/*视频标题和描述*/}
                        <View style={styles.video_header}>
                            <Text style={styles.videoTitle}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                        </View>

                        {
                            this.state.isLoaded ?
                                <View style={styles.suggest_video_wrapper}>
                                    <Text style={{margin: 8, color: '#000',fontSize: 17}}>相关视频</Text>
                                    <ListView
                                        dataSource={this.state.dataSource}
                                        renderRow={(rowData)=>this._renderRow(rowData)}
                                        contentContainerStyle={styles.listViewStyle}
                                    />
                                </View>
                                 :
                                <View style={styles.indicatorStyle}>
                                    <ActivityIndicator size='large' color='#398DEE'/>
                                </View>
                        }

                    </View>
                </View>



            </ScrollView>
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
                    <Image style={styles.imgView} source={{uri:rowData.data.cover.feed}}  />
                    <View>
                        <Text style={styles.categoryTitle}>{rowData.data.title ? (rowData.data.title.length > 18 ? rowData.data.title.substr(0, 18) + "..." : rowData.data.title) : ""}</Text>
                        <Text style={styles.author}>UP：{rowData.data.author.name}</Text>
                    </View>



                </View>
            </TouchableOpacity>
        )
    }


    pushToVideoDetail(data){
        this.refs.totop.scrollTo({x:0,y: 0,animated:true});
        this.props.navigation.navigate('VideoPlayDetail',{
            id: data.id,
            title: data.data.title,
            playUrl: data.data.playUrl,
            description: data.data.description
        })

    }

    onFullScreen(status) {
        // Set the params to pass in fullscreen status to navigationOptions
        // this.props.navigation.setParams({
        //     fullscreen: !status
        // })
    }

    onMorePress() {
        Alert.alert(
            '标题',
            '功能开发中!',
            [{ text: '好的!' }]
        )
    }

}



const styles = StyleSheet.create({
    video_header:{
      padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    suggest_video_wrapper:{
        paddingBottom: 10
    },
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
        height:card_height,
        marginLeft:marginLeft,
        marginTop:hMargin,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    innerView:{
        flex: 1,
        flexDirection: "row",
        width: card_width,
        height:card_height,
    },
    imgView:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width:card_width/3,
        height:card_height,
    },
    categoryTitle:{
        fontSize: 15,
        fontWeight: "200",
        textAlign:'left',
        width: card_width-(card_width/3),
        color: '#3c3c3c',
        paddingTop: 5,
        paddingLeft: 5,
    },
    author:{
        position: "absolute",
        bottom: 5,
        left: 5
    },

    container: {
        flex: 1
    },
    bottomContainer:{
        flex: 1,
    },
    videoTitle:{
        fontSize: 17,
        color: '#000000'
    }
});
export default VideoPlayDetail;