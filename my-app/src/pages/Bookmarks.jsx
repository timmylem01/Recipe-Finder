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
      parsed.push(JSON.parse(values[i]));
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
