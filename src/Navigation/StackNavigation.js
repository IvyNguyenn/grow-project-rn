import HelloScreen from "../Screens/HelloScreen";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPassScreen from "../Screens/ForgotPassScreen";
import MainScreen from "../Screens/MainScreen";
import { SCREEN_NAME } from "../Constants/ScreenName";

export const STACK_NAVIGATION = {
    HELLO: {
        screen: HelloScreen,
    },
    LOGIN: {
        screen: LoginScreen,
    },
    FORGOT_PASSWORD: {
        screen: ForgotPassScreen,
    },
    MAIN: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        }
    },
}