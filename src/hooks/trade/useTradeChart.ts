import { useEffect, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPairPrice } from "../../services/generic.services";
import { TradePairsLookup } from "../../services/trade.service";
import {
  selectAssetPairAction,
  setMarketData,
} from "../../store/actions/ExchangeActions";
import { RootState } from "../../store/reducers/Index";
import { getRates } from "../../services/synthetix.service";
import { timeStamp } from "console";

const useTradeChart = () => {
  const [records, setRecords] = useState<any>([]);
  useEffect(() => {
    return () => {
      const chartDiv = document.getElementById("myTradeChart");
      //   if (chartDiv) chartDiv.innerHTML = "";
      //   dispatch(resetSelectedPair())
    };
  }, []);
  useEffect(() => {
    getRates().then((res) => {
      setRecords([...res])
    });
  }, []);

  return {
    records,
  };
};

export default useTradeChart;


// console.log(res, "==========orignal data==========");
//       const graphData: any = [];
//       res?.forEach((item: any) => {
//         //   let datee:any=moment(item.timestamp).format("yyyy-mm-dd")
//         //   console.log(datee)
//         graphData.push({
//           time: moment(item.timetamp).format("YYYY-MM-DD"),
//           value: Number(item.rate),
//         });
//       });
//       console.log(graphData, "==========getRates==========");
//       const chartDiv = document.getElementById("myTradeChart");
//       if (chartDiv) chartDiv.innerHTML = "";
//       let chart = createChart(chartDiv || "", {
//         layout: {
//           backgroundColor: "#000000",
//           textColor: "rgba(255, 255, 255, 0.9)",
//         },
//         grid: {
//           vertLines: {
//             color: "rgba(197, 203, 206, 0.1)",
//           },
//           horzLines: {
//             color: "rgba(197, 203, 206, 0.1)",
//           },
//         },
//         crosshair: {
//           mode: CrosshairMode.Normal,
//         },
//         //   rightPriceScale: {
//         //     borderColor:
//         //       graphData.length < 4 ? "#000000" : "rgba(197, 203, 206, 0.8)",
//         //   },
//         //   timeScale: {
//         //     borderColor:
//         //       graphData.length < 4 ? "#000000" : "rgba(197, 203, 206, 0.8)",
//         //   },
//       });
//       chart.timeScale().fitContent();
//       let areaSeries = chart.addAreaSeries({
//         topColor: "rgba(38,198,218, 0.56)",
//         bottomColor: "rgba(38,198,218, 0.04)",
//         lineColor: "rgba(38,198,218, 1)",
//         lineWidth: 2,
//       });

//       chart.subscribeCrosshairMove((param) => {
//         const dataRl: any = param.seriesPrices.get(areaSeries);
//         if (dataRl) {
//           console.log("rerender chart", dataRl);
//         }
//       });
//       areaSeries.setData(graphData);