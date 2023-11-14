import localFont from "next/font/local";

const fraktionSansFont = localFont({
  src: [
    {
      path: "../assets/fonts/FraktionSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/FraktionSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FraktionSans-Bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-fraktion-sans",
});

export default fraktionSansFont;
