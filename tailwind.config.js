module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink_500: "#FFB9C4",
        pink_300: "#FCD1D7",
        text_menu: "#6E7FAA",
        text_orange_500: "#FBAF02",
        bg_heart: "#FF7D7D",
        pink_200: "#FFB9C4",
        pink_light: "#E53461",
        bg_bntPink500: "#E83350",
      },
      borderRadius: {
        home_bg_custom: "30px",
      },
    },
    boxShadow: {
      bg_pink: "0px 0px 50px 40px rgba(255, 185, 196, 1)",
      bnt_shadow: "0px 10px 10px 0 rgba(99, 115, 134, 0.2)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
  },
  variants: {},
  plugins: [],
};
