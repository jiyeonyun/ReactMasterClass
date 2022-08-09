import "./App.css";
import styled from "styled-components";

const First = styled.div`
  width: 600px;
  height: 600px;
  color: whitesmoke;
`;
function App() {
  return (
    <div>
      {/* <h1 class="animate">스크롤</h1> */}
      <First />
    </div>
  );
}

export default App;
