import React from "react";
import "./StarWars.css";
import Item from "./Item";

const StarWars = props => {
  return (
    <div className="starwar-list">
      {props.starwarsChars.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StarWars;
