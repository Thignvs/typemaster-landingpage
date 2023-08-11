/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans':'Barlow, sans-serif',
    },
    colors:{
      'Orange':'#F16718',
      'LightOrange':'#FF9B62',
      'DarkBlue':'#162542',
      'LightBlue':'#7b8BAD',
      'LightGray':'#E8EFF2',
      'White':'#FFFFFF',
    },

    extend: {
      backgroundImage:{
        'bg-mobile':"/src/assets/mobile/image-phone-and-keyboard.jpg",
        'bg-tablet':"/src/assets/tablet/image-phone-and-keyboard.jpg",
        'bg-desktop':"/src/assets/desktop/image-phone-and-keyboard.jpg",
      },
    },
  },
  plugins: [],
}