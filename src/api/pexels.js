import axios from "axios"

export default axios.create({
  baseURL: `https://api.pexels.com/v1`,
  headers: {
    Authorization: "563492ad6f917000010000018f91be7a9f334dc293eb05ed300aa369",
  },
})
