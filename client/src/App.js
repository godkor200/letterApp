import Letters from "./Component/Letters";
import LetterAdd from "./Component/LetterAdd";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="body-warpper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>수빈이 한태 편지쓰기</title>
      </Helmet>
      <LetterAdd />
      <Letters />
    </div>
  );
}

export default App;
