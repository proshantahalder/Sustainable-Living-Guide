import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChallengeCard from '../components/ChallengeCard';

const challenges = [
  { id: '1', title: 'No Single-Use Plastic', description: 'Avoid single-use plastic for a week', points: 100 },
  { id: '2', title: 'Plant-Based Week', description: 'Eat only plant-based meals for a week', points: 150 },
  // Add more challenges...
];

const ChallengesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={challenges}
        renderItem={({ item }) => <ChallengeCard title={item.title} description={item.description} points={item.points} />}
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

export default ChallengesScreen;