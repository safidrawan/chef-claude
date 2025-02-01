import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
export default function ChefMain() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((ingre) => [...ingre, ingredient]);
  }

  const [showRecipe, setShowRecipe] = useState(false);
  function toggleShowRecipe() {
    setShowRecipe(true);
  }

  return (
    <main>
      <form className="input" action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          placeholder="Ingredients"
          id="inputItem"
        />
        <button>Add Ingredients</button>
      </form>
      <IngredientsList
        ingredients={ingredients}
        toggleShowRecipe={toggleShowRecipe}
      />

      {showRecipe && <Recipe />}
    </main>
  );
}
