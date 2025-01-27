import React from "react";

export default function ChefMain() {

  const [ingredients, setIngredients] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
   const formData = new FormData(event.currentTarget);
   const ingredient = formData.get('ingredient');
   setIngredients((ingre)=>[...ingre,ingredient])
   document.getElementById('inputItem').value ="";
  }
  const ingredientsItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <main>
      <form className="input" onSubmit={handleSubmit}>
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
    </main>
  );
}
