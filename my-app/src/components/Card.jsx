import React, { useState } from "react";

import Modal from "./Modal.jsx";
import styled from "styled-components";

import "./Card.css";

const Card = ({ result }) => {
  // console.log(result);
  const [show, setShow] = useState(false);

  return (
    <div className="recipe-card">
      <h2>{result.strMeal}</h2>
      <img src={result.strMealThumb} alt={result.strMeal}></img>
      <p>Cuisine: {result.strArea}</p>
      <button onClick={() => setShow(true)}>Show Recipe</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </div>
  )
}

export default Card;