import React from "react";
import styled from "styled-components";

import "./Card.css";

const Card = ({ result }) => {
  // console.log(result);
  return (
    <div className="recipe-card">
      <h2>{result.strMeal}</h2>
      <img src={result.strMealThumb} alt={result.strMeal}></img>
      <p>Cuisine: {result.strArea}</p>
    </div>
  )
}

export default Card;