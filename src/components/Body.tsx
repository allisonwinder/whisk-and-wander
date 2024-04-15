import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Body.css";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";

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
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addRecipe" element={<AddRecipe />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/:id" element={<RecipeView />} />
                <Route path="*" element={<div>Not Found</div>} />
              </Routes>
            </div>{" "}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
}

/*        { Routes for different pages}
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/addRecipe" element={<AddRecipe />} />
       <Route path="/recipes" element={<RecipeList />} />
       <Route path="/recipes/:id" element={<RecipeView />} />
     </Routes> */
