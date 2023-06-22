import React from "react";
import { View, Image } from "react-native";

import Text from '../../components/Text/Index';
import styles from "./styles";

export default props => {
    const imagePath = require('../../assets/images/logo.jpg')

    return (
        <View style={[styles.logo, props.logoStyle]}>
            <Image source={imagePath} style={[styles.image, props.imageStyle]}/>
        
            <Text style={[styles.logoText, props.textStyle]}>
                <Text bold>Cool</Text>-Working
            </Text>
        </View>
    )
}