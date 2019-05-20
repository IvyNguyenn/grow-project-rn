import { createStackNavigator, createAppContainer } from "react-navigation";
import { STACK_NAVIGATION } from "./src/Navigation/StackNavigation";

const AppNavigator = createStackNavigator(STACK_NAVIGATION);
const App = createAppContainer(AppNavigator);

export default App;
