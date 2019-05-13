import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class HomeScreen extends Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View Style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> Home Screen </Text>
            </View>
        )
    }
}

export default HomeScreen
