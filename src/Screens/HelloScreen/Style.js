import { StyleSheet } from "react-native";
import { colors } from "../../Assets/Theme"

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.mainBackgroundColor
    },
    logoSize: {
        flex: 1,
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    }
})