import React from "react"
import Layout from "../components/layout"
import Row from "../components/row"
import Column1 from "../components/column1"
import Column2 from "../components/column2"
import "../styles/index.css"

export default function Images() {
  return (
    <Layout headline={"Christmas all around"}>
      <Row>
        <Column1 background={"darkgray"}></Column1>
        <Column2
          columnHeadline={"Contact"}
          columnText={
            "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem"
          }
          buttonLink={"/contact"}
          buttonText={"Contact me"}
        ></Column2>
      </Row>
    </Layout>
  )
}
