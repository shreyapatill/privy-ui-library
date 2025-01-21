/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,jsx,ts,tsx}",
	  "./components/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	presets: [require("nativewind/preset")],
	theme: {
	  extend: {
		colors: {
		  // Existing theme tokens (from your custom properties):
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
  
		  /* ------------- ADD BRAND PALETTES ------------- */
		  // Here we map each brand color to the same CSS vars
		  // or HSLA strings you defined in `global.css`.
  
		  primaryDuskyRose: "hsl(var(--primary-dusky-rose))",
		  primaryRoseTea: "hsl(var(--primary-rose-tea))",
		  primaryPaleBlush: "hsl(var(--primary-pale-blush))",
		  primaryBlushShell: "hsl(var(--primary-blush-shell))",
  
		  secondaryCoralSpring: "hsl(var(--secondary-coral-spring))",
		  secondarySpringMelon: "hsl(var(--secondary-spring-melon))",
		  secondaryOchreFawn: "hsl(var(--secondary-ochre-fawn))",
		  secondaryFawnSun: "hsl(var(--secondary-fawn-sun))",
  
		  tertiaryViridianGreen: "hsl(var(--tertiary-viridian-green))",
		  tertiaryGreenDew: "hsl(var(--tertiary-green-dew))",
		  tertiaryLightTeal: "hsl(var(--tertiary-light-teal))",
		  tertiaryTealDew: "hsl(var(--tertiary-teal-dew))",
  
		  neutralFloralWhite: "hsl(var(--neutral-floral-white))",
		  neutralTimberGrey: "hsl(var(--neutral-timber-grey))",
		  neutralNightStorm: "hsl(var(--neutral-night-storm))",
		  neutralSlateAsh: "hsl(var(--neutral-slate-ash))",
		},
	  },
	},
	plugins: [],
  };
  