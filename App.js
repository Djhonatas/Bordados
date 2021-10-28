import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Bordados from './src/telas/bordados';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <Bordados />
    </SafeAreaView>
  );
}
