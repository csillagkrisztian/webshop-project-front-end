import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SuccessPage from "./pages/SuccessPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/category/:categoryId" component={CategoryPage} />
        <Route path="/auth/signup" component={SignUpPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/cart/success" component={SuccessPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
