import "./App.css";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  justify-content: center;
  position: static;
`;

const First = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  margin-bottom: 5rem;
`;
function App() {
  return (
    <Wrap>
      <First>
        <h1>1번 스크롤</h1>
        <h1>2번 스크롤</h1>
        <h1>3번 스크롤</h1>
        <h1>4번 스크롤</h1>
      </First>
      <First>hi</First>
      <First>hi</First>
      <First>hi</First>
    </Wrap>
  );
}

export default App;
