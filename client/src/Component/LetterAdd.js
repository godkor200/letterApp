import React, { useState } from "react";
import axios from "axios";
import "./LetterAdd.css";

const LetterAdd = () => {
  const [textarea, setTextArea] = useState("");

  const handleChange = (e) => {
    setTextArea(e.target.value);
    //변환할 값(setTextArea) = setState
  };
  const url = "http://localhost:4001/api/letters";
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(url, { msg: textarea }).then((data) => {
      console.log(data);
    });

    setTextArea("");
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };
  return (
    <form className="letter-form" onSubmit={handleSubmit}>
      <h2>편지쓰기</h2>
      <textarea
        className="letter-textarea"
        type="Text"
        placeholder="어떤 말을 쓰고 싶니?"
        value={textarea}
        name="text"
        onChange={handleChange}
        //ref={inputRef}
      />
      <button className="letter-button">제출</button>
    </form>
  );
};
export default LetterAdd;
