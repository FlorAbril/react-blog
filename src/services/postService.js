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
    await axios.delete(
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

const editPost = async (post) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {data: post}
    )
    return response.data
  } catch(e) {
    console.error(e)
    return false
  }
}


export const postService = {
  get: getPosts,
  delete: deletePost,
  create: createPost,
  edit: editPost
}
