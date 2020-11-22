import React from "react";
import LetterList from "./Components/LetterList";

function letterApp() {
  console.log("render called");
  return (
    <div className="letter-app">
      <h1>편지 공간</h1>
      <LetterList />
    </div>
  );
}

export default letterApp;
