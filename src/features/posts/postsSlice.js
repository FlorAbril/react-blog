import { createSlice } from '@reduxjs/toolkit'
import { postService } from '../../services/postService'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
    notification: null,
    loading: true,
  },
  reducers: {
    addInitialPosts: (state, action) => {
      state.value = [...state.value, ...action.payload]
      state.loading = false
      return state
    },
    create: (state, action) => {
      const randomId = Math.floor(100 + Math.random() * 5000)
      const newPost = {
        id: randomId,
        title: action.payload.title,
        body: action.payload.body,
      }
      state.value = [newPost, ...state.value]
    },  
    remove: (state, action) => {
      state.value = state.value.filter(post => post.id !== action.payload)
    },
    edit: (state, action) => {
      const post = state.value.find(post => post.id === action.payload.id)
      post.title = action.payload.title
      post.body = action.payload.body
    },
  },
})

const { addInitialPosts, create, remove, edit } = postsSlice.actions
export {addInitialPosts } 

export const deletePost = id => async dispatch => {
  await postService.delete(id)
  dispatch(remove(id))
};

export const createPost = newPost => async dispatch => {
   await postService.create(newPost)
  dispatch(create(newPost))
};

export const editPost = (editedPost) => async dispatch => {
  await postService.edit(editedPost)
  dispatch(edit(editedPost))
};


export default postsSlice.reducer