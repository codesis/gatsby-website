import React from "react"
import "../styles/headline.css"

const Headline = ({ headline }) => (
  <div
    style={{
      padding: "200px",
      backgroundColor: "#D1C6AC",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1
        style={{
          color: "#A45818",
          textAlign: "center",
          fontFamily: "satisfy",
          fontWeight: 100,
          fontSize: "80px",
        }}
      >
        {headline}
      </h1>
    </div>
  </div>
)

export default Headline
