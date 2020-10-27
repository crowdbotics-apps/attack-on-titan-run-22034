import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings163767Navigator from '../features/Settings163767/navigator';
import Settings163750Navigator from '../features/Settings163750/navigator';
import BlankScreen0163747Navigator from '../features/BlankScreen0163747/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings163767: { screen: Settings163767Navigator },
Settings163750: { screen: Settings163750Navigator },
BlankScreen0163747: { screen: BlankScreen0163747Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
