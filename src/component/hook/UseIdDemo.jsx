import { useId } from "react";

function UseIdDemo() {
  const id = useId();

  return (
    <div className="p-4">
      <label htmlFor={id}>Email</label>

      <input id={id} className="p-2 border rounded ml-2" />
    </div>
  );
}

export default UseIdDemo;
