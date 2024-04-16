import React, { useState } from "react";
import axios from "axios";
import "./AddRecipe.css";

export default function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    fullName: "",
    abrvName: "",
    category: "",
    subcategory: "",
    instructions: "",
    ingredients: "",
    prepTime: "0",
    cookTime: "0",
    totalTime: "0",
    image: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let errors = "";

    if (!newRecipe.fullName || !newRecipe.abrvName) {
      errors +=
        "Please enter both the full name and abbreviated name of the recipe.";
    }

    if (!newRecipe.instructions) {
      errors += "\nPlease enter the instructions.";
    }

    if (!newRecipe.ingredients) {
      errors += "\nPlease enter the ingredients.";
    }

    if (!newRecipe.ingredients.includes(";")) {
      errors += "\nPlease separate ingedients with a semicolon";
    }

    if (!newRecipe.category) {
      errors += "\nPlease select a category.";
    }

    if (errors !== "") {
      alert(errors);
      return;
    }

    try {
      // Omit the 'id' field when sending the POST request
      const { ...newRecipeWithoutId } = newRecipe;
      await axios.post("http://localhost:3001/recipes", newRecipeWithoutId);
      // Clear the form fields
      setNewRecipe({
        fullName: "",
        abrvName: "",
        category: "",
        subcategory: "",
        instructions: "",
        image: "",
        prepTime: "",
        cookTime: "",
        totalTime: "",
        ingredients: "",
      });
      console.log("Form submitted:", newRecipe);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-container brand">
        <h1>Add Recipe</h1>
        <form onSubmit={handleSubmit} className="recipe-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={newRecipe.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="abrvName">Abbreviated Name:</label>
            <input
              type="text"
              id="abrvName"
              name="abrvName"
              value={newRecipe.abrvName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructions">
              Instructions (please submit as a paragraph with no numbers):
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">
              Ingredients (please submit as a paragraph with ';' inbetween each
              ingredient):
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category" className="brand">
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={newRecipe.category}
              onChange={handleCategoryChange}
            >
              <option value="" className="brand">
                Select Category
              </option>
              <option value="Dessert" className="brand">
                Desserts
              </option>
              <option value="Main Dish" className="brand">
                Main Dish
              </option>
              <option value="Side" className="brand">
                Side
              </option>
              <option value="Bread" className="brand">
                Breads
              </option>
              <option value="Drink" className="brand">
                Drinks
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subcategory">Subcategory:</label>
            <input
              type="text"
              id="subcategory"
              name="subcategory"
              value={newRecipe.subcategory}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prepTime">
              Prep Time: {newRecipe.prepTime} min
            </label>
            <input
              type="range" // Use range input for sliding bar
              id="prepTime"
              name="prepTime"
              min="0" // Min value for the sliding bar
              max="200" // Max value for the sliding bar
              value={newRecipe.prepTime}
              onChange={handleSliderChange} // Call handleSliderChange when slider value changes
              className="slider brand"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cookTime">
              Cook Time: {newRecipe.cookTime} min
            </label>
            <input
              type="range"
              id="cookTime"
              name="cookTime"
              min="0"
              max="200"
              value={newRecipe.cookTime}
              onChange={handleSliderChange}
              className="slider brand"
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalTime">
              Total Time: {newRecipe.totalTime} min
            </label>
            <input
              type="range"
              id="totalTime"
              name="totalTime"
              min="0"
              max="200"
              value={newRecipe.totalTime}
              onChange={handleSliderChange}
              className="slider brand"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image (URL):</label>
            <input
              type="text"
              id="image"
              name="image"
              value={newRecipe.image}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-button brand">
            Add Recipe
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
