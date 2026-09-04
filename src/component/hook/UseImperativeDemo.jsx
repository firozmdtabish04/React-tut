import { useRef, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} className="p-2 border rounded" />;
});

function UseImperativeDemo() {
  const childRef = useRef();

  return (
    <div className="p-4">
      <Child ref={childRef} />

      <button
        onClick={() => childRef.current.focus()}
        className="px-3 py-2 bg-blue-500 text-white rounded ml-2"
      >
        Focus Child
      </button>
    </div>
  );
}

export default UseImperativeDemo;
