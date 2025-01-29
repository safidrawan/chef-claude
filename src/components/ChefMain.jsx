import React from "react";

export default function ChefMain() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((ingre) => [...ingre, ingredient]);
  }
  const ingredientsItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

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
      <div className="ingredients">
        <h1>Ingredients List:</h1>
        <ul>{ingredientsItems}</ul>
      </div>
     {ingredients.length >0 ? <section className="get-recipe">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore est. Odio consequatur commodi iusto, temporibus?</p>
        <button>Get Recipe</button>
      </section> : null}
    </main>
  );
}
