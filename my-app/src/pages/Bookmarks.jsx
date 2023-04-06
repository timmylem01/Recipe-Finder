import React from "react";
import Card from "../components/Card";
import "./Bookmarks.css";

const Bookmarks = () => {
  const values = [];
  function allStorage() {
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  }
  allStorage();
  // console.log(values);
  const parsed = [];

  for ( let i = 0; i < values.length; i++) {
    
    /* 
      For some reason on my window's pc, my local storage has a loglevel key.
      It did not appear while working on my Macbook.
      The conditional statement below fixes the bug but the original line of code
      I had was on line 32.
    */
    if (values[i] !== "INFO") {
      parsed.push(JSON.parse(values[i]));
    }
    // parsed.push(JSON.parse(values[i]));
  }

  // console.log(parsed);

  return (
    <div className="bookmarks-main">
      <h1>Bookmarks</h1>
      <div className="bookmark-display">
        {
          parsed.map(x => {
            if (x.length !== 0) {
              return <Card key={x.idMeal} result={x} />
            }
          })
        }
      </div>
    </div>
  )
};

export default Bookmarks;
