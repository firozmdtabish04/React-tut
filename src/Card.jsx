import { Link } from "react-router-dom";
import React from "react";
const cards = [
  {
    id: 1,
    name: "Home",
    description: "Hey How are you",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    description: "About myself",
    path: "/home",
  },
  {
    id: 3,
    name: "Service",
    description: "Hey service",
    path: "/about",
  },
];
function Card() {
  return (
    <div>
      {cards.map((card) => (
        <Link key={card.id} to={card.path}>
          <h1>{card.name}</h1>
          <p>{card.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Card;
