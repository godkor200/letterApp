import React, { useState } from "react";
import axios from "axios";
import "./LetterAdd.css";

const LetterAdd = () => {
  const [textarea, setTextArea] = useState("");

  const handleChange = (e) => {
    setTextArea(e.target.value);
    //변환할 값(setTextArea) = setState
  };

  const url = "https://letters-heroku.herokuapp.com/api/letters";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textarea || /^\s*$/.test(textarea.msg)) {
      alert("쓸 말이 그렇게 없니 도대체?");
      return;
    } else {
      axios.post(url, { msg: textarea }).then((data) => {
        console.log(data);
        alert("제출되었습니닷");
      });
    }

    setTextArea("");
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };
  return (
    <form className="letter-form" onSubmit={handleSubmit}>
      <h2>수빈이 한태 편지쓰기</h2>
      <textarea
        className="letter-textarea"
        type="Text"
        placeholder="어떤 말을 쓰고 싶니?"
        value={textarea}
        name="text"
        onChange={handleChange}
        //ref={inputRef}
      />
      <div class="wrap">
        <button class="button">Submit</button>
      </div>
    </form>
  );
};
export default LetterAdd;
