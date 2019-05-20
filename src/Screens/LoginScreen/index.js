import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { styles } from "./Style";
import { images } from "../../Assets";
import { SCREEN_NAME } from "../../Constants/ScreenName";
import { STRING } from "../../Constants/Const";
import { postLogin } from "../../Services/LoginService";
import { service } from "../../Services/Service.config";

export class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: STRING.EMPTY,
            password: STRING.EMPTY,
        };
    }

    /**
     * handle user Login, if logined redirect HomeScreen
     */
    handleLogin = () => {
        const { userName, password } = this.state;
        const { navigation } = this.props;
        postLogin(userName, password)
            .then(data => {
                service.setToken(data.tokenType, data.accessToken);
                navigation.navigate(SCREEN_NAME.MAIN);
            })
            .catch(error => {
                Alert.alert("Error", error, [{ text: "OK" }], {
                    cancelable: false,
                });
            });
    };

    render() {
        const { userName, password } = this.state;
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
                            value={userName}
                            onChangeText={userName =>
                                this.setState({ userName })
                            }
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelInput}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={password =>
                                this.setState({ password })
                            }
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginTouchable}
                        onPress={this.handleLogin}
                    >
                        <Text style={styles.labelButton}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate(
                                SCREEN_NAME.FORGOT_PASSWORD
                            )
                        }
                    >
                        <Text style={styles.labelInput}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
