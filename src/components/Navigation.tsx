import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="btn">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addRecipe">Add Recipe</Link>
          </li>
          <li>
            <Link to="/recipes">All Recipes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
