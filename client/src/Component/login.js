import React, { useState } from "react";
import Letters from "./Letters";

const Login = () => {
  const [password, setPassword] = useState("");

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
      alert("제출되었습니닷");
      <Letters />;
    }
  };

  setPassword("");
  //일종의 체이닝 나중에 제출한다음에 뭐가 나올껀지?
  //변환할 값(setpassword) = setState
  return (
    <form className="letter-form" onSubmit={handleSubmit}>
      <h2>비밀번호를 입력하세요</h2>
      <input
        className="letter-input"
        placeholder="어떤 말을 쓰고 싶니?"
        value={password}
        name="text"
        onChange={handleChange}
      />
      <div class="wrap">
        <button class="button">Submit</button>
      </div>
    </form>
  );
};
export default Login;
