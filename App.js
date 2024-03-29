import React from 'react';
import { StatusBar, SafeAreaView, View, AppState } from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold,
 } from '@expo-google-fonts/montserrat';
 import AppLoading from 'expo-app-loading';

import Bordados from './src/telas/bordados';
import mock from './src/mocks/bordado';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
   return <AppLoading />
  }

  return (
    <SafeAreaView style ={{flex: 1}} >
      <StatusBar />
      <Bordados {...mock} />
    </SafeAreaView>
  );
}