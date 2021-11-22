import { useSelector } from "react-redux"
import { useParams } from "react-router"

const Detail = () => {
  const { id }  = useParams()
  const posts = useSelector(state => state.posts.value)
  const loading = useSelector(state => state.posts.loading)
  const post = posts.find(post => post.id === +id)

  if(loading) return <div>Loading...</div>

  return (
    <>
      <div>
        {post ? 
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p> 
        </>
        :
          <h1>Post not found</h1>
        }
        
      </div>
    </>
  )

}

export default Detail