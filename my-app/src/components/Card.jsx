import React, { useState } from "react";
import Modal from "./Modal.jsx";
import "./Card.css";

const Card = ({ result, displayDelete, setBookmark, allStorage }) => {
  // console.log(result);
  const [show, setShow] = useState(false);

  const handleChange = (result, string) => {
    if (string === "bookmark") {
      localStorage.setItem(`${result.idMeal}`, JSON.stringify(result));
    } else {
      localStorage.removeItem(`${result.idMeal}`);
      setBookmark(allStorage());
    }
  };

  const ingredients = [];
  for (const key in result) {
    if (
      key.includes("strIngredient") &&
      result[key] !== "" &&
      result[key] !== null
    ) {
      ingredients.push(result[key]);
    }
  }
  // console.log(ingredients);
  const bookmarkButton = (
    <button className="bookmark-button" onClick={() => handleChange(result, "bookmark")}>Bookmark</button>
  );
  const deleteButton = (
    <button className="delete-button" onClick={() => handleChange(result, "delete")}>Delete</button>
  );

  return (
    <div className="recipe-card">
      <h3 className="card-title">{result.strMeal}</h3>
      <img src={result.strMealThumb} alt={result.strMeal}></img>
      <p>Cuisine: {result.strArea}</p>
      <div className="button-container">
        <button className="styled-button" onClick={() => setShow(true)}>Show Recipe</button>
        {/* if both are true, then display delete button */}
        {/* if displayDelete is false then display bookmark button */}
        {displayDelete ? deleteButton : bookmarkButton}
      </div>
      <Modal title={result.strMeal} onClose={() => setShow(false)} show={show}>
        <section className="recipe-info">
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((x) => {
              return <li> {x} </li>;
            })}
          </ul>
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
