import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import componentsScreen from './src/screens/componentsScreen';
import listScreen from './src/screens/listScreen';
import imageScreen from './src/screens/imageScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components: componentsScreen,
    List: listScreen,
    Image: imageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
