import { createAppContainer, createStackNavigator } from 'react-navigation';

import ImageGallery from './ImageGallery';
import ImageDetails from './ImageDetails';

const routeConfig = {
  ImageGallery,
  ImageDetails
};

const navigatorConfig = {
  initialRouteName: 'ImageGallery',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
};

const Navigator = createStackNavigator(routeConfig, navigatorConfig);

const AppContainer = createAppContainer(Navigator);

export default AppContainer;
