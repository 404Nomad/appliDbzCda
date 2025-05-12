import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  console.log('App component rendered');
  
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App