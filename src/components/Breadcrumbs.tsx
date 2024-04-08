import { Routes, Route, Link } from "react-router-dom";
import "./Breadcrumbs.css";

function HomeBreadcrumb() {
  return <div className="brand">Home</div>;
}

function AddRecipeBreadcrumb() {
  return (
    <div className="brand">
      <Link to="/" className="links">
        Home
      </Link>{" "}
      -- Add Recipe
    </div>
  );
}

export default function Breadcrumbs() {
  return (
    <div className="crumbs">
      <Routes>
        <Route path="/" element={<HomeBreadcrumb />} />
        <Route path="/addRecipe" element={<AddRecipeBreadcrumb />} />
      </Routes>
    </div>
  );
}
