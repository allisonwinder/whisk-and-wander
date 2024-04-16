import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Recipe } from "../Types";
import "./Breadcrumbs.css";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

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
  const { width } = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id, location]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const displayName = width < 600 ? recipe.abrvName : recipe.fullName;

  return (
    <div className="text-resize brand">
      <Link to="/" className="links">
        Home
      </Link>{" "}
      --{" "}
      <Link to="/recipes" className="links">
        All Recipes
      </Link>{" "}
      -- {displayName}
    </div>
  );
}

function CategoryBreadcrumb() {
  const { category } = useParams();
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
      -- {category}
    </div>
  );
}

function SingleCatRecipeBreadcrumb() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const { width } = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id, location]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const displayName = width < 600 ? recipe.abrvName : recipe.fullName;

  return (
    <div className="text-resize brand">
      <Link to="/" className="links">
        Home
      </Link>{" "}
      --{" "}
      <Link to="/recipes" className="links">
        All Recipes
      </Link>{" "}
      --{" "}
      <Link to={`/recipes/category/${recipe.category}`} className="links">
        {recipe.category}
      </Link>{" "}
      -- {displayName}
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
        <Route
          path="/recipes/category/:category"
          element={<CategoryBreadcrumb />}
        />
        <Route
          path="/recipes/category/:category/:id"
          element={<SingleCatRecipeBreadcrumb />}
        />
      </Routes>
    </div>
  );
}
