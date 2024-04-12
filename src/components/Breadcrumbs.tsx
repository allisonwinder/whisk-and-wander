import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Recipe } from "../Types";
import "./Breadcrumbs.css";

function HomeBreadcrumb() {
  return <div className="text-resize brand">Home</div>;
}

function AddRecipeBreadcrumb() {
  return (
    <div className="text-resize brand">
      {" "}
      <Link to="/" className="transitions links">
        Home
      </Link>{" "}
      -- Add Recipe
    </div>
  );
}

function AllRecipesBreadcrumb() {
  return (
    <div className="text-resize brand">
      <Link to="/" className="links">
        Home
      </Link>{" "}
      -- All Recipes
    </div>
  );
}

function SingleRecipeBreadcrumb() {
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
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }
  return (
    <div className="text-resize brand">
      <Link to="/" className="links">
        Home
      </Link>{" "}
      --{" "}
      <Link to="/recipes" className="links">
        {" "}
        All Recipes
      </Link>{" "}
      -- {recipe.fullName}
    </div>
  );
}

export default function Breadcrumbs() {
  return (
    <div className="crumbs">
      <Routes>
        <Route path="/" element={<HomeBreadcrumb />} />
        <Route path="/addRecipe" element={<AddRecipeBreadcrumb />} />
        <Route path="/recipes" element={<AllRecipesBreadcrumb />} />
        <Route path="/recipes/:id" element={<SingleRecipeBreadcrumb />} />
      </Routes>
    </div>
  );
}
