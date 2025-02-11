import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { H2, Muted } from "@/components/ui/typography";

// Toggable icons array
import { togglableIcons, ToggableIcon } from "@/assets/symptom-icons/togglableIcons";
import { colorSchemes } from "@/assets/symptom-icons/colorSchemes";
import { Alcohol, BirthControl, Cramps, Cravings, Digestion, Discharge, Energy, Exercise, Feces, Flow, Hair, IUD, Medication, Method, Mood, Pill, Ring, Sex, Sickness, Skin, Social, Stress, Tests, Travel } from "@/assets/symptom-icons/icon-svg";

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
  { ids: ["inserted", "removed", "late"] },
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
const ROWS_CRAMPS= [
    { ids: ["lower-stomach", "vulvar"] },
    { ids: ["lower-back", "headache"] },
];
const ROWS_SKIN= [
    { ids: ["normal-skin", "dry-skin"] },
    { ids: ["oily-skin", "sensitive-skin"] },
];
const ROWS_HAIR = [
    { ids: ["normal-scalp", "oily-scalp"] },
    { ids: ["dry-scalp", "hairfall"] },
];
const ROWS_CRAVINGS =[
    { ids: ["carbs", "sweet", "spicy"] },
    { ids: ["salty", "greasy"] },
];
const ROWS_DIGESTION =[
    { ids: ["normal-digestion", "bloated", "gassy"] },
    { ids: ["heartburn", "nausea"] },
];
const ROWS_DISCHARGE =[
    { ids: ["none-discharge", "clear-discharge", "dry-discharge"] },
    { ids: ["creamy-discharge", "sticky-discharge"] },
];
const ROWS_FECES =[
    { ids: ["normal-feces", "constipation", "diarrhea"] },
];
const ROWS_MOOD =[
  { ids: ["happy", "excited", "sad"] },
  { ids: ["angry", "confident"] },
  { ids: ["anxious", "irritable"] },
];
const ROWS_ENERGY = [
  { ids: ["vivid", "energetic"] },
  { ids: ["fatigued", "exhausted"] },
];
const ROWS_STRESS = [
  { ids: ["calm", "motivated"] },
  { ids: ["unmotivated", "stressed"] },
];
const ROWS_SOCIAL = [
  { ids: ["sociable", "drained", "reserved"] },
];
const ROWS_SICKNESS = [
  { ids: ["cold-flu", "allergies", "fever"] },
  { ids: ["sti", "uti"] },
];
const ROWS_EXERCISE = [
  { ids: ["running", "yoga", "strength"] },
  { ids: ["biking", "walking", "rest-day"] },
];
const ROWS_SEX = [
  { ids: ["protected", "unprotected", "high-libido"] },
  { ids: ["low-libido", "orgasm", "no-orgasm"] },
  { ids: ["masturbation", "rest-day-sex"] },
];
const ROWS_ALCOHOL = [
  { ids: ["party-night", "light-drinking", "hangover"] },
];
const ROWS_TRAVEL = [
  { ids: ["vacation", "work-trip"] },
];

type Scheme = "blushEmpty" | "blushFilled" | "springEmpty" | "springFilled" | "fawnEmpty" | "fawnFilled" | "greenEmpty" | "greenFilled" | "tealEmpty" | "tealFilled";

