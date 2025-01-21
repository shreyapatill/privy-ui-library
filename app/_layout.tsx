import "../global.css";

import { Slot } from "expo-router";
import { useFonts, Outfit_400Regular, Outfit_600SemiBold, Outfit_500Medium } from "@expo-google-fonts/outfit";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <Slot />
  );
}