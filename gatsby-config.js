module.exports = {
  siteMetadata: {
    title: "Christmas website",
    homeLink: [
      {
        name: "Home",
        link: "/",
      },
    ],
    navLinks: [
      {
        name: "Images",
        link: "/images",
      },
    ],
    footLinks: [
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "About this page",
        link: "/about",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`satisfy`],
        display: "swap",
      },
    },
  ],
}
