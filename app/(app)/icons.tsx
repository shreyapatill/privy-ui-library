import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { H2, Muted } from "@/components/ui/typography";

// Toggable icons array
import { togglableIcons, ToggableIcon } from "@/assets/symptom-icons/togglableIcons";
import { colorSchemes } from "@/assets/symptom-icons/colorSchemes";
import { Alcohol, BirthControl, Cramps, Cravings, Digestion, Discharge, Energy, Exercise, Feces, Flow, Hair, IUD, Medication, Method, Mood, Pill, Ring, Sex, Sickness, Skin, Social, Stress, Tests, Travel } from "@/assets/symptom-icons/icon-svg";

// Row definitions
const ROWS = {
  PILL: [{ ids: ["taken", "missed"] }, { ids: ["late", "no"] }],
  MED: [{ ids: ["painkillers", "antihistamine"] }, { ids: ["antibiotics", "contraception"] }],
  RING: [{ ids: ["inserted", "removed", "late"] }],
  IUD: [{ ids: ["inserted", "removed"] }],
  TESTS: [{ ids: ["positive", "negative"] }],
  BC: [{ ids: ["taken"] }],
  FLOW: [{ ids: ["light", "medium"] }, { ids: ["heavy", "ultra"] }],
  METHOD: [{ ids: ["pad", "tampon"] }, { ids: ["cup", "period"] }],
  CRAMPS: [{ ids: ["lower-stomach", "vulvar"] }, { ids: ["lower-back", "headache"] }],
  SKIN: [{ ids: ["normal-skin", "dry-skin"] }, { ids: ["oily-skin", "sensitive-skin"] }],
  HAIR: [{ ids: ["normal-scalp", "oily-scalp"] }, { ids: ["dry-scalp", "hairfall"] }],
  CRAVINGS: [{ ids: ["carbs", "sweet", "spicy"] }, { ids: ["salty", "greasy"] }],
  DIGESTION: [{ ids: ["normal-digestion", "bloated", "gassy"] }, { ids: ["heartburn", "nausea"] }],
  DISCHARGE: [{ ids: ["none-discharge", "clear-discharge", "dry-discharge"] }, { ids: ["creamy-discharge", "sticky-discharge"] }],
  FECES: [{ ids: ["normal-feces", "constipation", "diarrhea"] }],
  MOOD: [{ ids: ["happy", "excited", "sad"] }, { ids: ["angry", "confident"] }, { ids: ["anxious", "irritable"] }],
  ENERGY: [{ ids: ["vivid", "energetic"] }, { ids: ["fatigued", "exhausted"] }],
  STRESS: [{ ids: ["calm", "motivated"] }, { ids: ["unmotivated", "stressed"] }],
  SOCIAL: [{ ids: ["sociable", "drained", "reserved"] }],
  SICKNESS: [{ ids: ["cold-flu", "allergies", "fever"] }, { ids: ["sti", "uti"] }],
  EXERCISE: [{ ids: ["running", "yoga", "strength"] }, { ids: ["biking", "walking", "rest-day"] }],
  SEX: [{ ids: ["protected", "unprotected", "high-libido"] }, { ids: ["low-libido", "orgasm", "no-orgasm"] }, { ids: ["masturbation", "rest-day-sex"] }],
  ALCOHOL: [{ ids: ["party-night", "light-drinking", "hangover"] }],
  TRAVEL: [{ ids: ["vacation", "work-trip"] }],
  NAVBAR: [{ ids: ["cycle", "calendar", "track"] }, { ids: ["chat", "privy-pro"] }],
};

type Scheme = "blushEmpty" | "blushFilled" | "springEmpty" | "springFilled" | "fawnEmpty" | "fawnFilled" | "greenEmpty" | "greenFilled" | "tealEmpty" | "tealFilled" | "roseGreyEmpty" | "roseGreyFilled";

