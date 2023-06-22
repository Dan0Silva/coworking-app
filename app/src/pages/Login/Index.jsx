import React from "react";
import { View, Image } from "react-native";

import Text from '../../components/Text/Index';
import Logo from '../../components/Logo/Index';
import styles from "./styles";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.pointer}/>

                <Logo textStyle={styles.textLogoStyle}/>

                <View>
                    {/* inputs */}
                </View>

                <View>
                    {/* buttons */}
                </View>
            </View>
        </View>
    )
}
