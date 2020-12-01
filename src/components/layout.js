import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import Headline from "./headline"

const Layout = ({ headline, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            navLinks {
              name
              link
            }
            footLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet>
        <Header navLinks={data.site.siteMetadata.navLinks} />
        <Headline headline={headline} />
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              paddingBottom: "80px",
              margin: "0 auto",
              maxWidth: "100%",
              padding: "0",
              paddingTop: 0,
            }}
          >
            {children}
            <Footer footLinks={data.site.siteMetadata.footLinks} />
          </div>
        </div>
      </React.Fragment>
    )}
  />
)
export default Layout
