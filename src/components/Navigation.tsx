import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="buttonWrapper brand">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/addRecipe" className="btn">
          Add Recipe
        </Link>
        <Link to="/recipes" className="btn">
          All Recipes
        </Link>
      </div>
    </nav>
  );
}
