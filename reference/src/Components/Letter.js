import React, { useState } from "react";
import LetterForm from "./LetterForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "../App.css";
function Letter({ letters, ReadLetter, removeLetter, updateLetter }) {
  console.log("Letter -> letters", letters);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateLetter(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return (
      <>
        <h2>수정 편지</h2>
        <LetterForm edit={edit} onSubmit={submitUpdate} />
      </>
    );
  }

  return letters.map((letter, index) => (
    <div
      className={letter.isRead ? "letter-row Read" : "letter-row"}
      key={index}
    >
      <div
        key={letter.id}
        onClick={() => {
          ReadLetter(letter.id);
        }}
      >
        {letter.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeLetter(letter.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: letter.id, value: letter.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Letter;
