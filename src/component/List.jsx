import React from "react";

function List() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h2>List</h2>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );  
}

export default List;
