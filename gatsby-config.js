module.exports = {
  siteMetadata: {
    title: `Josh Jackson - @Pjaerr`,
    description: `Personal Site and Blog for Josh Jackson - @Pjaerr`,
    author: `@Pjaerr`,
    siteUrl: `https://joshuaj.co.uk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                if (!edge.node.frontmatter.isHidden) {
                  return Object.assign({}, edge.node.frontmatter, {
                    title: edge.node.frontmatter.title,
                    description: edge.node.frontmatter.description,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid:
                      site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [
                      {
                        "content:encoded": `${
                          edge.node.excerpt
                        }<br></br> <a href="${site.siteMetadata.siteUrl +
                          edge.node.frontmatter.path}">Continue Reading</a>`,
                      },
                    ],
                  });
                }
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
                  edges {
                    node {
                      excerpt
                      frontmatter {
                        title
                        description
                        date
                        isHidden
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Josh Jackson - @Pjaerr | RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `josh-jackson-personal-site`,
        short_name: `josh-jackson`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#01a3a4`,
        display: `minimal-ui`,
        icon: `static/josh_icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blogposts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Fira Mono`,
            variants: [`500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146439931-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
};
