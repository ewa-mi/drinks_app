import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NavBar from "./NavBar.js";
import DrinkPage from "./DrinkPage.js";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`
    ).then((r) => r.json());
    setDrinks(data.drinks);
  };

  const renderDrinkPage = (routerProps) => {
    let specificDrink = parseInt(routerProps.match.params.idDrink);
    let foundDrink = drinks.find(
      (drink) => parseInt(drink.idDrink) === specificDrink
    );

    return (
      <DrinkPage
        search={search}
        strCategory={foundDrink.strCategory}
        strDrink={foundDrink.strDrink}
        strIngredient1={foundDrink.strIngredient1}
        strIngredient2={foundDrink.strIngredient2}
        strIngredient3={foundDrink.strIngredient3}
        strIngredient4={foundDrink.strIngredient4}
        strDrinkThumb={foundDrink.strDrinkThumb}
      />
    );
  };

  return (
    <>
      <NavBar />
      <Switch>
        <Route
          path="/DrinkPage/:idDrink"
          render={(routerProps) => renderDrinkPage(routerProps)}
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore
            search={search}
            searchText={searchText}
            set_searchText={set_searchText}
            drinks={drinks}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
