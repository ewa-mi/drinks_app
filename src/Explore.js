import "./Explore.css";
import React, { useState } from "react";

export default function Explore(event) {
  const [searchText, set_searchText] = useState("");
  const [drinks, setDrinks] = useState([]);

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);
    // console.log(
    //   `https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${queryParam}`
    // );
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`
    ).then((r) => r.json());
    // console.log("data", data.drinks);
    setDrinks(data.drinks);
  };

  return (
    <div>
      <h2 className="explore">Find your favourite drink!</h2>
      <p className="input">
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {drinks && drinks.length
        ? drinks.map((drink, id) => {
            return (
              <div className="drinks" key={id}>
                <p>Name: {drink.strDrink}</p>

                <img className="imgDrink" src={drink.strDrinkThumb} />
              </div>
            );
          })
        : null}
      {drinks === null ? (
        <p className="null">
          Sorry, we don't have this cocktail in our base. Search for another
          drink.
        </p>
      ) : null}
    </div>
  );
}
