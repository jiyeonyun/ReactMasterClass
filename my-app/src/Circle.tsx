import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
}
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlaterShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlaterShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age}`;

sayHello({ name: "nico", age: 12 });
sayHello({ name: "hi", age: 100 });
