import { Routes, Route } from "react-router-dom";
import "./Body.css";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";

export default function Body() {
  return (
    <section>
      <div className="bodywrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<RecipeList />} />
        </Routes>
      </div>
    </section>
  );
}
