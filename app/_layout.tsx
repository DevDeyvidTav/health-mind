import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {


  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_left' }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="step-register-1" />
        <Stack.Screen name="step-register-2" />
        <Stack.Screen name="step-register-3" />
        <Stack.Screen name="step-register-4" />
        <Stack.Screen name="step-register-5" />
        <Stack.Screen name="step-register-6" />
      </Stack>
    </NativeBaseProvider>
  );
}
