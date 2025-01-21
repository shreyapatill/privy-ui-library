import { View, ScrollView } from "react-native";

import { H2, Muted } from "@/components/ui/typography";

export default function Modal() {
    return (
        <View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
            <H2 className="text-center">Color Library</H2>
            <ScrollView className="flex-1 w-full">
                <View className="flex flex-row justify-center gap-4 mb-4">
                    <View className="w-10 h-10 rounded-full bg-primaryDuskyRose" />
                    <View className="w-10 h-10 rounded-full bg-primaryRoseTea" />
                    <View className="w-10 h-10 rounded-full bg-primaryPaleBlush" />
                    <View className="w-10 h-10 rounded-full bg-primaryBlushShell" />
                </View>
                <View className="flex flex-row justify-center gap-4 mb-4">
                    <View className="w-10 h-10 rounded-full bg-secondaryCoralSpring" />
                    <View className="w-10 h-10 rounded-full bg-secondarySpringMelon" />
                    <View className="w-10 h-10 rounded-full bg-secondaryOchreFawn" />
                    <View className="w-10 h-10 rounded-full bg-secondaryFawnSun" />
                </View>
                <View className="flex flex-row justify-center gap-4 mb-4">
                    <View className="w-10 h-10 rounded-full bg-tertiaryViridianGreen" />
                    <View className="w-10 h-10 rounded-full bg-tertiaryGreenDew" />
                    <View className="w-10 h-10 rounded-full bg-tertiaryLightTeal" />
                    <View className="w-10 h-10 rounded-full bg-tertiaryTealDew" />
                </View>
                <View className="flex flex-row justify-center gap-4 mb-4">
                    <View className="w-10 h-10 rounded-full bg-neutralFloralWhite" />
                    <View className="w-10 h-10 rounded-full bg-neutralTimberGrey" />
                    <View className="w-10 h-10 rounded-full bg-neutralNightStorm" />
                    <View className="w-10 h-10 rounded-full bg-neutralSlateAsh" />
                </View>
            </ScrollView>
        </View>
    );
}
