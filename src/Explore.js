import "./Explore.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Explore(props) {
  return (
    <div>
      <h2 className="explore">Find your favourite drink!</h2>
      <p className="input">
        <input
          value={props.searchText}
          onChange={(event) => props.set_searchText(event.target.value)}
        />
        <button onClick={props.search}>Search</button>
      </p>
      {props.drinks && props.drinks.length
        ? props.drinks.map((drink, id) => {
            return (
              <Link
                className="drinks"
                key={id}
                to={`/DrinkPage/${drink.idDrink}`}
              >
                <p>Name: {drink.strDrink}</p>

                <img className="imgDrink" src={drink.strDrinkThumb} />
              </Link>
            );
          })
        : null}
      {props.drinks === null ? (
        <p className="null">
          Sorry, we don't have this cocktail in our base. Search for another
          drink.
        </p>
      ) : null}
    </div>
  );
}
