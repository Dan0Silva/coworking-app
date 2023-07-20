import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {}

export default (props: Props) => {
    const { placeholder, ...restProps } = props

    return (
        <View style={styles.container}>
            <TextInput {...restProps}
                style={styles.textinput}
                cursorColor={'#333'}
                placeholderTextColor={'#aaa'}
                placeholder={placeholder}
            />

        </View>
    )
}