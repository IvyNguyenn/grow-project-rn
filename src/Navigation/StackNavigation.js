import HelloScreen from "../Screens/HelloScreen";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPassScreen from "../Screens/ForgotPassScreen";
// import { Hello, Login, ForgotPassword } from "../Constants/ScreenName";

export const STACK_NAVIGATION = {
    Hello: {
        screen: HelloScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    ForgotPassword: {
        screen: ForgotPassScreen,
    },
}