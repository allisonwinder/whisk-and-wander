import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import "./RecipeList.css";

export default function CategoryList() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes?category=${category}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  if (!recipes) {
    return <LoadingIndicator />; // Render loading state while data is being fetched
  }

  return (
    <>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Link className="recipe-card" to={`${recipe.id}`} key={recipe.id}>
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
