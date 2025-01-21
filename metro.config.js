const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add react-native-svg-transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Filter out SVG from assetExts, add to sourceExts
const { assetExts, sourceExts } = config.resolver;
config.resolver.assetExts = assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = [...sourceExts, "svg"];

// Export wrapped config
module.exports = withNativeWind(config, { input: "./global.css" });
