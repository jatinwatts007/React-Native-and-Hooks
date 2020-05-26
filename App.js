import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import componentsScreen from './src/screens/componentsScreen';
import listScreen from './src/screens/listScreen';
import imageScreen from './src/screens/imageScreen';
import ColorScreen from './src/screens/colorScreen';
import CouterScreen from './src/screens/counterScreen';
import SquareScreen from './src/screens/squareScreen';
import TextScreen from './src/screens/textScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components: componentsScreen,
    List: listScreen,
    Image: imageScreen,
    Count: CouterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
