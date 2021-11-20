import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [token] = useLocalStorage("token");
  return (
    <Router>
      {!token ? (
        <>
        {console.log(token)}
        <Routes>
          <Route path="/" exact element={<Login/>} />
        </Routes>
        </>
      ) : (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
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
