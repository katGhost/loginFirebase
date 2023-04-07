import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroPage from './src/Screens/IntroPage/IntroPage';
import SignIn from './src/Screens/SignIn/SignIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Introduction' component={IntroPage} options={{headerShown: false}} />
        <Stack.Screen name='Sign In' component={SignIn} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}