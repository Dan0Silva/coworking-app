import React from "react";
import { View, Image } from "react-native";

import Text from '../../components/Text/Index';
import InputLogin from '../../components/InputLogin/Index'
import Logo from '../../components/Logo/Index';
import styles from "./styles";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.pointer}/>

                <View style={styles.logo}>
                    <Logo textStyle={styles.textLogoStyle}/>
                </View>

                <View style={styles.loginForm}>
                    <InputLogin placeholder={' Email'}/>
                    <InputLogin placeholder={' Password'}/>
                </View>

                <View style={styles.buttonsView}>
                    
                </View>
            </View>
        </View>
    )
}