export default function Icons() {
  // Build initial state: each togglableIcons entry => "blushEmpty" or "springEmpty"
  const initialState: Record<string, Scheme> = {};
  togglableIcons.forEach((icon: ToggableIcon) => {
    if (icon.colorSet === "spring") {
      initialState[icon.id] = "springEmpty";
    } else if (icon.colorSet === "fawn") {
      initialState[icon.id] = "fawnEmpty";
    } else if (icon.colorSet === "blush"){
      initialState[icon.id] = "blushEmpty";
    } else if (icon.colorSet === "green"){
      initialState[icon.id] = "greenEmpty";
    } else {
      initialState[icon.id] = "tealEmpty";
    }
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
      } else if (iconObj.colorSet === "blush") {
        // "blushEmpty" <-> "blushFilled"
        const newVal = oldVal === "blushEmpty" ? "blushFilled" : "blushEmpty";
        return { ...prev, [id]: newVal };
      } else if (iconObj.colorSet === "fawn") {
        // "fawnEmpty" <-> "fawnFilled"
        const newVal = oldVal === "fawnEmpty" ? "fawnFilled" : "fawnEmpty";
        return { ...prev, [id]: newVal };
      } else if (iconObj.colorSet === "green") {
        // "greenEmpty" <-> "greenFilled"
        const newVal = oldVal === "greenEmpty" ? "greenFilled" : "greenEmpty";
        return { ...prev, [id]: newVal };
      } else {
        // "tealEmpty" <-> "tealFilled"
        const newVal = oldVal === "tealEmpty" ? "tealFilled" : "tealEmpty";
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
          <Pill {...colorSchemes.blushFilled} width={91} height={90} />
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

      {/* Cramps */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Cramps {...colorSchemes.fawnFilled} width={91} height={90} />
          <Muted>Cramps</Muted>
        </View>
        {ROWS_CRAMPS.map((row, i) => renderIconRow(row, i))}

        {/* Skin */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Skin {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Skin</Muted>
        </View>
        {ROWS_SKIN.map((row, i) => renderIconRow(row, i))}

        {/* Hair */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Hair {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Hair</Muted>
        </View>
        {ROWS_HAIR.map((row, i) => renderIconRow(row, i))}

        {/* Cravings */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Cravings {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Cravings</Muted>
        </View>
        {ROWS_CRAVINGS.map((row, i) => renderIconRow(row, i))}

        {/* Digestion */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Digestion {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Digestion</Muted>
        </View>
        {ROWS_DIGESTION.map((row, i) => renderIconRow(row, i))}

        {/* Discharge */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Discharge {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Discharge</Muted>
        </View>
        {ROWS_DISCHARGE.map((row, i) => renderIconRow(row, i))}
        
        {/* Feces */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Feces {...colorSchemes.fawnFilled} width={91} height={90} />
            <Muted>Feces</Muted>
        </View>
        {ROWS_FECES.map((row, i) => renderIconRow(row, i))}
        
        {/* Mood */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
            <Mood {...colorSchemes.greenFilled} width={91} height={90} />
            <Muted>Mood</Muted>
        </View>
        {ROWS_MOOD.map((row, i) => renderIconRow(row, i))}

        {/* Energy */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Energy {...colorSchemes.greenFilled} width={91} height={90} />
          <Muted>Energy</Muted>
        </View>
        {ROWS_ENERGY.map((row, i) => renderIconRow(row, i))}

        {/* Stress */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Stress {...colorSchemes.greenFilled} width={91} height={90} />
          <Muted>Stress</Muted>
        </View>
        {ROWS_STRESS.map((row, i) => renderIconRow(row, i))}

        {/* Social */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Social {...colorSchemes.greenFilled} width={91} height={90} />
          <Muted>Social</Muted>
        </View>
        {ROWS_SOCIAL.map((row, i) => renderIconRow(row, i))}

        {/* Sickness */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Sickness {...colorSchemes.greenFilled} width={91} height={90} />
          <Muted>Sickness</Muted>
        </View>
        {ROWS_SICKNESS.map((row, i) => renderIconRow(row, i))}

        {/* Exercise */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Exercise {...colorSchemes.tealFilled} width={91} height={90} />
          <Muted>Exercise</Muted>
        </View>
        {ROWS_EXERCISE.map((row, i) => renderIconRow(row, i))}

        {/* Sex */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Sex {...colorSchemes.tealFilled} width={91} height={90} />
          <Muted>Sex</Muted>
        </View>
        {ROWS_SEX.map((row, i) => renderIconRow(row, i))}

        {/* Alcohol */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Alcohol {...colorSchemes.tealFilled} width={91} height={90} />
          <Muted>Alcohol</Muted>
        </View>
        {ROWS_ALCOHOL.map((row, i) => renderIconRow(row, i))}

        {/* Travel */}
        <View className="flex flex-row items-center justify-center gap-4 mb-4">
          <Travel {...colorSchemes.tealFilled} width={91} height={90} />
          <Muted>Travel</Muted>
        </View>
        {ROWS_TRAVEL.map((row, i) => renderIconRow(row, i))}

      </ScrollView>
    </View>    
  );
}
