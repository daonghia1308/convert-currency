import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import FormattedCurrency from './components/formattedCurrency/FormattedCurrency'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import ConvertButton from "./components/convertButton/convertButton"

export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('vnd');

  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedValue(value);
  };

  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };
  useEffect(convertCurrency)
  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        onChangeText={setFromCurrencyValue}
        keyboardType="number-pad"
        selectionColor="red"
        textAlign="center"
        style={styles.textInput}
        placeholder="100,000,000 VND" />
      <ConvertButton
        to={'usd'}
        from={'vnd'}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <ConvertButton
        to={'vnd'}
        from={'usd'}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <Text>Current currency:</Text>
      <FormattedCurrency type={fromCurrency} value={currentCurrencyValue} />
      <Text>Conversion currenecy:</Text>
      <FormattedCurrency type={toCurrency} value={convertedCurrencyValue} />
      {/* <Text style={styles.currencyText}>{convertedCurrencyValue}</Text> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});
