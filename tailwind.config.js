/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "sans": ["Yekan Bakh FaNum"]
    },
    extend: {
   
      colors: {
        customColor: {
          blue:'rgba(5, 170, 198, 1)',
          yellow: 'rgba(222, 175, 3, 1)', 
          gray:'rgba(116, 116, 116, 1)' ,
          graySearchBar:'rgba(245, 245, 245, 1)',
          grayText:'rgba(255, 255, 255, 1)',
          blueBGimage:'rgba(0, 101, 194, 1)',
          blueDivText:'rgba(255, 255, 255, 0.22)',
          leftHame:'rgba(107, 107, 107, 1)',
          yellowENtext:'rgba(255, 255, 255, 0.45)',
          grayblurtext:'rgba(179, 179, 179, 1)',
          medicalColor:'rgba(241, 255, 255, 1)',
          medicaltext:'rgba(95, 161, 159, 1)',
          legalColor:'rgba(255, 248, 235, 1)',
          legalText:'rgba(223, 178, 86, 1)',
          bimehColor:'rgba(243, 247, 255, 1)',
          bimehtext:'rgba(138, 144, 172, 1)',
          loramText:'rgba(134, 134, 134, 1)',
          YellowText:'rgba(253, 199, 3, 1)',
          beforeFooterBTN:'rgba(0, 0, 0, 0.33)',
          footerText:'rgba(126, 126, 126, 1)',
          footerColor:'rgba(45, 45, 45, 1)',
         






        },
      },
    },
  },
  plugins: [],
}