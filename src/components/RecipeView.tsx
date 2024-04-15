import { useParams } from "react-router-dom";
import { Recipe } from "../Types";
import { useState, useEffect } from "react";
import "./RecipeView.css";
import LoadingIndicator from "./LoadingIndicator";

const parseInstructions = (instructions: string) => {
  return instructions.split(".").filter((sentence) => sentence.trim() !== "");
};

const parseIngredients = (ingredients: string) => {
  return ingredients.split(";").filter((ingred) => ingred.trim() !== "");
};

export default function RecipeView() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recipe) {
    return <LoadingIndicator />; // Render loading state while data is being fetched
  }

  return (
    <>
      <div className="single-recipe-card">
        <h1 className="brand recipe-title">{recipe?.fullName}</h1>
        <div className="image-center">
          <img src={recipe.image} alt="recipe" className="photo-size"></img>
        </div>
        <div className="instructions-card">
          <div className="time">
            <p className="brand prepTime">Prep time: {recipe?.prepTime} min</p>
            <p className="brand cookTime">Cook time: {recipe?.cookTime} min</p>
            <p className="brand totalTime">
              Total time: {recipe.totalTime} min
            </p>
          </div>
          <div className="ingredients brand">
            <h2 className="brand">Ingredients</h2>
            <ul>
              {parseIngredients(recipe.ingredients).map((ingred, index) => (
                <li key={index}>{ingred}</li>
              ))}
            </ul>
          </div>
          <div className="instructions brand">
            <h2 className="brand">Instructions</h2>
            <ol>
              {parseInstructions(recipe.instructions).map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
