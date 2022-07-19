import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainProvider from './src/contexts/context';

import RootStack from './src/navigation/RootStack';

export default function App() {



  return (
    <MainProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </MainProvider>

  );
}
