import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Link className="recipe-card" to={`${recipe.id}`}>
            <h2>{recipe.fullName}</h2>
            <p>
              <strong>Total Time:</strong> {recipe.totalTime}
            </p>
            <p>
              <strong>Category:</strong> {recipe.category}
            </p>
          </Link>
        ))}
      </div>
      <br />
      <br />
      <br></br>
    </>
  );
}
