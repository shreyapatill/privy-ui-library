import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { H2, Muted } from "@/components/ui/typography";

// Single-row icons (non-togglable)
import Pill from "@/assets/symptom-icons/pill";
import Medication from "@/assets/symptom-icons/medication";

import Ring from "@/assets/symptom-icons/ring";
import IUD from "@/assets/symptom-icons/iud";
import Tests from "@/assets/symptom-icons/tests";
import BirthControl from "@/assets/symptom-icons/birth-control";

// Toggable icons array
import { togglableIcons, ToggableIcon } from "@/assets/symptom-icons/togglableIcons";
import { colorSchemes } from "@/assets/symptom-icons/colorSchemes";
import Flow from "@/assets/symptom-icons/flow";
import Method from "@/assets/symptom-icons/method";

// Our row definitions
const ROWS_PILL = [
  { ids: ["taken", "missed"] },
  { ids: ["late", "no"] },
];
const ROWS_MED = [
  { ids: ["painkillers", "antihistamine"] },
  { ids: ["antibiotics", "contraception"] },
];
const ROWS_RING= [
  { ids: ["inserted", "removed"] },
  { ids: ["late"] },
];
const ROWS_IUD= [
  { ids: ["inserted", "removed"] },
];
const ROWS_TESTS= [
  { ids: ["positive", "negative"] },
];
const ROWS_BC= [
  { ids: ["taken"] },
];
const ROWS_FLOW= [
    { ids: ["light", "medium"] },
    { ids: ["heavy", "ultra"] },
];
const ROWS_METHOD= [
    { ids: ["pad", "tampon"] },
    { ids: ["cup", "period"] },
];


type Scheme = "blushEmpty" | "blushFilled" | "springEmpty" | "springFilled";

export default function Icons() {
  // Build initial state: each togglableIcons entry => "blushEmpty" or "springEmpty"
  const initialState: Record<string, Scheme> = {};
  togglableIcons.forEach((icon: ToggableIcon) => {
    initialState[icon.id] = icon.colorSet === "spring" ? "springEmpty" : "blushEmpty";
  });

  const [iconSchemes, setIconSchemes] = useState(initialState);

  // Toggling function
  function toggleScheme(id: string) {
    setIconSchemes((prev) => {
      const oldVal = prev[id];
      // find which colorSet the icon has
      const iconObj = togglableIcons.find((i) => i.id === id);
      if (!iconObj) return prev;

      if (iconObj.colorSet === "spring") {
        // "springEmpty" <-> "springFilled"
        const newVal = oldVal === "springEmpty" ? "springFilled" : "springEmpty";
        return { ...prev, [id]: newVal };
      } else {
        // "blushEmpty" <-> "blushFilled"
        const newVal = oldVal === "blushEmpty" ? "blushFilled" : "blushEmpty";
        return { ...prev, [id]: newVal };
      }
    });
  }

  // Find an icon from togglableIcons
  function getIcon(id: string) {
    return togglableIcons.find((icon) => icon.id === id);
  }

  // Renders a row of 2 togglable icons
  function renderIconRow(row: { ids: string[] }, rowIndex: number) {
    return (
      <View
        key={rowIndex}
        className="flex flex-row items-center justify-center gap-8 mb-4"
      >
        {row.ids.map((iconId) => {
          const iconObj = getIcon(iconId);
          if (!iconObj) return null;
          const { label, IconComponent } = iconObj;
          const scheme = iconSchemes[iconId];

          return (
            <View key={iconId} className="flex items-center">
              <TouchableOpacity onPress={() => toggleScheme(iconId)}>
                <IconComponent
                  {...colorSchemes[scheme]}
                  width={80}
                  height={80}
                />
              </TouchableOpacity>
              <Muted>{label}</Muted>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
      <H2 className="text-center">Icon Library</H2>

      <ScrollView className="flex-1 w-full">
        {/* Pill: single row, label on right, no toggling */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Pill width={91} height={90} />
          <Muted>Pill</Muted>
        </View>

        {/* Rows above medication: (Taken/Missed), (Late/No) */}
        {ROWS_PILL.map((row, i) => renderIconRow(row, i))}

        {/* Medication: single row, label on right, no toggling */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Medication {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>Medication</Muted>
        </View>

        {/* Rows below medication: (Painkillers & Antihistamine), (Antibiotics & Contraception) */}
        {ROWS_MED.map((row, i) => renderIconRow(row, i))}

        {/* Ring: single row, label on right, no toggling */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Ring {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>Ring</Muted>
        </View>
        {ROWS_RING.map((row, i) => renderIconRow(row, i))}

        {/* IUD */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <IUD {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>IUD</Muted>
        </View>
        {ROWS_IUD.map((row, i) => renderIconRow(row, i))}

        {/* Tests */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Tests {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>Tests</Muted>
        </View>
        {ROWS_TESTS.map((row, i) => renderIconRow(row, i))}

        {/* Birth Control Injection */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <BirthControl {...colorSchemes.blushFilled} width={91} height={90} />
          <Muted>Birth Control Injection</Muted>
        </View>
        {ROWS_BC.map((row, i) => renderIconRow(row, i))}

        {/* Flow */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Flow {...colorSchemes.springFilled} width={91} height={90} />
          <Muted>Flow</Muted>
        </View>
        {ROWS_FLOW.map((row, i) => renderIconRow(row, i))}

        {/* Method */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Method {...colorSchemes.springFilled} width={91} height={90} />
          <Muted>Method</Muted>
        </View>
        {ROWS_METHOD.map((row, i) => renderIconRow(row, i))}
      </ScrollView>
    </View>
  );
}
