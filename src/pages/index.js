import React from "react"
import Layout from "../components/layout"
import Row from "../components/row"
import Column1 from "../components/column1"
import Column2 from "../components/column2"
import Music from "../components/musicplayer"
import "../styles/index.css"

export default function Home() {
  return (
    <Layout headline={"Christmas all around"}>
      <Row>
        <Column1 background={"darkgray"}>
          <Music
            uri="spotify:playlist:05772FSLnb4H8OLAuEV5eD"
            view="list"
          ></Music>
        </Column1>
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
