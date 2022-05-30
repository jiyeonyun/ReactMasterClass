import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string; //타입 속성 지정
} // 인터페이스 지정 (props)받아오려면

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`; // styledComponents -> 여기에 스타일 적용한 컴포넌트 만듬

interface H1Props {
  textColor: string;
}

const H1 = styled.h1<H1Props>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;
interface CircleProps {
  bgColor: string;
  borderColor?: string; // ?: 이거 적을시 비었을 경우 지정 가능함
  text?: string; //default값 지정 가능함
}
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState<number | string>(1); //  number나 string이 들어오는거임

  setValue(2);
  setValue("2");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
      <H1 textColor={"black"}>hi</H1>{" "}
      {/*prosp 보내줘야함 어떤 textcolor사용할건지*/}
    </Container>
  );
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
