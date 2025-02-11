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
import NormalDigestion from "@/assets/symptom-icons/symptom-reactions/normal-digestion";
import Bloated from "@/assets/symptom-icons/symptom-reactions/bloated";
import Gassy from "@/assets/symptom-icons/symptom-reactions/gassy";
import Heartburn from "@/assets/symptom-icons/symptom-reactions/heartburn";
import Nausea from "@/assets/symptom-icons/symptom-reactions/nausea";
import StickyDischarge from "@/assets/symptom-icons/symptom-reactions/sticky-discharge";
import NoneDischarge from "@/assets/symptom-icons/symptom-reactions/none-discharge";
import DryDischarge from "@/assets/symptom-icons/symptom-reactions/dry-discharge";
import CreamyDischarge from "@/assets/symptom-icons/symptom-reactions/creamy-discharge";
import ClearDischarge from "@/assets/symptom-icons/symptom-reactions/clear-discharge";
import NormalFeces from "@/assets/symptom-icons/symptom-reactions/normal-feces";
import Constipation from "@/assets/symptom-icons/symptom-reactions/constipation";
import Diarrhea from "@/assets/symptom-icons/symptom-reactions/diarrhea";
import Happy from "@/assets/symptom-icons/symptom-reactions/happy";
import Excited from "@/assets/symptom-icons/symptom-reactions/excited";
import Sad from "@/assets/symptom-icons/symptom-reactions/sad";
import Angry from "@/assets/symptom-icons/symptom-reactions/angry";
import Confident from "@/assets/symptom-icons/symptom-reactions/confident";
import Anxious from "@/assets/symptom-icons/symptom-reactions/anxious";
import Irritable from "@/assets/symptom-icons/symptom-reactions/irritable";
import Vivid from "@/assets/symptom-icons/symptom-reactions/vivid";
import Energetic from "@/assets/symptom-icons/symptom-reactions/energetic";
import Fatigued from "@/assets/symptom-icons/symptom-reactions/fatigued";
import Exhausted from "@/assets/symptom-icons/symptom-reactions/exhausted";
import Calm from "@/assets/symptom-icons/symptom-reactions/calm";
import Motivated from "@/assets/symptom-icons/symptom-reactions/motivated";
import Unmotivated from "@/assets/symptom-icons/symptom-reactions/unmotivated";
import Stressed from "@/assets/symptom-icons/symptom-reactions/stressed";
import ColdFlu from "@/assets/symptom-icons/symptom-reactions/cold-flu";
import Allergies from "@/assets/symptom-icons/symptom-reactions/allergies";
import Fever from "@/assets/symptom-icons/symptom-reactions/fever";
import STI from "@/assets/symptom-icons/symptom-reactions/sti";
import UTI from "@/assets/symptom-icons/symptom-reactions/uti";
import Sociable from "@/assets/symptom-icons/symptom-reactions/sociable";
import Drained from "@/assets/symptom-icons/symptom-reactions/drained";
import Reserved from "@/assets/symptom-icons/symptom-reactions/reserved";

// Decide the two possible "colorSet" options
export type ColorSet = "blush" | "spring" | "fawn" | "green";

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
  { id: "normal-digestion", label: "Normal Digestion", IconComponent: NormalDigestion, colorSet: "fawn" },
  { id: "bloated",      label: "Bloated",       IconComponent: Bloated,       colorSet: "fawn" },
  { id: "gassy",        label: "Gassy",         IconComponent: Gassy,         colorSet: "fawn" },
  { id: "heartburn",    label: "Heartburn",     IconComponent: Heartburn,     colorSet: "fawn" },
  { id: "nausea",       label: "Nausea",        IconComponent: Nausea,        colorSet: "fawn" },
  { id: "none-discharge",   label: "None",      IconComponent: NoneDischarge,   colorSet: "fawn" },
  { id: "clear-discharge",  label: "Clear",     IconComponent: ClearDischarge,  colorSet: "fawn" },
  { id: "dry-discharge",    label: "Dry",       IconComponent: DryDischarge,    colorSet: "fawn" },
  { id: "creamy-discharge", label: "Creamy",    IconComponent: CreamyDischarge, colorSet: "fawn" },
  { id: "sticky-discharge", label: "Sticky",    IconComponent: StickyDischarge, colorSet: "fawn" },
  { id: "normal-feces",     label: "Normal Feces",  IconComponent: NormalFeces,   colorSet: "fawn" },
  { id: "constipation",     label: "Constipation",  IconComponent: Constipation,  colorSet: "fawn" },
  { id: "diarrhea",         label: "Diarrhea",      IconComponent: Diarrhea,      colorSet: "fawn" },

  { id: "happy",        label: "Happy",         IconComponent: Happy,         colorSet: "green" },
  { id: "excited",      label: "Excited",       IconComponent: Excited,       colorSet: "green" },
  { id: "sad",          label: "Sad",           IconComponent: Sad,           colorSet: "green" },
  { id: "angry",        label: "Angry",         IconComponent: Angry,         colorSet: "green" },
  { id: "confident",    label: "Confident",     IconComponent: Confident,     colorSet: "green" },
  { id: "anxious",      label: "Anxious",       IconComponent: Anxious,       colorSet: "green" },
  { id: "irritable",    label: "Irritable",     IconComponent: Irritable,     colorSet: "green" },
  { id: "vivid",        label: "Vivid",         IconComponent: Vivid,         colorSet: "green" },
  { id: "energetic",    label: "Energetic",     IconComponent: Energetic,     colorSet: "green" },
  { id: "fatigued",     label: "Fatigued",      IconComponent: Fatigued,      colorSet: "green" },
  { id: "exhausted",    label: "Exhausted",     IconComponent: Exhausted,     colorSet: "green" },
  { id: "calm",         label: "Calm",          IconComponent: Calm,          colorSet: "green" },
  { id: "motivated",    label: "Motivated",     IconComponent: Motivated,     colorSet: "green" },
  { id: "unmotivated",  label: "Unmotivated",   IconComponent: Unmotivated,   colorSet: "green" },
  { id: "stressed",     label: "Stressed",      IconComponent: Stressed,      colorSet: "green" },
  { id: "cold-flu",     label: "Cold/Flu",      IconComponent: ColdFlu,       colorSet: "green" },
  { id: "allergies",    label: "Allergies",     IconComponent: Allergies,     colorSet: "green" },
  { id: "fever",        label: "Fever",         IconComponent: Fever,         colorSet: "green" },
  { id: "sti",          label: "STI",           IconComponent: STI,           colorSet: "green" },
  { id: "uti",          label: "UTI",           IconComponent: UTI,           colorSet: "green" },
  { id: "sociable",     label: "Sociable",      IconComponent: Sociable,           colorSet: "green" },
  { id: "drained",      label: "Drained",       IconComponent: Drained,           colorSet: "green" },
  { id: "reserved",     label: "Reserved",      IconComponent: Reserved,           colorSet: "green" },

];
