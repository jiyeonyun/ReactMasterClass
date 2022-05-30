import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  return <div>coin:{coinId}</div>;
};

export default Coin;
