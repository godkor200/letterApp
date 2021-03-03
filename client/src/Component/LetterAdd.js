import React, { useState } from "react";
import axios from "axios";
import "./LetterAdd.css";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  EntiryWrapper,
  QuillWrapper,
  StyleButton,
  Line,
  GoToLoginBtn,
  ExplainText,
} from "./style/StoryFormstyle";
const EditorBlock = styled.div`
  padding: 15px;
  outline: #6eb584; ;
`;

const LetterAdd = (props) => {
  const { reRending } = props;
  const [textarea, setTextArea] = useState("");

  const handleChange = (textarea) => {
    setTextArea(textarea);
    //변환할 값(setTextArea) = setState
  };

  const url = "https://letters-heroku.herokuapp.com/api/letters";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textarea || /^\s*$/.test(textarea.msg)) {
      alert("쓸 말이 그렇게 없니 도대체?");
      return;
    } else {
      axios
        .post(url, {
          name: localStorage.getItem("name"),
          msg: textarea,
          createdAt: new Date().toLocaleString(),
        })
        .then((data) => {
          console.log(data);
          alert("제출되었습니닷");
          reRending();
        });
    }

    setTextArea("");
    //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
    //변환할 값(setTextArea) = setState
  };
  return (
    <EntiryWrapper>
      <EditorBlock className="letter-form">
        <h2>편지쓰기</h2>
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            value={textarea}
            onChange={handleChange}
            placeholder={"어떤 말을 쓰고 싶니?"}
          />
        </QuillWrapper>
        <StyleButton onClick={handleSubmit}>등록</StyleButton>
      </EditorBlock>
    </EntiryWrapper>
    // <form className="letter-form" onSubmit={handleSubmit}>
    //   <h2>편지쓰기</h2>
    //   <textarea
    //     className="letter-textarea"
    //     type="Text"
    //     placeholder="어떤 말을 쓰고 싶니?"
    //     value={textarea}
    //     name="text"
    //     onChange={handleChange}
    //   />
    //   <div className="wrap">
    //     <button className="button">제출</button>
    //   </div>
    // </form>
  );
};
export default LetterAdd;
