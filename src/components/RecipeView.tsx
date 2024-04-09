import { useParams } from "react-router-dom";
import { Recipe } from "../Types";
import { useState, useEffect } from "react";

export default function RecipeView() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  return (
    <div>
      <h1>Single Recipe</h1>
      <h3>{recipe?.fullName}</h3>
    </div>
  );
}
