/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'leagueSpartan': ['LeagueSpartan','sans-serif'],
      },
      colors: {
        'color1-dark' : '#fee63b',
        'color2-dark' : '#ffffff',
        'color3-dark' : '#0e252b',
        'color4-dark' : '#fee63b',
        'background-color-dark': '#17062a',
        'background2-color-dark': '#1e0836',
        'background3-color-dark': '#1e0836',
        'button-color-dark': '#331b4d',
        'button2-color-dark': '#56077c',
        'button3-color-dark': '#00decf',
        'button-color-border-dark': '#851c9d',
        'button2-color-border-dark': '#b11fe2',
        'button3-color-border-dark': '#88ebf0',
        'button-color-hover-dark': '#6b34ac',
        'button2-color-hover-dark': '#8631b0',
        'button3-color-hover-dark': '#94fff9',


        'color1-light' : '#33342e',
        'color2-light' : '#ffffff',
        'color3-light' : '#ffffff',
        'color4-light' : '#33342e',
        'background-color-light': '#e6e6e6',
        'background2-color-light': '#d3cdcd',
        'background3-color-light': '#eeeeee',
        'button-color-light': '#e5e4e0',
        'button2-color-light': '#388187',
        'button3-color-light': '#c85401',
        'button-color-border-light': '#a69c92',
        'button2-color-border-light': '#1c6168',
        'button3-color-border-light': '#863700',
        'button-color-hover-light': '#ffffff',
        'button2-color-hover-light': '#62b5bd',
        'button3-color-hover-light': '#ff8b38',



        'color1' : '#ffffff',
        'color2' : '#ffffff',
        'color3' : '#ffffff',
        'color4' : '#4a5362',
        'background-color': '#3b4664',
        'background2-color': '#252d44',
        'background3-color': '#181f32',
        'button-color': '#e5e4e0',
        'button2-color': '#388187',
        'button3-color': '#c85401',
        'button-color-border': '#a69c92',
        'button2-color-border': '#1c6168',
        'button3-color-border': '#863700',
        'button-color-hover': '#ffffff',
        'button2-color-hover': '#62b5bd',
        'button3-color-hover': '#ff8b38',
      }
    },
  },
  plugins: [],
}

