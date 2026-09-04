import { useState } from "react";

// Counter App using useState hook
// function UseStateDemo() {
//   const [count, setCount] = useState(0);
//   if (count < 0) {
//     return <h2>Count cannot be negative</h2>;
//   }

//   return (
//     <>
//       <h3>Counter App</h3>
//       <h2>{count}</h2>
//       <div className="gap-2 justify-content-around flex">
//         <button
//           onClick={() => setCount(count + 1)}
//           className="p-2 bg-red-400 rounded-4xl text-white"
//         >
//           {" "}
//           Increase
//         </button>
//         <button
//           onClick={() => setCount(0)}
//           className="p-2 bg-green-400 rounded-4xl text-white"
//         >
//           {" "}
//           Reset
//         </button>
//         <button
//           onClick={() => setCount(count - 1)}
//           className="p-2 bg-blue-400 rounded-4xl text-white"
//         >
//           {" "}
//           Decrease
//         </button>
//       </div>
//     </>
//   );
// }

// Api fetching using useState hook
function UseStateDemo() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <>
      <h3>Api Fetching using useState hook</h3>
      <button
        onClick={fetchPosts}
        className="p-2 bg-red-400 rounded-4xl text-white"
      >
        Fetch Posts
      </button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default UseStateDemo;
