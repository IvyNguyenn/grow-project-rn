import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { styles } from "./Style"
import { SCREEN_NAME } from "../../Constants/ScreenName";
import { images } from "../../Assets"

export class HelloScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(SCREEN_NAME.LOGIN);
        }, 1000);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.logoSize} source={images.logo} />
            </View>
        )
    }
}

export default HelloScreen

