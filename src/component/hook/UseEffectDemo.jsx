import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">useEffect</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}

export default UseEffectDemo;