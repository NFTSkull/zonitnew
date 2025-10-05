import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores Zonit
        primary: '#1e1d37',
        secondary: '#02383d',
        accentBlue: '#74acd8',
        accentLime: '#d3d801',
        bgLight: '#efeeed',
        textLight: '#efeeed',
        textDark: '#1e1d37',
        
        // Colores del sistema - fijos para evitar problemas en móvil
        background: '#ffffff',
        foreground: '#1e1d37',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
};
export default config;