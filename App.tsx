import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Icon} from 'react-native-elements';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoadingComplete}
      customComponent={<Icon size={150} name="weather-partly-cloudy" type="material-community" />}
      backgroundColor={'#62abe3'}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    </AnimatedSplash>
  );
}
