module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {

      primary: 'Aldrich',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#00d5ff',
      },
      backgroundImage: {
        site: "url('./assets/background.png')",
        about: "url('./assets/me.png')",
      },
    },
  },
  plugins: [],
};
