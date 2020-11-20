import React from "react"
import "../styles/column.css"

const Column1 = ({ children }) => (
  <div className="column" style={{ backgroundColor: "#3C5548" }}>
    {children}
  </div>
)

export default Column1
