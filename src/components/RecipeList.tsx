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
            <div className="recipe-content">
              <h5 className="rec-title brand">{recipe.fullName}</h5>
              <div className="img-center">
                <img
                  src={recipe?.image}
                  alt="recipe"
                  className="photo-size"
                ></img>
              </div>
              <p className="card-info">
                <strong>Total Time:</strong> {recipe.totalTime} min
              </p>
              <p className="card-info">
                <strong>Category:</strong> {recipe.category}
              </p>
              {recipe.subcategory !== "" && (
                <p className="subcategory card-info">
                  <strong>Subcategory:</strong> {recipe.subcategory}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      <br />
    </>
  );
}
