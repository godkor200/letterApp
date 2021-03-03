import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleChange = (e) => {
    setPassword(e.target.value);
    //변환할 값(setPassword) = setState
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || /^\s*$/.test(password.msg)) {
      alert("비밀번호를 입력하세요!");
      return;
    } else if (password === "930921") {
      alert("너 수빈이구나?");
      localStorage.setItem("name", "수빈");
      history.push("/letter");
    } else if (password === "890616") {
      alert("너 병국이구나?");
      localStorage.setItem("name", "병국");
      history.push("/letter");
    } else {
      alert("너 누구얏!");
      return;
    }
    setPassword("");
  };

  //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
  //변환할 값(setpassword) = setState
  return (
    <div className="wapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>너누구니?</h1>
        <input
          className="login-input"
          value={password}
          name="text"
          onChange={handleChange}
          placeholder="비밀번호 알고 있니?"
        />
        <div className="wrap">
          <button className="button">제출</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
