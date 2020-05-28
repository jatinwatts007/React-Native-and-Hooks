import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/searchScreen';
const navigator = createStackNavigator(
  {
    Screen: SearchScreen,
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
