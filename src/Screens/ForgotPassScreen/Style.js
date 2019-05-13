import { StyleSheet } from "react-native"
import { colors } from "../../Assets/Theme"

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColorFogotScreen
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
        color: colors.fontColorGray,
        paddingHorizontal: 20
    },
    title: {
        color: colors.fontColorGray,
        textAlign: "center",
        paddingHorizontal: 40,
    },
    fogotPass: {
        fontSize: 15,
        fontWeight: "700",
        marginVertical: 30
    },
    description: {
        fontWeight: "600",
    },
    textInput: {
        height: 35,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputLineBottomColor
    },
    loginTouchable: {
        marginVertical: 30
    },
    longButton: {
        width: "80%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        backgroundColor: colors.mainBackgroundColor,
    },
    labelButton: {
        color: colors.backgroundColorFogotScreen,
        fontSize: 14,
        fontWeight: "bold"
    },
    submitPosition: {
        marginVertical: 50
    }
})