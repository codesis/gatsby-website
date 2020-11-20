import React from "react"
import "../styles/column.css"

const Column1 = ({ background, children }) => (
  <div className="column" style={{ backgroundColor: background }}>
    {children}
  </div>
)

export default Column1
