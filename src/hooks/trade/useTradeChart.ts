import { useEffect, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPairPrice } from "../../services/generic.services";
import { TradePairsLookup } from "../../services/trade.service";
import {
  selectAssetPairAction,
  setMarketData,
  updateSelectAssetPair,
} from "../../store/actions/ExchangeActions";
import { RootState } from "../../store/reducers/Index";
import { getRates } from "../../services/synthetix.service";
import { timeStamp } from "console";
import { fetchSynthRateUpdates } from "../../services/rates/rates";

const useTradeChart = () => {
  const dispatch = useDispatch();
  const { selectedPair,refresh } = useSelector((state: RootState) => state.exchange);
  const [records, setRecords] = useState<any>([]);
  const [activePeriod, setActivePeriod] = useState(24);
  const PERIOD_LABELS_MAP = [
    {
      value: "1H",
      valueHours: 1,
    },
    {
      value: "4H",
      valueHours: 4,
    },
    {
      value: "1D",
      valueHours: 24,
    },
    {
      value: "1W",
      valueHours: 168,
    },
    {
      value: "1M",
      valueHours: 672,
    },
  ];
  useEffect(() => {
    fetchSynthRateUpdates(selectedPair.counter, selectedPair.base, activePeriod).then(
      (res: any) => {
        dispatch(updateSelectAssetPair(res))
        if (res) setRecords([...res.rates]);
      }
    );
  }, [selectedPair]);
  const setSelectedPeriod = (period: any) => {
    setActivePeriod(period);
    fetchSynthRateUpdates(selectedPair.counter, selectedPair.base, period).then(
      (res: any) => {
        dispatch(updateSelectAssetPair(res))
        if (res) setRecords([...res.rates]);
      }
    );
  };
  return {
    records,
    PERIOD_LABELS_MAP,
    activePeriod,
    setSelectedPeriod,
  };
};

export default useTradeChart;

//       const graphData: any = [];
//       res?.forEach((item: any) => {
//         //   let datee:any=moment(item.timestamp).format("yyyy-mm-dd")
//         graphData.push({
//           time: moment(item.timetamp).format("YYYY-MM-DD"),
//           value: Number(item.rate),
//         });
//       });
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
//         }
//       });
//       areaSeries.setData(graphData);
