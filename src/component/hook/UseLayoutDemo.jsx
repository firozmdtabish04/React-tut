import { useLayoutEffect } from "react";

function UseLayoutDemo() {
  useLayoutEffect(() => {
    console.log("Runs before screen paint.");
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">useLayoutEffect</h2>
    </div>
  );
}

export default UseLayoutDemo;
