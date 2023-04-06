import React, { useState } from "react";

import Modal from "./Modal.jsx";
// import styled from "styled-components";

import "./Card.css";
import { useEffect } from "react";

const Card = ({ result }) => {
  // console.log(result);
  const [bookmark, setBookmark] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem(`${bookmark.idMeal}`, JSON.stringify(bookmark))
  }, [bookmark]);

  const handleChange = (result) => {
    setBookmark(result);
  };

  const ingredients = [];
  for (const key in result) {
    if (key.includes("strIngredient") && result[key] !== "") {
      ingredients.push(result[key]);
    }
  }

  return (
    <div className="recipe-card">
      <h3 className="card-title">{result.strMeal}</h3>
      <img src={result.strMealThumb} alt={result.strMeal}></img>
      <p>Cuisine: {result.strArea}</p>
      <div className="button-container">
        <button onClick={() => setShow(true)}>Show Recipe</button>
        <button onClick={() => handleChange(result)}>Bookmark</button>
      </div>
      <Modal title={result.strMeal} onClose={() => setShow(false)} show={show}>
        <section className="recipe-info">
          Ingredients: 
          <ul>
            {
              ingredients.map(x => {
                return <li> {x} </li>
              })
            }
          </ul>
        </section>
        <section className="recipe-info">
          Instructions: 
          <p>{result.strInstructions}</p>
        </section>
      </Modal>
    </div>
  )
}

export default Card;