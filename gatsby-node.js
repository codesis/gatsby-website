// const axios = require("axios")
// const crypto = require("crypto")

// exports.sourceNodes = async ({ actions }) => {
//   const { createNode } = actions

//   // fetch raw data from pexels api
//   const fetchChristmasImages = () =>
//     axios.get(`https://api.pexels.com/v1/search?query=christmas&per_page=1`, {
//       headers: {
//         authorization:
//           "563492ad6f917000010000018f91be7a9f334dc293eb05ed300aa369",
//       },
//     })
//   // await for results
//   const res = await fetchChristmasImages()

//   // map into these results and create nodes
//   res.data.results.map((image, i) => {
//     // Create your node object
//     const imageNode = {
//       // Required fields
//       id: createNodeId(`${res.id}`),
//       parent: null,
//       internal: {
//         type: `ChristmasImage`,
//         content: nodeContent,
//         contentDigest: createContentDigest(res),
//       },
//       children: [],

//       // Other fields that you want to query with graphQl
//       photographer: image.photos.photographer,
//       picture: {
//         medium: image.photos.src.medium,
//         small: image.photos.src.small,
//       },
//       // etc...
//     }

//     // Get content digest of node. (Required field)
//     // const contentDigest = crypto
//     //   .createHash(`md5`)
//     //   .update(JSON.stringify(imageNode))
//     //   .digest(`hex`)
//     // // add it to christmasNode
//     // imageNode.internal.contentDigest = contentDigest

//     // Create node with the gatsby createNode() API
//     const node = Object.assign({}, res, nodeMeta)
//     createNode(imageNode)
//   })

//   return
// }
