import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )
    console.log(response.data)
    return response.data
  } catch(e) {
    console.error(e)
  }
}

export default getPosts