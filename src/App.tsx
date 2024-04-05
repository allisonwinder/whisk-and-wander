import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import Body from "./components/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Breadcrumbs />
        <Navigation />
        <Body />
      </main>
    </Router>
  );
}

export default App;
