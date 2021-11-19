import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: []
  },
  reducers: {
    createPost: (state, action) => {
      state.value.push(action.payload)
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(post => post.id !== action.payload)
    },
    editPost: (state, action) => {
      const post = state.value.find(post => post.id === action.payload.id)
      post.title = action.payload.title
      post.body = action.payload.body
    },
  },
})

export const { createPost, deletePost, editPost } = postsSlice.actions

export default postsSlice.reducer