// filepath: /C:/coding/Privy-App/expo-supabase-starter1/app/(app)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

import { colors } from "@/constants/colors";
import { useColorScheme } from "@/lib/useColorScheme";

export default function ProtectedLayout() {
    const { colorScheme } = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor:
                        colorScheme === "dark"
                            ? colors.dark.background
                            : colors.light.background,
                },
                tabBarActiveTintColor:
                    colorScheme === "dark"
                        ? colors.dark.foreground
                        : colors.light.foreground,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="modal" options={{ title: "Color Library" }} />
            <Tabs.Screen name="icons" options={{ title: "Icon Library" }} />
        </Tabs>
    );
}