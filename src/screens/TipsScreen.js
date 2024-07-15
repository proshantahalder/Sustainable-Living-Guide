import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TipCard from '../components/TipCard';

const tips = [
  { id: '1', title: 'Reduce Water Usage', content: 'Take shorter showers and fix leaky faucets.' },
  { id: '2', title: 'Use Reusable Bags', content: 'Bring your own bags when shopping to reduce plastic waste.' },
  // Add more tips...
];

const TipsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tips}
        renderItem={({ item }) => <TipCard title={item.title} content={item.content} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default TipsScreen;