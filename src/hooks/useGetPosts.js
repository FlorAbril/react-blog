import axios from "axios";
import { useEffect, useState } from "react";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		setLoading(true)
		setError(false)
		try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      )
			console.log(response.data)
			setPosts(response.data)
			
    } catch(e) {
      setError(true)
			console.error(e)
    }
		setLoading(false);

	}

	useEffect(() => {
		fetchData()
	}, []);

	return {posts, loading, error}

}

export { useGetPosts } 