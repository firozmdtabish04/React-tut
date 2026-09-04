import { useRef } from "react";

function UseRefDemo() {
  const headingRef = useRef(null);

  const changeHeading = () => {
    headingRef.current.textContent = "Heading Changed";
  };
  return (
    <>
      <div>
        <h1 ref={headingRef}> useRef</h1>
        <button onClick={changeHeading}>Change Heading</button>
      </div>
    </>
  );
}
export default UseRefDemo;
