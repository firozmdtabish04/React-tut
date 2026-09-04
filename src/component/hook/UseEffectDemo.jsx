import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };
    // fetchPosts();
  }, []);

  return (
    <>
      <h3>Api Fetching using useEffect hook</h3>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {" "}
            <br />
            <h4>{post.title}</h4> <br />
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default UseEffectDemo;
