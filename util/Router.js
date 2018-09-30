
import {StackNavigator} from 'react-navigation';
import Home from '../component/Home'
import playVideoPage from '../component/playVideoPage'
import {AppRegistry} from "react-native";

const RootStack = StackNavigator(
    {
        Home: Home,
        playVideoPage: playVideoPage,
    },
    {
        initialRouteName: 'Home',
    }
);

export default RootStack;
AppRegistry.registerComponent('RootStack', () => RootStack);