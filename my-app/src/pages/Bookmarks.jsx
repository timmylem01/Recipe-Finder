import React, { useState } from "react";
import Card from "../components/Card";
import "./Bookmarks.css";

const Bookmarks = () => {
  // The allStorage function will retrieve all properties from localStorage
  const allStorage = () => {
    let keys = Object.keys(localStorage);
    let i = keys.length;
    const recipes = [];
    const temp = [];

    while (i--) {
      temp.push(localStorage.getItem(keys[i]));
    }

    for (let i = 0; i < temp.length; i++) {
      // We are only looking for properties that have recipes
      if (temp[i] !== "INFO" && temp[i] !== null && temp[i] !== undefined) {
        // recipes will only accept values that are parseable
        recipes.push(JSON.parse(temp[i]));
      }
    }

    return recipes;
  };

  // on first render, invoke allStorage function to display current localStorage
  const [bookmark, setBookmark] = useState(allStorage());

  return (
    <div className="bookmarks-main">
      <h1>Bookmarks</h1>
      <div className="bookmark-display">
        {bookmark.map((recipe) => {
          if (recipe.length !== 0) {
            return (
              <Card
                key={recipe.idMeal}
                displayDelete={true}
                result={recipe}
                setBookmark={setBookmark}
                allStorage={allStorage}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
