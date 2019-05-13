import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "./Style"

export class ForgotPassScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Text style={[styles.title, styles.fogotPass]}>FORGOT PASSWORD</Text>
                    <Text style={[styles.title, styles.description]}>Enter your email below to receive your password reset instructions</Text>
                </View>
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelInput}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <TouchableOpacity style={[styles.longButton, styles.submitPosition]}>
                        <Text style={styles.labelButton}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ForgotPassScreen
