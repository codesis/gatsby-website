import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Tree from "../assets/tree.svg"
import "../styles/footer.css"

const Footer = ({ footLinks }) => (
  <footer>
    <div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "100%",
          padding: "0",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1, paddingLeft: "3rem" }}>
          <Link to="/">
            <Tree
              style={{
                margin: 0,
                flex: 1,
                width: "40px",
                height: "40px",
                marginTop: "1rem",
              }}
            />
          </Link>
        </h1>
        <div>
          <nav>
            <ul className="footer-list">
              {footLinks.map(link => (
                <li key={link.name}>
                  <Link
                    style={{
                      color: "white",
                      margin: "0.5rem",
                    }}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
