import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import { addInitialPosts } from "./features/posts/postsSlice";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import { postService } from "./services/postService";
import Create from "./pages/Create";

function App() {
  const [token] = useLocalStorage("token");
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await postService.get()
      dispatch(addInitialPosts(posts))
    }
    fetchPosts();
  }, [])

  return (
    <Router>
      {!token ? (
        <>
        {console.log(token)}
        <Routes>
          <Route path="*"  element={<Login/>} />
        </Routes>
        </>
      ) : (
      <>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<PostsList />} />
            <Route path="posts/create"  element={<Create />} />
            <Route path="posts/edit/:id"  element={<Edit />} />
            <Route path="posts/:id" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
      )}
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
}

export default App;
