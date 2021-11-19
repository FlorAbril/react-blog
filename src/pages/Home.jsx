import PostsList from "../components/PostsList"
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
  const posts = useSelector(state => state.posts.value)
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <PostsList posts={posts} />
    </div>
  )
}

export default Home