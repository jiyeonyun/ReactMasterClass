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

const Text = styled.div`
  position: sticky;
  top: 0;
`;
function App() {
  return (
    <Wrap>
      <First></First>
      <First>hi</First>
      <First>hi</First>
      <First>hi</First>
    </Wrap>
  );
}

export default App;
