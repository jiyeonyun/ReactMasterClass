import "./App.css";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  justify-content: center;
  position: relative;
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
  position: ${(props) => props.position};
`;

const TextWrap = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  top: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
  position: absolute;
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  pointer-events: none;
  will-change: transform, opacity;
  color: #ffffff;
`;
function App() {
  return (
    <Wrap>
      <First>
        <TextWrap></TextWrap>
      </First>
      <First>hi</First>
      <First>hi</First>
      <First>hi</First>
    </Wrap>
  );
}

export default App;
