import React from "react";
import { View, TextInput } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

export default props => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid={"transparent"} 
                placeholderTextColor={'#404040'}
                placeholder={props.placeholder}
                cursorColor={'#404040'}
            />

            <Icon name={'eye'} 
                  size={20}
                  color={'#707070'} 
                  style={styles.icon}
            />
        </View>
    ) 
}