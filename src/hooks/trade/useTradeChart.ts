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
