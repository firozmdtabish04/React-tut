import React, { useState } from "react";

function EventHandling() {
  const [inputValue, setInputValue] = useState("");

  // onClick
  const handleClick = () => {
    alert("Button clicked!");
  };

  // onChange
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted: ${inputValue}`);
  };

  // onMouseEnter
  const handleMouseEnter = () => {
    console.log("Mouse entered");
  };

  // onMouseLeave
  const handleMouseLeave = () => {
    console.log("Mouse left");
  };

  // onKeyDown
  const handleKeyDown = (event) => {
    console.log("Key down:", event.key);
  };

  // onKeyUp
  const handleKeyUp = (event) => {
    console.log("Key up:", event.key);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 justify-center flex items-center">
      <div className="p-6 w-full max-w-md bg-white rounded-2xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          React Event Handling
        </h1>

        {/* onClick */}
        <button
          onClick={handleClick}
          className="py-3 w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          onClick
        </button>

        {/* onChange */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700 block">
            onChange
          </label>

          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
            className="px-4 py-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <p className="mt-2 text-gray-600">
            Value: <span className="font-semibold">{inputValue}</span>
          </p>
        </div>

        {/* onSubmit */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="text-sm font-medium text-gray-700 block">
            onSubmit
          </label>

          <input
            type="text"
            placeholder="Enter something"
            className="px-4 py-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="py-3 w-full bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Form
          </button>
        </form>

        {/* Mouse Events */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="p-6 bg-purple-100 border-2 border-dashed border-purple-400 rounded-xl text-center cursor-pointer hover:bg-purple-200 transition"
        >
          <p className="font-semibold text-purple-800">
            onMouseEnter / onMouseLeave
          </p>

          <p className="mt-1 text-sm text-purple-600">
            Move your mouse over this box
          </p>
        </div>

        {/* Keyboard Events */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700 block">
            onKeyDown / onKeyUp
          </label>

          <input
            type="text"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            placeholder="Press any key..."
            className="px-4 py-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default EventHandling;
