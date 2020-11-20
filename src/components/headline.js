import React from "react"
import Image from "../images/header3.jpg"
import "../styles/headline.css"

const Headline = ({ headline }) => (
  <div
    style={{
      height: "auto",
      backgroundColor: "#3c2720",
      position: "relative",
    }}
  >
    <div
      style={{
        margin: "auto",
        border: "solid 1rem #3c2720",
        height: "400px",
        maxWidth: "1200px",
        maxHeight: "400px",
        backgroundImage: `url(${Image})`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 8px 8px #3c2720",
      }}
    ></div>
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
          color: "#ff5226",
          textShadow: "1px 1px #fde4b4",
          textAlign: "center",
          fontWeight: 100,
          fontSize: "50px",
        }}
      >
        {headline}
      </h1>
    </div>
  </div>
)

export default Headline
