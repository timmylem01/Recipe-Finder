import React, { useState } from "react";
import Modal from "./Modal.jsx";
import "./Card.css";

const Card = ({ result, displayDelete, setBookmark, allStorage }) => {
  // This is used to control whether or not the modal is visible
  const [show, setShow] = useState(false);

  // This handleChange function can save recipes in localStorage for the Bookmarks page to access or delete recipes from localStorage to remove from Bookmarks page
  const handleChange = (result, string) => {
    if (string === "bookmark") {
      localStorage.setItem(`${result.idMeal}`, JSON.stringify(result));
    } else {
      localStorage.removeItem(`${result.idMeal}`);
      // This invocation of setBookmark will re-render the Bookmarks page without the user having to refresh the page
      setBookmark(allStorage());
    }
  };

  // This ingredients array stores each recipes' ingredients for the modal to display
  const ingredients = [];
  // Iterate through each key in result to find all keys that start with "strIngredient" to create a list of all ingredients
  for (const key in result) {
    if (
      key.includes("strIngredient") &&
      result[key] !== "" &&
      result[key] !== null
    ) {
      ingredients.push(`${result[key]}`);
    }
  }

  const measurements = [];
  for (const key in result) {
    if (
      key.includes("strMeasure") &&
      result[key] !== "" &&
      result[key] !== " " &&
      result[key] !== null
    ) {
      measurements.push(result[key]);
    }
  }

  // The bookmarkButton is used for cards that are displayed on the home page and search bar
  const bookmarkButton = (
    <button
      className="bookmark-button"
      onClick={() => handleChange(result, "bookmark")}
    >
      Bookmark
    </button>
  );
  // The deleteButton is used for cards that are displayed on the bookmarks page
  const deleteButton = (
    <button
      className="delete-button"
      onClick={() => handleChange(result, "delete")}
    >
      Remove
    </button>
  );

  return (
    <div className="recipe-card">
      <h3 className="card-title">{result.strMeal}</h3>
      <img src={result.strMealThumb} alt={result.strMeal}></img>
      <p>Cuisine: {result.strArea} </p>
      <div className="button-container">
        <button className="styled-button" onClick={() => setShow(true)}>
          Show Recipe
        </button>
        {/* if both are true, then display delete button */}
        {/* if displayDelete is false then display bookmark button */}
        {displayDelete ? deleteButton : bookmarkButton}
      </div>
      <Modal title={result.strMeal} onClose={() => setShow(false)} show={show}>
        <section className="recipe-info-sbs">
          <section className="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {ingredients.map((x) => {
                return <li> {x} </li>;
              })}
            </ul>
          </section>
          <section className="measurements">
            <h4>Measurements:</h4>
            <ul>
              {measurements.map((x) => {
                return <li> {x} </li>;
              })}
            </ul>
          </section>
        </section>
        <section className="recipe-info">
          <h4>Instructions:</h4>
          <p>{result.strInstructions}</p>
        </section>
      </Modal>
    </div>
  );
};

export default Card;
