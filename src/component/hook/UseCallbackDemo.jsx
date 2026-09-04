import { useState, useCallback } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    alert("Hello!");
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Count: {count}
      </button>

      <button
        onClick={sayHello}
        className="px-3 py-2 bg-green-500 text-white rounded ml-2"
      >
        Hello
      </button>
    </div>
  );
}

export default UseCallbackDemo;
