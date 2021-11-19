import Post from "./Post";

export default function PostsList ({posts}) {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
