import * as React from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import TradingViewWidget from "react-tradingview-widget";
import { assetChartNames } from "../../../utils/constants";
import { fromPairs } from "lodash";
import useTradeChart from "../../../hooks/trade/useTradeChart";
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: -1000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 500, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: -2000, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: -250, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
function Chart({ selectedPair }) {
  const {records}=useTradeChart();
  console.log(records,"==========IN CHART==========")
  return (
    <div className="mt-4 w-full xl:h-chartH xxl:h-chartHXXL">
      <TradingViewWidget
        symbol={`${assetChartNames[selectedPair.counter]}${
          assetChartNames[selectedPair.base]
        }`}
        autosize
      />
      {/* <div id="myTradeChart" className="w-full h-full"></div> */}
      {/* <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}
      
    </div>
  );
}

export default Chart;
