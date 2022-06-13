import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import { useOutletContext } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={
            [
              {
                data: data?.map((price) => {
                  return [
                    Date.parse(price.time_close),
                    price.open.toFixed(3),
                    price.high.toFixed(3),
                    price.low.toFixed(3),
                    price.close.toFixed(3),
                  ];
                }),
              },
            ] as any
          }
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 350,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
              labels: {
                style: {
                  colors: "#9c88ff",
                },
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
