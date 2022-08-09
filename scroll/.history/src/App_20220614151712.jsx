import "./App.css";
import styled from "styled-components";

const First = styled.div`
  width: 600px;
  height: 600px;
`;
function App() {
  return (
    <div class="container">
      <h1 class="animate">스크롤</h1>
      <div class="trigger"></div>
    </div>
  );
}

export default App;
