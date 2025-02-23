// togglableIcons.ts
import {
  Painkillers,
  Removed,
  Positive,
  Ultra,
  Pad,
  Tampon,
  Period,
  Vulvar,
  OilySkin,
  SensitiveSkin,
  Sweet,
  Spicy,
  Salty,
  StickyDischarge,
  Sad,
  Vivid,
  Unmotivated,
  Stressed,
  STI,
  UTI,
  Sociable,
  Reserved,
  Check,
  Exclamation,
  Late,
  No,
  Antihistamine,
  Antibiotics,
  Contraception,
  Inserted,
  Negative,
  Light,
  Medium,
  Heavy,
  Cup,
  LowerStomach,
  LowerBack,
  Headache,
  NormalSkin,
  DrySkin,
  NormalScalp,
  OilyScalp,
  DryScalp,
  Hairfall,
  Carbs,
  Greasy,
  NormalDigestion,
  Bloated,
  Gassy,
  Heartburn,
  Nausea,
  NoneDischarge,
  ClearDischarge,
  DryDischarge,
  CreamyDischarge,
  NormalFeces,
  Constipation,
  Diarrhea,
  Happy,
  Excited,
  Angry,
  Confident,
  Anxious,
  Irritable,
  Energetic,
  Fatigued,
  Exhausted,
  Calm,
  Motivated,
  ColdFlu,
  Allergies,
  Fever,
  Drained,
  Running,
  Yoga,
  Strength,
  Biking,
  Walking,
  RestDay,
  Protected,
  Unprotected,
  HighLibido,
  LowLibido,
  Orgasm,
  NoOrgasm,
  Masturbation,
  PartyNight,
  LightDrinking,
  Hangover,
  Vacation,
  WorkTrip,
  RestDaySex,
} from "@/assets/symptom-icons/reaction-svg";

import {
  Cycle,
  Calendar,
  Track,
  Chat,
  PrivyPro,
} from "@/assets/symptom-icons/nav-svg";

export type ColorSet = "blush" | "spring" | "fawn" | "green" | "teal" | "roseGrey";

export type ToggableIcon = {
  id: string;
  label: string;
  IconComponent: React.FC<any>;
  colorSet: ColorSet;
};

