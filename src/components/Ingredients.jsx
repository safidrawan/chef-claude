export default function Ingredients(props) {
  return (
    <div className="ingredients">
      <h1>Ingredients List:</h1>
      <ul>{props.item}</ul>
    </div>
  );
}
