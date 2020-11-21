import React, { useState, useRef, useEffect } from "react";
import "../App.css";

// 훅으로 상태변환
function LetterForm(props) {
  console.log("LetterForm -> props", props);
  const [textarea, setTextArea] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setTextArea(e.target.value);
    //변환할 값(setTextArea) = setState
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: textarea,
    });

    setTextArea("");
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };

  return (
    <form className="letter-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <textarea
            className="letter-textarea edit"
            type="Text"
            placeholder="수정해"
            value={textarea}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="letter-button edit">수정</button>{" "}
        </>
      ) : (
        <>
          <textarea
            className="letter-textarea"
            type="Text"
            placeholder="어떤 말을 쓰고 싶니?"
            value={textarea}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="letter-button">제출</button>
        </>
      )}
    </form>
  );
}

export default LetterForm;
