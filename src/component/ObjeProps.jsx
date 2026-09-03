import React from "react";

function ChildProps({ ObjeProps }) {
  const name = "Tabish Parent";

  return (
    <div>
      <h1>{name}</h1>

      {ObjeProps.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

function ChildProps1({ ObjeProps }) {
  const name = "Tabish Child";

  return (
    <div>
      <h1>{name}</h1>

      {ObjeProps.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

function ObjeProps({ Props }) {
  const childprops = [
    {
      id: 1,
      name: "Tabish",
      title: "React Developer : child",
    },
    {
      id: 2,
      name: "Tabish",
      title: "Java Developer : child",
    },
  ];

  const childprops1 = [
    {
      id: 1,
      name: "Tabish",
      title: "React Developer : childProps1",
    },
    {
      id: 2,
      name: "Tabish",
      title: "Java Developer : childProps1",
    },
  ];

  return (
    <>
      <ChildProps1 ObjeProps={childprops} />
      <ChildProps ObjeProps={childprops1} />
    </>
  );
}

export default ObjeProps;
