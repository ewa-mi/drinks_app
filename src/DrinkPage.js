import React from "react";

export default function DrinkPage(props) {
  return (
    <div>
      <h6>{props.strCategory}</h6>
      <h1 className="drink_name">{props.strDrink}</h1>
      <div>
        {props.strIngredient1}
        <br></br>
        {props.strIngredient2} <br></br>
        {props.strIngredient3} <br></br>
        {props.strIngredient4} <br></br>
      </div>
      <div className="drink_image">
        <img src={props.strDrinkThumb} />
      </div>
    </div>
  );
}
