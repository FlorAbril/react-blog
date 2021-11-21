import PostsList from "../components/PostsList"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addInitialPosts } from "../features/posts/postsSlice"
import { getPosts } from "../services/postService"
import Navbar from "../components/Navbar"

const Home = () => {
  const posts = useSelector(state => state.posts.value) 
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      dispatch(addInitialPosts(posts))
    }
    fetchPosts();
  }, [])
 
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <PostsList posts={posts} />
    </>
  )
}

export default Home