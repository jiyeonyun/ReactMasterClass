import "./App.css";
import styled from "styled-components";

const First = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <div>
      <First>hi</First>
    </div>
  );
}

export default App;
