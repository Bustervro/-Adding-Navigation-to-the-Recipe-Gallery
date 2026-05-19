import { Link, useParams } from "react-router";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <div>
        <h1>Recipe Not Found</h1>
        <Link to="/gallery">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="detail-image"
      />

      <h2>Cooking Instructions</h2>
      <p>Cooking instructions will be added here.</p>

      <Link to="/gallery">Back to Gallery</Link>
    </div>
  );
}
