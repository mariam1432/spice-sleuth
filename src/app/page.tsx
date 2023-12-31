"use client";
import React from "react";
import Home from "./pages/Home";
import RecipeByIngredients from "./pages/RecipeByIngredients";
import Recipe from "./pages/Recipe";
import { Footer, Navbar } from "./components";
import RecipesByCategory from "./pages/RecipesByCategory";
import ShoppingList from "./pages/ShoppingList";
export default function ParentComponent() {
  return (
    <main>
      <Navbar />
      <section className="p-10 py-24">
        {/* <Home/> */}
        {/* <Recipe /> */}
        {/* <RecipesByCategory/> */}
        {/* <RecipeByIngredients /> */}
        <ShoppingList/>
      </section>

      <Footer />
    </main>
  );
}
