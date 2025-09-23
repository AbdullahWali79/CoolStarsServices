export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors:{
          'primary': "#5f6FFF"
        },
        gridTemplateColumns:{
          'auto':'repeat(auto-fill,minmax(200px,1fr))'
        },
        screens: {
          'xs': '320px',
          // sm: 640px (default)
          // md: 768px (default)
          // lg: 1024px (default)
          // xl: 1280px (default)
        }
      },
    },
    plugins: [],
  }
  