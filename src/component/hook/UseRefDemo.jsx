import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef();

  return (
    <div className="p-4">
      <input
        ref={inputRef}
        className="p-2 border rounded"
        placeholder="Type here"
      />

      <button
        onClick={() => inputRef.current.focus()}
        className="px-4 py-2 bg-purple-500 text-white rounded ml-2"
      >
        Focus
      </button>
    </div>
  );
}

export default UseRefDemo;
