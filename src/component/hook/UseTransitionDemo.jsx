import { useState, useTransition } from "react";

function UseTransitionDemo() {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const loadItems = () => {
    startTransition(() => {
      const items = [];
      for (let i = 0; i < 5000; i++) {
        items.push(i);
      }
      setList(items);
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={loadItems}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Load Items
      </button>

      {isPending && <p>Loading...</p>}

      <p>Total Items: {list.length}</p>
    </div>
  );
}

export default UseTransitionDemo;
