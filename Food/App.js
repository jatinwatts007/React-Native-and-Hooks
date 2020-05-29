import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/searchScreen';
import ResultScreen from './src/screens/resultScreen';
const navigator = createStackNavigator(
  {
    Screen: SearchScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
