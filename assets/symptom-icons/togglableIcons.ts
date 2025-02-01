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
import Medium from "@/assets/symptom-icons/symptom-reactions/medium";
import Heavy from "@/assets/symptom-icons/symptom-reactions/heavy";
import Ultra from "@/assets/symptom-icons/symptom-reactions/ultra";
import Pad from "@/assets/symptom-icons/symptom-reactions/pad";
import Cup from "@/assets/symptom-icons/symptom-reactions/cup";
import Tampon from "@/assets/symptom-icons/symptom-reactions/tampon";
import Period from "@/assets/symptom-icons/symptom-reactions/panties";
import Cramps from "@/assets/symptom-icons/cramps";
import LowerStomach from "@/assets/symptom-icons/symptom-reactions/lower-stomach";
import Vulvar from "@/assets/symptom-icons/symptom-reactions/vulvar";
import LowerBack from "@/assets/symptom-icons/symptom-reactions/lower-back";
import Headache from "@/assets/symptom-icons/symptom-reactions/headache";
import NormalSkin from "@/assets/symptom-icons/symptom-reactions/normal-skin";
import DrySkin from "@/assets/symptom-icons/symptom-reactions/dry-skin";
import OilySkin from "@/assets/symptom-icons/symptom-reactions/oily-skin";
import SensitiveSkin from "@/assets/symptom-icons/symptom-reactions/sensitive-skin";
import NormalScalp from "@/assets/symptom-icons/symptom-reactions/normal-scalp";
import OilyScalp from "@/assets/symptom-icons/symptom-reactions/oily-scalp";
import DryScalp from "@/assets/symptom-icons/symptom-reactions/dry-scalp";
import Hairfall from "@/assets/symptom-icons/symptom-reactions/hairfall";
import Carbs from "@/assets/symptom-icons/symptom-reactions/carbs";
import Sweet from "@/assets/symptom-icons/symptom-reactions/sweet";
import Spicy from "@/assets/symptom-icons/symptom-reactions/spicy";
import Salty from "@/assets/symptom-icons/symptom-reactions/salty";
import Greasy from "@/assets/symptom-icons/symptom-reactions/greasy";

// Decide the two possible "colorSet" options
export type ColorSet = "blush" | "spring" | "fawn";

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

  // These use the "fawn" color set
  { id: "lower-stomach",label: "Lower Stomach", IconComponent: LowerStomach,  colorSet: "fawn" },
  { id: "vulvar",       label: "Vulvar",        IconComponent: Vulvar,        colorSet: "fawn" },
  { id: "lower-back",   label: "Lower Back",    IconComponent: LowerBack,     colorSet: "fawn" },
  { id: "headache",     label: "Headache",      IconComponent: Headache,      colorSet: "fawn" },
  { id: "normal-skin",  label: "Normal",        IconComponent: NormalSkin,    colorSet: "fawn" },
  { id: "dry-skin",     label: "Dry",           IconComponent: DrySkin,       colorSet: "fawn" },
  { id: "oily-skin",    label: "Oily",          IconComponent: OilySkin,      colorSet: "fawn" },
  { id: "sensitive-skin",label: "Sensitive",    IconComponent: SensitiveSkin, colorSet: "fawn" },
  { id: "normal-scalp", label: "Normal Scalp",  IconComponent: NormalScalp,   colorSet: "fawn" },
  { id: "oily-scalp",   label: "Oily Scalp",    IconComponent: OilyScalp,     colorSet: "fawn" },
  { id: "dry-scalp",    label: "Dry Scalp",     IconComponent: DryScalp,      colorSet: "fawn" },
  { id: "hairfall",     label: "Hairfall",      IconComponent: Hairfall,      colorSet: "fawn" },
  { id: "carbs",        label: "Carbs",         IconComponent: Carbs,         colorSet: "fawn" },
  { id: "sweet",        label: "Sweet",         IconComponent: Sweet,         colorSet: "fawn" },
  { id: "spicy",        label: "Spicy",         IconComponent: Spicy,         colorSet: "fawn" },
  { id: "salty",        label: "Salty",         IconComponent: Salty,         colorSet: "fawn" },
  { id: "greasy",       label: "Greasy",        IconComponent: Greasy,        colorSet: "fawn" },
];
