import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/category/:categoryId" component={CategoryPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
