import React, { useState, useEffect } from "react";
import LetterForm from "./LetterForm";
import Letter from "./Letter";
import "../App.css";
import axios from "axios";

function LetterList() {
  const [letters, setLetters] = useState([]);

  // useEffect(async () => {
  //   const response = await axios.get("http://localhost:4001/api/letters");
  //   setLetters(response.data);
  // });

  const addLetter = (letter) => {
    //C
    if (!letter.text || /^\s*$/.test(letter.text)) {
      return;
    }

    const newLetter = [letter, ...letters];
    //...letters는 기존에 추가 되어 있던 것들
    // letter 추가 해야 될것들
    setLetters(newLetter);
  };
  const removeLetter = (id) => {
    //D
    if (window.confirm("진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?")) {
      const removeArr = [...letters].filter((letter) => letter.id !== id);
      //필터 함수를 쓰면 받아온 id값이 아닌 것만 필터하기때문에 지워지는 것으로 구현가능함

      console.log("removeLetter -> letters", ...letters);
      console.log("removeLetter -> removeArr", removeArr);
      setLetters(removeArr);
      alert("지워졌어 나쁜놈아!");
    }
  };
  const updateLetter = (letterId, newValue) => {
    //U
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setLetters((prev) => {
      console.log("updateLetter -> prev", prev);
      return prev.map((item) => (item.id === letterId ? newValue : item));
    });
  };
  const ReadLetter = (id) => {
    //R
    let updatedLetter = letters.map((letter) => {
      if (letter.id === id) {
        letter.isRead = !letter.isRead;
      }
      return letter;
    });
    setLetters(updatedLetter);
  };
  return (
    <div>
      <LetterForm onSubmit={addLetter} />
      <h3>지난 편지들</h3>
      <Letter
        letters={letters}
        ReadLetter={ReadLetter}
        removeLetter={removeLetter}
        updateLetter={updateLetter}
      />
    </div>
  );
}

export default LetterList;
