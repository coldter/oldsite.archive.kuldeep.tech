const { defaultTheme } = require("vuepress")

module.exports = {
  lang: "en-US",
  darkMode: true,
  title: "Kuldeep",
  description: "Web Dev/Tech enthusiast",
  head: [["link", { rel: "icon", href: "/images/logo.webp" }]],

  theme: defaultTheme({
    // default theme config
    logo: "/images/logo.webp",

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
  }),
}
