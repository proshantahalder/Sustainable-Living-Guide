import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ResourceItem from '../components/ResourceItem';

const resources = [
  { id: '1', title: 'Local Recycling Center', description: 'Address and operating hours of nearby recycling facilities' },
  { id: '2', title: 'Eco-Friendly Products', description: 'A list of sustainable product alternatives' },
  // Add more resources...
];

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={resources}
        renderItem={({ item }) => <ResourceItem title={item.title} description={item.description} />}
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

export default ResourcesScreen;