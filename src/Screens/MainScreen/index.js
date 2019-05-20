import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import { MAIN_TAB_NAVIGATION } from "../../Navigation/TabNavigation"
import { colors } from "../../Assets/Theme"

const MainTabNavigatorConfig = {
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: colors.mainBackgroundColor,
        labelStyle: {
            fontSize: 12,
            fontWeight: "700"
        }
    }
}
const MainTabNavigator = createBottomTabNavigator(MAIN_TAB_NAVIGATION, MainTabNavigatorConfig);
const MainScreen = createAppContainer(MainTabNavigator);

export default MainScreen
