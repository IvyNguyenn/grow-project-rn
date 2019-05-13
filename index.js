/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { STACK_NAVIGATION } from "./src/Navigation/StackNavigation";

const AppNavigator = createStackNavigator(STACK_NAVIGATION)
const App = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => App);
