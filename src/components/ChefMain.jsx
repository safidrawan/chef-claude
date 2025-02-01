import React, { useState } from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
export default function ChefMain() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((ingre) => [...ingre, ingredient]);
  }
  const ingredientsItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  const [showRecipe, setShowRecipe] = useState(false);

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
      {ingredients.length >0 && <Ingredients item= {ingredientsItems} />}
      {ingredients.length > 3 && (
        <section className="get-recipe">
          <div className="text">
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe for you list of ingredients.</p>
          </div>
          <button onClick={()=>setShowRecipe(true)}>Get Recipe</button>
        </section>
      )}

      {showRecipe && <Recipe />}
    </main>
  );
}
