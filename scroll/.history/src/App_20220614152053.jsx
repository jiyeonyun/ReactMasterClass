import "./App.css";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const First = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;
function App() {
  return (
    <Wrap>
      <First>hi</First>
      <First>hi</First>
      <First>hi</First>
      <First>hi</First>
    </Wrap>
  );
}

export default App;
