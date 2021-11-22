import { useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostsList () {
  const posts = useSelector(state => state.posts.value) 
  const dispatch = useDispatch()


  const handleDelete = (id) => {
    dispatch(deletePost(id))
  
  }
 
 
  return (
    <div style={{ display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "1em",
      }}>
      {posts.map(({id, title, body}) => (
        <Card  style={{ width: '100%' }} key={id}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div style={{display:"flex", justifyContent:"flex-start", columnGap: "1em"}}>
              <Link to={`/posts/edit/${id}`}>
                <Button variant="outline-primary">Edit</Button>
              </Link>
              <Link to={`/posts/${id}`}>
                <Button variant="outline-info">Detail</Button>
              </Link>
              <Button variant="outline-danger" onClick={()=>handleDelete(id)} >Delete</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
