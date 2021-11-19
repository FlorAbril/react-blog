import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [ 
      {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ],
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

// Action creators are generated for each case reducer function
export const { createPost, deletePost, editPost } = postsSlice.actions

export default postsSlice.reducer