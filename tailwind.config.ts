import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
            700: '#3A5A40',
            800: '#2A4633',
        },
        white: '#FFFFFF',
        greenDark: '#2E382E',
        greenLight: '#CFFFB3',
        purpleDark: '#340068',
        aqua: '#00A896',
        teal: '#4B8F8C',
    },
    },
  },
  plugins: [nextui()],
};
export default config;
