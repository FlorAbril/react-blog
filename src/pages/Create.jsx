import Post from "../components/Post";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { createPost } from "../features/posts/postsSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (newPost) => {
    dispatch(createPost(newPost));
    navigate("/");
  }

  const handleCancel = () => {
    navigate("/");
  }

  return (
      <Post handleSave={handleSave} handleCancel={handleCancel} />
  );
}

export default Create;
