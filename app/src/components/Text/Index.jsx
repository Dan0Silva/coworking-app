import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

import styles from "./styles";

export default props => {
    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
    })

    if (!fontsLoaded) {
        return null;
    }

    const textStyle = props.bold ? styles.textBold : styles.textRegular;

    return (
        <Text style={[textStyle, props.style]}>{props.children}</Text>
    )
}

