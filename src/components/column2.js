import React from "react"
import { Link } from "gatsby"
import "../styles/column.css"

const Column2 = ({ columnHeadline, columnText, buttonLink, buttonText }) => (
  <div className="column" style={{ position: "relative" }}>
    <div className="column-div">
      <h1 className="column-headline">{columnHeadline}</h1>
      <p className="column-text">{columnText}</p>
      <Link to={buttonLink} className="column-link">
        {buttonText}
      </Link>
    </div>
  </div>
)

export default Column2
