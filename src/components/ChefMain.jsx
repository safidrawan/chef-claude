import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../ai";


export default function ChefMain() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((ingre) => [...ingre, ingredient]);
  }

  const [recipe, setRecipe] = useState("");

  // function toggleShowRecipe() {
  //   setShowRecipe(true);
  // }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
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
        toggleShowRecipe={getRecipe}
      />

      {recipe && <Recipe recipe={recipe}/>}
    </main>
  );
}
