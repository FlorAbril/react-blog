import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router"
import { editPost } from "../features/posts/postsSlice";

const Edit = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts.value);
  const loading = useSelector(state => state.posts.loading);
  const post = posts.find(post => post.id === +id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (editedPost) => {
    dispatch(editPost(editedPost));
    navigate("/");
  }

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <div>
      {loading ? 
        <div>Loading...</div>
       : 
        <Post post={post} handleSave={handleSave} handleCancel={handleCancel}/>
      }
    </div>
  );
}

export default Edit;
