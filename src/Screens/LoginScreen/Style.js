import { StyleSheet } from "react-native";
import { colors } from "../../Assets/Theme"

const mainBackgroundColor = "#25928E";
const fontColor = "#ECF0F1";

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: colors.mainBackgroundColor
    },
    logoContainer: {
        flex: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    logoSize: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    },
    loginFormContainer: {
        flex: 60,
        alignItems: "center",
    },
    inputContainer: {
        width: "70%",
        marginVertical: 20,
    },
    labelInput: {
        paddingHorizontal: 20,
        color: colors.fontColor
    },
    textInput: {
        height: 35,
        paddingHorizontal: 20,
        color: colors.fontColor,
        borderBottomWidth: 1,
        borderBottomColor: colors.fontColor
    },
    loginTouchable: {
        marginVertical: 30,
    },
    labelButton: {
        color: colors.fontColor,
        fontSize: 16,
        fontWeight: "bold"
    }
})