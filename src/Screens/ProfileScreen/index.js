import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../Assets/Theme";

export class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarIcon: props => (
            <Icon name="user" size={25} color={props.focused ? colors.mainBackgroundColor : "gray"} />
        )
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> Profile Screen </Text>
            </View>
        )
    }
}

export default ProfileScreen
