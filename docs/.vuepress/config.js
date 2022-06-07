const { defaultTheme } = require("vuepress")

module.exports = {
  lang: "en-US",
  darkMode: true,
  title: "Kuldeep",
  description:
    "I am a lazy🦥 developer who enjoys developing lazy things which make your life simpler/or not.",
  head: [["link", { rel: "icon", href: "/images/lazy.png" }]],

  theme: defaultTheme({
    // default theme config
    logo: "/images/lazy.png",

    navbar: [
      {
        text: "About",
        link: "about.md",
      },
      {
        text: "Resume",
        link: "resume.md",
      },
    ],

    sidebar: false,
    lastUpdated: false,
    contributors: false,
  }),
}
