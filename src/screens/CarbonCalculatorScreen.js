import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CarbonCalculatorScreen = () => {
  const [electricity, setElectricity] = useState('');
  const [transport, setTransport] = useState('');
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    const footprint = (Number(electricity) * 0.5) + (Number(transport) * 0.2);
    setResult(footprint.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Footprint Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Monthly Electricity Usage (kWh)"
        value={electricity}
        onChangeText={setElectricity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Monthly Transport Distance (km)"
        value={transport}
        onChangeText={setTransport}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateFootprint} />
      {result && <Text style={styles.result}>Your Carbon Footprint: {result} tons CO2/year</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarbonCalculatorScreen;