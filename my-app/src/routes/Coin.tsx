import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  return <div>coin:coinId</div>;
};

export default Coin;
