import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const FormattedCurrency = ({ type, value }) => {
    const format = type === 'usd' ? 'us' : 'vn';
    const currency = type === 'usd' ? 'USD' : 'VND';
    const flag = type === 'usd' ? '🇺🇸' : '🇻🇳';
    const formatter = new Intl.NumberFormat(format, {
        currency,
        style: 'currency'
    });

    return (
        <Text style={styles.currencyText}>
            {formatter.format(value)} {flag}
        </Text>
    );
}
const styles = StyleSheet.create({
    currencyText: {
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold'
    }
});
export default FormattedCurrency;