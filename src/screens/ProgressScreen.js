import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressChart from '../components/ProgressChart';

const ProgressScreen = () => {
  const progressData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [20, 45, 28, 80]
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      <ProgressChart data={progressData} />
      <Text style={styles.stats}>Total Points: 173</Text>
      <Text style={styles.stats}>Completed Challenges: 5</Text>
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
  stats: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProgressScreen;