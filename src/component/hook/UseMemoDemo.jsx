import { useState, useMemo } from "react";

function UseMemoDemo() {
  const [num, setNum] = useState(1);

  const square = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div className="p-4">
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        className="p-2 border rounded"
      />

      <p className="mt-2">Square: {square}</p>
    </div>
  );
}

export default UseMemoDemo;
