import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsla(var(--background))',
  			foreground: 'hsla(var(--foreground))',
  			card: {
  				DEFAULT: 'hsla(var(--card))',
  				foreground: 'hsla(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsla(var(--popover))',
  				foreground: 'hsla(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsla(var(--primary))',
  				foreground: 'hsla(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsla(var(--secondary))',
  				foreground: 'hsla(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsla(var(--muted))',
  				foreground: 'hsla(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsla(var(--accent))',
  				foreground: 'hsla(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsla(var(--destructive))',
  				foreground: 'hsla(var(--destructive-foreground))'
  			},
  			border: 'hsla(var(--border))',
  			input: 'hsla(var(--input))',
  			ring: 'hsla(var(--ring))',
  			chart: {
  				'1': 'hsla(var(--chart-1))',
  				'2': 'hsla(var(--chart-2))',
  				'3': 'hsla(var(--chart-3))',
  				'4': 'hsla(var(--chart-4))',
  				'5': 'hsla(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [typography, tailwindcssAnimate],
} satisfies Config;
