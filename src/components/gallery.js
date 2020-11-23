import React from "react"

const Gallery = props => {
  const images = props.data.allChristmasImage.edges

  return (
    <div>
      {images.map((image, i) => {
        const imageData = image.node
        return (
          <div key={i}>
            <p>Name: {imageData.name.first}</p>
            <img src={imageData.picture.medium} />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery

export const query = graphql`
  query ChristmasImageQuery {
    allChristmasImage {
      edges {
        node {
          photographer
          picture {
            medium
            small
          }
        }
      }
    }
  }
`
