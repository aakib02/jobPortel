/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      "primary" : {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      "orange":{"400" : "#fb923c","500":"#f97316", '600':"#ea580c"},
      "red":{"500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b"},
      "green":{"500":"#22c55e"},
      'bgcolor': '#F8FAFC',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'white':"#ffff",
      'blue-700':"#1d4ed8",
      'blue-800':"#1e40af",
      "black" : "#000"
    
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}


