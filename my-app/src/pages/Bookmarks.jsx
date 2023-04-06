import React, { useState } from "react";
import Card from "../components/Card";
import "./Bookmarks.css";

const Bookmarks = () => {
  // on first render, invoke allStorage function
  const allStorage = () => {
    let keys = Object.keys(localStorage);
    let i = keys.length;
    const recipes = [];
    const temp = [];

    while (i--) {
      temp.push(localStorage.getItem(keys[i]));
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== "INFO") {
        recipes.push(JSON.parse(temp[i]));
      }
    }

    return recipes;
  };

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
