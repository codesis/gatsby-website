import React from "react"

const Row = ({ children }) => (
  <div
    style={{
      height: "400px",
      display: "flex",
      flexFlow: "row wrap",
      width: "100%",
    }}
  >
    {children}
  </div>
)

export default Row
