import React from "react"
import Layout from "../components/layout"
import Row from "../components/row"
import Column1 from "../components/column1"

export default function About() {
  return (
    <Layout headline={"About us"}>
      <Row>
        <Column1>
          <h1
            style={{
              color: "#ff5226",
              fontWeight: 100,
              fontSize: "40px",
              textAlign: "left",
              top: "50%",
              left: "15%",
              position: "absolute",
              maxWidth: "340px",
            }}
          >
            Christmas is only #days away
          </h1>
        </Column1>
        <Column1 background={"#f3f3f3"}>
          <h3
            style={{
              color: "#ff5226",
              fontWeight: 100,
              fontSize: "20px",
              textAlign: "left",
              top: "47%",
              left: "52%",
              position: "absolute",
              maxWidth: "340px",
            }}
          >
            Christmas music
          </h3>
          <p
            style={{
              fontWeight: 100,
              fontSize: "20px",
              textAlign: "left",
              top: "50%",
              left: "52%",
              position: "absolute",
              maxWidth: "600px",
            }}
          >
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem
            ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
            ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem
            ipsumLorem ipsumLorem ipsumumLorem ipsumLorem ipsum Lorem ipsumLorem
            ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
            ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsuumLorem ipsumLorem
            ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem
            ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
            ipsu
          </p>
        </Column1>
      </Row>
    </Layout>
  )
}
