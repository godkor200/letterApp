import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const EntiryWrapper = styled.div`
  display: inline;
`;
export const QuillWrapper = styled.div`
  .ql-toolbar {
    background: #eaecec;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
  .ql-container {
    min-height: 30px;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 0px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-container .ql-blank ::before {
    left: 0px;
  }
`;
export const StyleButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.6rem 0 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 4rem;
  height: 2.75rem;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  font-family: "맑은 고딕";
  color: black;
  background: #fef019;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  align-items: left;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1c2237;
    color: #fff;
  }
`;

export const Line = styled.div`
  border-radius: 5px;
  background-color: #eaecec;
  display: block;
  width: 100%;
  height: 1px;
`;

export const ExplainText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: left;
  span {
    font-size: 1.7rem;
  }
`;

export const GoToLoginBtn = styled(LinkR)`
  border-radius: 5px;
  background: #01bf71;
  height: 20px;
  max-width: 15%;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1c2237;
    color: #fff;
  }
`;
