import React from 'react';

import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Intro from './screens/Intro';

export default function App() {
  const colorScheme = useColorScheme();

    return <Intro colorScheme={colorScheme}/>
    {/* 
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
     */}
}
