import { useState, useDeferredValue } from "react";

function UseDeferredDemo() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div className="p-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded"
      />

      <p className="mt-2">Typing: {deferredText}</p>
    </div>
  );
}

export default UseDeferredDemo;
