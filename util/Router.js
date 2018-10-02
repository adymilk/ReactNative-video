import {createStackNavigator} from "react-navigation";
import Home from "../component/Home";
import category from "../component/Category";
import playVideoPage from "../component/VideoPlayDetail";


const RootStack = createStackNavigator(
    {
        Home: Home,
        playVideoPage: playVideoPage,
        category: category,
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

export default RootStack;