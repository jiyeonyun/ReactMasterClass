import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteState {
  name: string;
}

interface LocationParams {
  state: {
    name: string;
    rank: number;
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const location = useLocation();
  const { state } = useLocation() as LocationParams;
  return (
    <Container>
      <Header>
        <Title>{state?.name || "loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
