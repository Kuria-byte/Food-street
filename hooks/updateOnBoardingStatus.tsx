import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import FONTS from'../assets/ultis/fonts';

export default function UpdateOnboardingStatus() {

  const [OnboardingStatus, setOnboardingStatus ] = React.useState(true);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadStatus() {
      try {
        setOnboardingStatus(false);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        console.log(OnboardingStatus);
       
      }
    }
    loadStatus();
  }, []);

  return OnboardingStatus;
}
