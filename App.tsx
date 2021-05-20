import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import OnboardingStatus from './hooks/updateOnBoardingStatus';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import OnBoardingScreen from './screens/OnBoarding';
import { store } from './Redux/Store';

// import store from './store/store';



export default function App() {
  const isLoadingComplete = useCachedResources();
  const OnboardingStatus = useCachedResources();

  const colorScheme = useColorScheme();

  if (!OnboardingStatus) {
    return (
      <SafeAreaProvider>
        <OnBoardingScreen />
      </SafeAreaProvider>
    )
  } else if (isLoadingComplete) {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={"light"} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}


