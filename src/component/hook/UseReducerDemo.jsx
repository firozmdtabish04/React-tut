import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="px-3 py-2 bg-red-500 text-white rounded"
      >
        -
      </button>

      <span className="mx-4 text-xl">{count}</span>

      <button
        onClick={() => dispatch({ type: "increment" })}
        className="px-3 py-2 bg-green-500 text-white rounded"
      >
        +
      </button>
    </div>
  );
}

export default UseReducerDemo;
