import { Routes, Route } from "react-router-dom";
import "./Body.css";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";

export default function Body() {
  return (
    <section>
      <div className="bodywrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeView />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </section>
  );
}
