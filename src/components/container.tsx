import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Container ({ children, className }: any) {
    return (
        <SafeAreaView className={`flex-1 h-screen pt-6  ${className}`}>
                <StatusBar style="dark" />
                {children}
        </SafeAreaView>
    )
}