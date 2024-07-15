import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import CarbonCalculatorScreen from '../screens/CarbonCalculatorScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
        <Stack.Screen name="CarbonCalculator" component={CarbonCalculatorScreen} />
        <Stack.Screen name="Challenges" component={ChallengesScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;