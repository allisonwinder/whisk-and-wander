import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Body.css";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";
import CategoryList from "./CategoryList";

export default function Body() {
  const { pathname } = useLocation();

  return (
    <section>
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear
        >
          <div className="bodywrapper">
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addRecipe" element={<AddRecipe />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/:id" element={<RecipeView />} />
                <Route
                  path="/recipes/category/:category"
                  element={<CategoryList />}
                />
                <Route
                  path="/recipes/category/:category/:id"
                  element={<RecipeView />}
                />
                <Route path="*" element={<div>Not Found</div>} />
              </Routes>
            </>{" "}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
}
