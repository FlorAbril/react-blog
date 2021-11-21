import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )
    return response.data
  } catch(e) {
    console.error(e)
  }
}

const deletePost = async (id) => {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}

const createPost = async (post) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      post
    )
    return response.data
  } catch(e) {
    console.error(e)
    return false
  }
}

const editPost = async (id, post) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      post
    )
    return response.data
  } catch(e) {
    console.error(e)
    return false
  }
}



export { getPosts, deletePost, createPost, editPost }