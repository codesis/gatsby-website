import React from "react"
import { Link } from "gatsby"
import Tree from "../assets/tree.svg"
import "../styles/header.css"

const Header = ({ navLinks }) => (
  <header>
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
        <h1 style={{ margin: 0, flex: 1, paddingLeft: "1rem" }}>
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <Tree
              style={{
                margin: 0,
                flex: 1,
                width: "40px",
                height: "40px",
              }}
            />
          </Link>
        </h1>
        <div>
          <nav>
            <ul className="header-list">
              {navLinks.map((link, i) => {
                if (i < 1) {
                  return (
                    <li key={link.name}>
                      <Link style={{ color: "#D1C6AC" }} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={link.name}>
                      <Link style={{ color: "#fde4b4" }} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