export const togglableIcons: ToggableIcon[] = [
  // These use the "blush" color set
  { id: "taken", label: "Taken", IconComponent: Check, colorSet: "blush" },
  { id: "missed", label: "Missed", IconComponent: Exclamation, colorSet: "blush" },
  { id: "late", label: "Late", IconComponent: Late, colorSet: "blush" },
  { id: "no", label: "No Pill Day", IconComponent: No, colorSet: "blush" },
  { id: "painkillers", label: "Painkillers", IconComponent: Painkillers, colorSet: "blush" },
  { id: "antihistamine", label: "Antihistamine", IconComponent: Antihistamine, colorSet: "blush" },
  { id: "antibiotics", label: "Antibiotics", IconComponent: Antibiotics, colorSet: "blush" },
  { id: "contraception", label: "Contraception", IconComponent: Contraception, colorSet: "blush" },
  { id: "inserted", label: "Inserted", IconComponent: Inserted, colorSet: "blush" },
  { id: "removed", label: "Removed", IconComponent: Removed, colorSet: "blush" },
  { id: "positive", label: "Positive", IconComponent: Positive, colorSet: "blush" },
  { id: "negative", label: "Negative", IconComponent: Negative, colorSet: "blush" },

  // These use the "spring" color set
  { id: "light", label: "Light", IconComponent: Light, colorSet: "spring" },
  { id: "medium", label: "Medium", IconComponent: Medium, colorSet: "spring" },
  { id: "heavy", label: "Heavy", IconComponent: Heavy, colorSet: "spring" },
  { id: "ultra", label: "Ultra", IconComponent: Ultra, colorSet: "spring" },
  { id: "pad", label: "Pad", IconComponent: Pad, colorSet: "spring" },
  { id: "tampon", label: "Tampon", IconComponent: Tampon, colorSet: "spring" },
  { id: "cup", label: "Cup", IconComponent: Cup, colorSet: "spring" },
  { id: "period", label: "Period", IconComponent: Period, colorSet: "spring" },

  // These use the "fawn" color set
  { id: "lower-stomach", label: "Lower Stomach", IconComponent: LowerStomach, colorSet: "fawn" },
  { id: "vulvar", label: "Vulvar", IconComponent: Vulvar, colorSet: "fawn" },
  { id: "lower-back", label: "Lower Back", IconComponent: LowerBack, colorSet: "fawn" },
  { id: "headache", label: "Headache", IconComponent: Headache, colorSet: "fawn" },
  { id: "normal-skin", label: "Normal", IconComponent: NormalSkin, colorSet: "fawn" },
  { id: "dry-skin", label: "Dry", IconComponent: DrySkin, colorSet: "fawn" },
  { id: "oily-skin", label: "Oily", IconComponent: OilySkin, colorSet: "fawn" },
  { id: "sensitive-skin", label: "Sensitive", IconComponent: SensitiveSkin, colorSet: "fawn" },
  { id: "normal-scalp", label: "Normal Scalp", IconComponent: NormalScalp, colorSet: "fawn" },
  { id: "oily-scalp", label: "Oily Scalp", IconComponent: OilyScalp, colorSet: "fawn" },
  { id: "dry-scalp", label: "Dry Scalp", IconComponent: DryScalp, colorSet: "fawn" },
  { id: "hairfall", label: "Hairfall", IconComponent: Hairfall, colorSet: "fawn" },
  { id: "carbs", label: "Carbs", IconComponent: Carbs, colorSet: "fawn" },
  { id: "sweet", label: "Sweet", IconComponent: Sweet, colorSet: "fawn" },
  { id: "spicy", label: "Spicy", IconComponent: Spicy, colorSet: "fawn" },
  { id: "salty", label: "Salty", IconComponent: Salty, colorSet: "fawn" },
  { id: "greasy", label: "Greasy", IconComponent: Greasy, colorSet: "fawn" },
  { id: "normal-digestion", label: "Normal Digestion", IconComponent: NormalDigestion, colorSet: "fawn" },
  { id: "bloated", label: "Bloated", IconComponent: Bloated, colorSet: "fawn" },
  { id: "gassy", label: "Gassy", IconComponent: Gassy, colorSet: "fawn" },
  { id: "heartburn", label: "Heartburn", IconComponent: Heartburn, colorSet: "fawn" },
  { id: "nausea", label: "Nausea", IconComponent: Nausea, colorSet: "fawn" },
  { id: "none-discharge", label: "None", IconComponent: NoneDischarge, colorSet: "fawn" },
  { id: "clear-discharge", label: "Clear", IconComponent: ClearDischarge, colorSet: "fawn" },
  { id: "dry-discharge", label: "Dry", IconComponent: DryDischarge, colorSet: "fawn" },
  { id: "creamy-discharge", label: "Creamy", IconComponent: CreamyDischarge, colorSet: "fawn" },
  { id: "sticky-discharge", label: "Sticky", IconComponent: StickyDischarge, colorSet: "fawn" },
  { id: "normal-feces", label: "Normal Feces", IconComponent: NormalFeces, colorSet: "fawn" },
  { id: "constipation", label: "Constipation", IconComponent: Constipation, colorSet: "fawn" },
  { id: "diarrhea", label: "Diarrhea", IconComponent: Diarrhea, colorSet: "fawn" },

  // These use the "green" color set
  { id: "happy", label: "Happy", IconComponent: Happy, colorSet: "green" },
  { id: "excited", label: "Excited", IconComponent: Excited, colorSet: "green" },
  { id: "sad", label: "Sad", IconComponent: Sad, colorSet: "green" },
  { id: "angry", label: "Angry", IconComponent: Angry, colorSet: "green" },
  { id: "confident", label: "Confident", IconComponent: Confident, colorSet: "green" },
  { id: "anxious", label: "Anxious", IconComponent: Anxious, colorSet: "green" },
  { id: "irritable", label: "Irritable", IconComponent: Irritable, colorSet: "green" },
  { id: "vivid", label: "Vivid", IconComponent: Vivid, colorSet: "green" },
  { id: "energetic", label: "Energetic", IconComponent: Energetic, colorSet: "green" },
  { id: "fatigued", label: "Fatigued", IconComponent: Fatigued, colorSet: "green" },
  { id: "exhausted", label: "Exhausted", IconComponent: Exhausted, colorSet: "green" },
  { id: "calm", label: "Calm", IconComponent: Calm, colorSet: "green" },
  { id: "motivated", label: "Motivated", IconComponent: Motivated, colorSet: "green" },
  { id: "unmotivated", label: "Unmotivated", IconComponent: Unmotivated, colorSet: "green" },
  { id: "stressed", label: "Stressed", IconComponent: Stressed, colorSet: "green" },
  { id: "cold-flu", label: "Cold/Flu", IconComponent: ColdFlu, colorSet: "green" },
  { id: "allergies", label: "Allergies", IconComponent: Allergies, colorSet: "green" },
  { id: "fever", label: "Fever", IconComponent: Fever, colorSet: "green" },
  { id: "sti", label: "STI", IconComponent: STI, colorSet: "green" },
  { id: "uti", label: "UTI", IconComponent: UTI, colorSet: "green" },
  { id: "sociable", label: "Sociable", IconComponent: Sociable, colorSet: "green" },
  { id: "drained", label: "Drained", IconComponent: Drained, colorSet: "green" },
  { id: "reserved", label: "Reserved", IconComponent: Reserved, colorSet: "green" },

  // These use the "teal" color set
  { id: "running", label: "Running", IconComponent: Running, colorSet: "teal" },
  { id: "yoga", label: "Yoga", IconComponent: Yoga, colorSet: "teal" },
  { id: "strength", label: "Strength", IconComponent: Strength, colorSet: "teal" },
  { id: "biking", label: "Biking", IconComponent: Biking, colorSet: "teal" },
  { id: "walking", label: "Walking", IconComponent: Walking, colorSet: "teal" },
  { id: "rest-day", label: "Rest Day", IconComponent: RestDay, colorSet: "teal" },
  { id: "protected", label: "Protected", IconComponent: Protected, colorSet: "teal" },
  { id: "unprotected", label: "Unprotected", IconComponent: Unprotected, colorSet: "teal" },
  { id: "high-libido", label: "High Libido", IconComponent: HighLibido, colorSet: "teal" },
  { id: "low-libido", label: "Low Libido", IconComponent: LowLibido, colorSet: "teal" },
  { id: "orgasm", label: "Orgasm", IconComponent: Orgasm, colorSet: "teal" },
  { id: "no-orgasm", label: "No Orgasm", IconComponent: NoOrgasm, colorSet: "teal" },
  { id: "masturbation", label: "Masturbation", IconComponent: Masturbation, colorSet: "teal" },
  { id: "rest-day-sex", label: "Rest Day", IconComponent: RestDaySex, colorSet: "teal" },
  { id: "party-night", label: "Party Night", IconComponent: PartyNight, colorSet: "teal" },
  { id: "light-drinking", label: "Light Drinking", IconComponent: LightDrinking, colorSet: "teal" },
  { id: "hangover", label: "Hangover", IconComponent: Hangover, colorSet: "teal" },
  { id: "vacation", label: "Vacation", IconComponent: Vacation, colorSet: "teal" },
  { id: "work-trip", label: "Work Trip", IconComponent: WorkTrip, colorSet: "teal" },

  { id: "cycle", label: "Cycle", IconComponent: Cycle, colorSet: "roseGrey" },
  { id: "calendar", label: "Calendar", IconComponent: Calendar, colorSet: "roseGrey" },
  { id: "track", label: "Track", IconComponent: Track, colorSet: "roseGrey" },
  { id: "chat", label: "Chat", IconComponent: Chat, colorSet: "roseGrey" },
  { id: "privy-pro", label: "Privy Pro", IconComponent: PrivyPro, colorSet: "roseGrey" },
];