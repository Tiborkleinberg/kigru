module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: theme => ({
        'herobild': "url('/Users/ValentinHammerle/Desktop/Webdevelopement/eigenes/Kuli/Supplies/hintergrundbild.png')",
      }),
      colors: {
        "kuligrün": "#46ce53",
        "kuligelb": "#ffda84",
        "kuligrau": "#f4f3f4",
        "kuligdunkelgrün": "#006379",
        "kuliorange": "#FF6C00",
        "kulirot": "#F7425E",
        "blau": "#29abe2",
        "grün": "#22b573",
        "gelb": "#d9e021",
        "rot": "#f15a24",

      },
      spacing: {
        
        "4.5": "4.5rem",
        "5.5": "5.5rem",
        "7.5": "7.5rem",
        "10.5": "10.5rem",
        "12.5": "12.5rem",
        "13.5": "13.5rem",
        "68": "17rem",
        "75": "19rem",
        "85": "22rem",
        "87": "22.5rem",
        "90": "23rem",
        "100": "30rem",
        "130": "35rem",
        "36p": "36%",
      },
      fontFamily: {
        "handlee": ["Handlee"],
        "mali": ["Mali"],
      },
      height: {
        "90": '90%',
        "87": '87%',
        "85": '85%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
