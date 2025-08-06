import { Stack } from "expo-router";
import './global.css'; 
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  return(
     <Stack screenOptions={{ headerShown: false }} />
  )
  const [fontsLoaded] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
