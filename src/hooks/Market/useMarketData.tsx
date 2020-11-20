import { useEffect, useState } from "react";

import { Balance } from "../../store/types/WalletState";
import { RootState } from "../../store/reducers/Index";
import { uniq } from "lodash";
import { useSelector } from "react-redux";

const useMarketData = () => {
  const { balances } = useSelector((state: RootState) => state.wallet);
  const init: any = [];
  const [state, setState] = useState({
    marketIndex: 0,
    marketTopData: init,
    topIndex: 0,
    topTabs: ["TOP GAINERS", "TOP LOOSERS"],
    activeData: init,
    marketTabs: [],
  });

  useEffect(() => {
    let categorys: any = ["ALL"];
    let marketTop: any = [];
    balances.forEach((item) => {
      categorys.push(item.category);
      if (item.change24h >= 0) {
        marketTop.push(item);
      }
    });
    // console.log(categorys);
    let unique = categorys.filter(
      (item: any, i: any, ar: any) => ar.indexOf(item) === i
    );

    setState((prev) => ({
      ...prev,
      marketTabs: unique,
      activeData: balances,
      marketTopData: marketTop,
    }));

    console.log(unique);
  }, [balances]);
  const handleSort = (sortOn: any, orderBy: any) => {
    console.log(orderBy);
    let data: any = [];
    if (orderBy === "asc") {
      data = state.activeData.sort(
        (a: any, b: any) => Number(a[sortOn]) - Number(b[sortOn])
      );
    } else if (orderBy === "desc") {
      data = state.activeData.sort(
        (a: any, b: any) => Number(b[sortOn]) - Number(a[sortOn])
      );
    } else {
      data = balances;
    }
    console.log(data);
    setState((prev) => ({ ...prev, activeData: data }));
  };
  const setIndex = (index: number) => {
    let data: any = [];
    if (index === 0) {
      data = balances;
    } else {
      balances.forEach((item: Balance) => {
        if (item.category === state.marketTabs[index]) {
          data.push(item);
        }
      });
    }
    setState((prev) => ({ ...prev, marketIndex: index, activeData: data }));
  };
  const setTopIndex = (index: number) => {
    let data: any = [];

    balances.forEach((item: Balance) => {
      if (state.topTabs[index] === state.topTabs[0]) {
        if (item.change24h >= 0) {
          data.push(item);
        }
      } else {
        if (item.change24h < 0) {
          data.push(item);
        }
      }
    });
    setState((prev) => ({ ...prev, topIndex: index, marketTopData: data }));
  };

  return {
    ...state,
    setIndex,
    handleSort,
    setTopIndex,
    balances,
  };
};

export default useMarketData;
