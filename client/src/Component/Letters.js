import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import "./Letters.css";

const Letters = () => {
  const [{ data, loading, error, respones }, refetch] = useAxios({
    method: "GET",
    url: "http://localhost:4001/api/letters",
  });

  return loading || error ? (
    <div className="letters-content">
      편지를 데이터베이스에서 불러오고 있는데 오류가 있으면 안뜰꺼야 새로고침
      해보렴..<button onClick={refetch}>새로고침</button>
    </div>
  ) : (
    <div>
      {data.map((letter) => (
        <div className="letters-content" key={letter._id}>
          {letter.msg}
        </div>
      ))}
      <button onClick={refetch}>새로고침</button>
    </div>
  );
};

export default Letters;
