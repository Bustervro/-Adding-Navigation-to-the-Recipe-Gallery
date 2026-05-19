import { Link } from "react-router";
import { recipes } from "../data/recipes";

export default function Gallery() {
  return (
    <div>
      <h1>Recipe Gallery</h1>

      <div className="gallery-grid">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="recipe-card"
          >
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
