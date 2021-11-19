import PostsList from "../components/PostsList"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createPost } from "../features/posts/postsSlice"
import getPosts from "../services/getPosts"


const Home = () => {
  const posts = useSelector(state => state.posts.value) 
  const dispatch = useDispatch()

  useEffect(() => {
    getPosts().then(posts => 
      posts.map(post => 
        dispatch(createPost(post))
      )
    )
  }, [])
 
  return (
    <div>
      <h1>Home</h1>
      <PostsList posts={posts} />
    </div>
  )
}

export default Home