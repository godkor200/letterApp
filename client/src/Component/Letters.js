import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Letters.css";
import Render from "./Render";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import LetterAdd from "./LetterAdd";
import { Helmet } from "react-helmet";
const Letters = () => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const _effectMethod = {
    async _getLetter() {
      return await axios.get(
        "https://letters-heroku.herokuapp.com/api/letters"
      );
    },
  };
  // 화면 시작하자마자 데이터 랜더링하고 시작하기 위해 useEffect 사용
  useEffect(() => {
    _effectMethod._getLetter().then((res) => {
      setData(res.data);
    });
  }, [refresh]);

  const removeLetter = async (e) => {
    const url = `https://letters-heroku.herokuapp.com/api/letters/${e.target.id}`;
    if (window.confirm("진짜 지울꺼야? 너 편지를 지울꺼니? 진짜로?")) {
      await axios
        .delete(url)
        .then((res) => {
          alert("지워졌어 나쁜놈아");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
    reRending();
  };
  //리렌더

  const reRending = () => {
    setRefresh(!refresh);
  };

  return !data ? (
    <div className="letters-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>편지쓰기</title>
      </Helmet>
      <LetterAdd />
      <div className="letters-content">
        편지를 데이터베이스에서 불러오고 있는데 오류가 있으면 안뜰꺼야 새로고침
        해보렴..{" "}
        <div className="wrap">
          <button className="button" onClick={() => reRending()}>
            <IoMdRefresh />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="letters-wrapper">
      <div className="versiontag">v1.1 : Implemented TextEditer</div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>편지쓰기</title>
      </Helmet>
      <LetterAdd reRending={reRending} />
      {data.map((letter) => {
        return (
          <Render
            letter={letter}
            reRending={reRending}
            AiOutlineDelete={AiOutlineDelete}
            MdModeEdit={MdModeEdit}
            removeLetter={removeLetter}
          />
        );
      })}
    </div>
  );
};

export default Letters;
