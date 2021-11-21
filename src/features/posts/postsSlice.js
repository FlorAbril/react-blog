import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
    notification: null,
  },
  reducers: {
    addInitialPosts: (state, action) => {
      state.value = [...state.value, ...action.payload]
      return state
    },
    createPost: (state, action) => {
      state.value.push(action.payload)
    },
    deletePost: async (state, action) => {
      const isDeleted = await deletePost(action.payload)
      isDeleted ? state.value = state.value.filter(post => post.id !== action.payload)
      : console.error('Error deleting post')
    },
    editPost: (state, action) => {
      const post = state.value.find(post => post.id === action.payload.id)
      post.title = action.payload.title
      post.body = action.payload.body
    },
  },
})

export const { createPost, deletePost, editPost, addInitialPosts } = postsSlice.actions

export default postsSlice.reducer