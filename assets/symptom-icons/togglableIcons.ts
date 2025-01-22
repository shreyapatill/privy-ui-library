// togglableIcons.ts
import Check from "@/assets/symptom-icons/symptom-reactions/check";
import Exclamation from "@/assets/symptom-icons/symptom-reactions/exclamation";
import Late from "@/assets/symptom-icons/symptom-reactions/late";
import No from "@/assets/symptom-icons/symptom-reactions/no";
import Painkillers from "@/assets/symptom-icons/symptom-reactions/painkiller";
import Antihistamine from "@/assets/symptom-icons/symptom-reactions/antihistamine";
import Antibiotics from "@/assets/symptom-icons/symptom-reactions/antibiotics";
import Contraception from "@/assets/symptom-icons/symptom-reactions/contraception";
import Inserted from "@/assets/symptom-icons/symptom-reactions/inserted";
import Removed from "@/assets/symptom-icons/symptom-reactions/removed";
import Positive from "@/assets/symptom-icons/symptom-reactions/positive";
import Negative from "@/assets/symptom-icons/symptom-reactions/negative";
import Light from "@/assets/symptom-icons/symptom-reactions/light";
import Medium from "./symptom-reactions/medium";
import Heavy from "./symptom-reactions/heavy";
import Ultra from "./symptom-reactions/ultra";
import Pad from "./symptom-reactions/pad";
import Cup from "./symptom-reactions/cup";
import Tampon from "./symptom-reactions/tampon";
import Period from "./symptom-reactions/panties";

// Decide the two possible "colorSet" options
export type ColorSet = "blush" | "spring";

export type ToggableIcon = {
  id: string;
  label: string;
  IconComponent: React.FC<any>;
  colorSet: ColorSet;
};

export const togglableIcons: ToggableIcon[] = [
  // These use the "blush" color set
  { id: "taken",        label: "Taken",         IconComponent: Check,         colorSet: "blush" },
  { id: "missed",       label: "Missed",        IconComponent: Exclamation,   colorSet: "blush" },
  { id: "late",         label: "Late",          IconComponent: Late,          colorSet: "blush" },
  { id: "no",           label: "No Pill Day",   IconComponent: No,            colorSet: "blush" },
  { id: "painkillers",  label: "Painkillers",   IconComponent: Painkillers,   colorSet: "blush" },
  { id: "antihistamine",label: "Antihistamine", IconComponent: Antihistamine, colorSet: "blush" },
  { id: "antibiotics",  label: "Antibiotics",   IconComponent: Antibiotics,   colorSet: "blush" },
  { id: "contraception",label: "Contraception", IconComponent: Contraception, colorSet: "blush" },
  { id: "inserted",     label: "Inserted",      IconComponent: Inserted,      colorSet: "blush" },
  { id: "removed",      label: "Removed",       IconComponent: Removed,       colorSet: "blush" },
  { id: "positive",     label: "Positive",      IconComponent: Positive,      colorSet: "blush" },
  { id: "negative",     label: "Negative",      IconComponent: Negative,      colorSet: "blush" },

  // These use the "spring" color set
  { id: "light",        label: "Light",         IconComponent: Light,         colorSet: "spring" },
  { id: "medium",       label: "Medium",        IconComponent: Medium,        colorSet: "spring" },
  { id: "heavy",        label: "Heavy",         IconComponent: Heavy,         colorSet: "spring" },
  { id: "ultra",        label: "Ultra",         IconComponent: Ultra,         colorSet: "spring" },
  { id: "pad",          label: "Pad",           IconComponent: Pad,           colorSet: "spring" },
  { id: "tampon",       label: "Tampon",        IconComponent: Tampon,        colorSet: "spring" },
  { id: "cup",          label: "Cup",           IconComponent: Cup,           colorSet: "spring" },
  { id: "period",       label: "Period",        IconComponent: Period,        colorSet: "spring" },
];
