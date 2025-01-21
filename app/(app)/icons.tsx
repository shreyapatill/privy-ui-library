import React from "react";
import { View, ScrollView } from "react-native";
import { H2, Muted } from "@/components/ui/typography";

import Pill from "@/assets/symptom-icons/pill";
import Check from "@/assets/symptom-icons/check";
import Exclamation from "@/assets/symptom-icons/exclamation";
import Late from "@/assets/symptom-icons/late";
import No from "@/assets/symptom-icons/no";

import { colorSchemes } from "@/assets/symptom-icons/colorSchemes";
import Medication from "@/assets/symptom-icons/medication";
import Painkillers from "@/assets/symptom-icons/painkiller";
// e.g. colorSchemes.blushEmpty => outlines
//      colorSchemes.blushFilled => solid fill

export default function Icons() {
  return (
    <View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
      <H2 className="text-center">Icon Library</H2>
      <ScrollView className="flex-1 w-full">
        
        {/* Pill Icon */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <Pill width={91} height={90} />
          <Muted>Pill</Muted>
        </View>

        {/* Taken (Check) */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <View className="flex items-center">
            <Check {...colorSchemes.blushEmpty} width={80} height={80} />
            <Muted>Taken (before tap)</Muted>
          </View>
          <View className="flex items-center">
            <Check {...colorSchemes.blushFilled} width={80} height={80} />
            <Muted>Taken (after tap)</Muted>
          </View>
        </View>

        {/* Missed (Exclamation) */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <View className="flex items-center">
            <Exclamation {...colorSchemes.blushEmpty} width={80} height={80} />
            <Muted>Missed (before tap)</Muted>
          </View>
          <View className="flex items-center">
            <Exclamation {...colorSchemes.blushFilled} width={80} height={80} />
            <Muted>Missed (after tap)</Muted>
          </View>
        </View>

        {/* Late */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <View className="flex items-center">
            <Late {...colorSchemes.blushEmpty} width={80} height={80} />
            <Muted>Late (before tap)</Muted>
          </View>
          <View className="flex items-center">
            <Late {...colorSchemes.blushFilled} width={80} height={80} />
            <Muted>Late (after tap)</Muted>
          </View>
        </View>

        {/* No Pill Day */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <View className="flex items-center">
            <No {...colorSchemes.blushEmpty} width={80} height={80} />
            <Muted>No Pill Day (before tap)</Muted>
          </View>
          <View className="flex items-center">
            <No {...colorSchemes.blushFilled} width={80} height={80} />
            <Muted>No Pill Day (after tap)</Muted>
          </View>
        </View>

        {/* Medication Icon */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <Medication {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>Medication</Muted>
        </View>

        {/* Painkillers */}
        <View className="flex flex-row justify-center items-center gap-4 mb-4">
          <View className="flex items-center">
            <Painkillers {...colorSchemes.blushEmpty} width={80} height={80} />
            <Muted>Painkillers (before tap)</Muted>
          </View>
          <View className="flex items-center">
            <Painkillers {...colorSchemes.blushFilled} width={80} height={80} />
            <Muted>Painkillers (after tap)</Muted>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
