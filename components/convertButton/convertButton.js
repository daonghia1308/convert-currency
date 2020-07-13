import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ConvertButton = props => {
    const backgroundColor =
        props.fromCurrency === props.from && props.toCurrency === props.to
            ? 'lightblue'
            : null;
    const buttonStyle = { backgroundColor: backgroundColor };

    const fromFlag = props.from === 'usd' ? '🇺🇸' : '🇻🇳';
    const toFlag = props.to === 'usd' ? '🇺🇸' : '🇻🇳';

    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={() => props.setConversionCurrencies(props.from, props.to)}
        >
            <Text style={styles.buttonText}>
                {fromFlag} to {toFlag}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 35,
        width: 200,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'lightblue',
        justifyContent: 'center'
    }
});

export default ConvertButton;