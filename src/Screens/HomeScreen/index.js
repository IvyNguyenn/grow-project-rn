import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../Assets/Theme";

export class HomeScreen extends Component {
    static navigationOptions = {
        tabBarIcon: props => (
            <Icon name="home" size={25} color={props.focused ? colors.mainBackgroundColor : "gray"} />
        )
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> Home Screen </Text>
            </View>
        )
    }
}

export default HomeScreen
