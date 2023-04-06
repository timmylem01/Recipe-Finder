import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Card from "../components/Card";

const Bookmarks = () => {

  // const [bookmarks, setBookmarks] = useState([]);

  // useEffect(() => {
  //   const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
  //   if(bookmarks) {
  //     setBookmarks(bookmarks);
  //   }
  // }, []);

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

  console.log(parsed);

  return (
    parsed.map(x => {
      if (x.length !== 0) {
        return <Card key={x.idMeal} result={x} />
      }
    })
  )
};

export default Bookmarks;
