import React from "react";

const Item = props => {
  return (
    <div className="ul">
      <ul>{props.item.name}</ul>
      <li>
        <strong>Color of Eyes: </strong>
        {props.item.eye_color}
      </li>
      <li>
        <strong>Gender: </strong>
        {props.item.gender}
      </li>
    </div>
  );
};

export default Item;