export default function Icons() {
  // Build initial state
  const initialState: Record<string, Scheme> = togglableIcons.reduce((acc, icon) => {
    acc[icon.id] = `${icon.colorSet}Empty` as Scheme;
    return acc;
  }, {} as Record<string, Scheme>);

  const [iconSchemes, setIconSchemes] = useState(initialState);

  // Toggling function
  const toggleScheme = (id: string) => {
    setIconSchemes((prev) => {
      const oldVal = prev[id];
      const iconObj = togglableIcons.find((i) => i.id === id);
      if (!iconObj) return prev;

      const newVal = oldVal.endsWith("Empty") ? oldVal.replace("Empty", "Filled") : oldVal.replace("Filled", "Empty");
      return { ...prev, [id]: newVal as Scheme };
    });
  };

  // Find an icon from togglableIcons
  const getIcon = (id: string) => togglableIcons.find((icon) => icon.id === id);

  // Renders a row of togglable icons
  const renderIconRow = (row: { ids: string[] }, rowIndex: number) => (
    <View key={rowIndex} className="flex flex-row items-center justify-center gap-8 mb-4">
      {row.ids.map((iconId) => {
        const iconObj = getIcon(iconId);
        if (!iconObj) return null;
        const { label, IconComponent } = iconObj;
        const scheme = iconSchemes[iconId];

        return (
          <View key={iconId} className="flex items-center">
            <TouchableOpacity onPress={() => toggleScheme(iconId)}>
              <IconComponent {...colorSchemes[scheme]} width={80} height={80} />
            </TouchableOpacity>
            <Muted>{label}</Muted>
          </View>
        );
      })}
    </View>
  );

  // Renders a section with a title and rows of icons
  const renderSection = (title: string, IconComponent: React.FC<any> | null, rows: { ids: string[] }[], colorScheme: Scheme) => (
    <>
      <View className="flex flex-row items-center justify-center gap-4 mb-4">
        {IconComponent && ( // Only render the icon if it exists
          <IconComponent {...colorSchemes[colorScheme]} width={91} height={90} />
        )}
        <Text>{title}</Text>
      </View>
      {rows.map((row, i) => renderIconRow(row, i))}
    </>
  );

  // Mapping of sections to their configurations
  const sections = [
    { title: "Pill", icon: Pill, rows: ROWS.PILL, colorScheme: "blushFilled" as Scheme },
    { title: "Medication", icon: Medication, rows: ROWS.MED, colorScheme: "blushFilled" as Scheme },
    { title: "Ring", icon: Ring, rows: ROWS.RING, colorScheme: "blushFilled" as Scheme },
    { title: "IUD", icon: IUD, rows: ROWS.IUD, colorScheme: "blushFilled" as Scheme },
    { title: "Tests", icon: Tests, rows: ROWS.TESTS, colorScheme: "blushFilled" as Scheme },
    { title: "Birth Control Injection", icon: BirthControl, rows: ROWS.BC, colorScheme: "blushFilled" as Scheme },
    { title: "Flow", icon: Flow, rows: ROWS.FLOW, colorScheme: "springFilled" as Scheme },
    { title: "Method", icon: Method, rows: ROWS.METHOD, colorScheme: "springFilled" as Scheme },
    { title: "Cramps", icon: Cramps, rows: ROWS.CRAMPS, colorScheme: "fawnFilled" as Scheme },
    { title: "Skin", icon: Skin, rows: ROWS.SKIN, colorScheme: "fawnFilled" as Scheme },
    { title: "Hair", icon: Hair, rows: ROWS.HAIR, colorScheme: "fawnFilled" as Scheme },
    { title: "Cravings", icon: Cravings, rows: ROWS.CRAVINGS, colorScheme: "fawnFilled" as Scheme },
    { title: "Digestion", icon: Digestion, rows: ROWS.DIGESTION, colorScheme: "fawnFilled" as Scheme },
    { title: "Discharge", icon: Discharge, rows: ROWS.DISCHARGE, colorScheme: "fawnFilled" as Scheme },
    { title: "Feces", icon: Feces, rows: ROWS.FECES, colorScheme: "fawnFilled" as Scheme },
    { title: "Mood", icon: Mood, rows: ROWS.MOOD, colorScheme: "greenFilled" as Scheme },
    { title: "Energy", icon: Energy, rows: ROWS.ENERGY, colorScheme: "greenFilled" as Scheme },
    { title: "Stress", icon: Stress, rows: ROWS.STRESS, colorScheme: "greenFilled" as Scheme },
    { title: "Social", icon: Social, rows: ROWS.SOCIAL, colorScheme: "greenFilled" as Scheme },
    { title: "Sickness", icon: Sickness, rows: ROWS.SICKNESS, colorScheme: "greenFilled" as Scheme },
    { title: "Exercise", icon: Exercise, rows: ROWS.EXERCISE, colorScheme: "tealFilled" as Scheme },
    { title: "Sex", icon: Sex, rows: ROWS.SEX, colorScheme: "tealFilled" as Scheme },
    { title: "Alcohol", icon: Alcohol, rows: ROWS.ALCOHOL, colorScheme: "tealFilled" as Scheme },
    { title: "Travel", icon: Travel, rows: ROWS.TRAVEL, colorScheme: "tealFilled" as Scheme },
    { title: "Nav Bar", icon: null, rows: ROWS.NAVBAR, colorScheme: "roseGreyFilled" as Scheme },
  ];

  return (
    <View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
      <H2 className="text-center">Icon Library</H2>

      <ScrollView className="flex-1 w-full">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {renderSection(section.title, section.icon, section.rows, section.colorScheme)}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}