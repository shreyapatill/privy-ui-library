// filepath: /C:/coding/Privy-App/expo-supabase-starter1/app/(app)/index.tsx
import { router } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
            <H1 className="text-center">Home</H1>
            <Muted className="text-center">
                You are now authenticated and this session will persist even after
                closing the app.
            </Muted>
            <Button
                className="w-full"
                variant="default"
                size="default"
                onPress={() => router.push("/(app)/modal")}
            >
                <Text>Open Color Library</Text>
            </Button>
            <Button
                className="w-full"
                variant="default"
                size="default"
                onPress={() => router.push("/(app)/icons")}
            >
                <Text>Open Icon Library</Text>
            </Button>
        </View>
    );
}