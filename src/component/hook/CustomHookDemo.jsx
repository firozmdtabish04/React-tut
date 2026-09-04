import { useState } from "react";

function useCounter(initial) {
  const [count, setCount] = useState(initial);

  return { count, setCount };
}

function CustomHookDemo() {
  const { count, setCount } = useCounter(5);

  return (
    <div className="p-4">
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}

export default CustomHookDemo;
