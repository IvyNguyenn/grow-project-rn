import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "./Style"
import { images } from "../../Assets"
import { SCREEN_NAME } from "../../Constants/ScreenName";

export class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    /**
     * handle user Login, if logined redirect HomeScreen
     */
    handleLogin = () => {
        const { navigation } = this.props;
        navigation.navigate(SCREEN_NAME.MAIN);
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoSize} source={images.logo} />
                </View>
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelInput}>Username</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="User name"
                            autoFocus
                            returnKeyType="send"
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelInput}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginTouchable} onPress={this.handleLogin}>
                        <Text style={styles.labelButton}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN_NAME.FORGOT_PASSWORD)}>
                        <Text style={styles.labelInput}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoginScreen
