import { Balance } from "../../../store/types/WalletState";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import React from "react";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";
import UseWalletOverView from "../../../hooks/wallet/useWalletOverView";
import { couldStartTrivia } from "typescript";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

const COLORS = ["#FF8042","#FFBB28","#0088FE"];
function StatesRow() {
  UseWalletOverView();
  const { balances, currentCRatio, targetCRatio } = useSelector(
    (state: RootState) => state.wallet
  );
  let totalWalletValue = balances.reduce((a: any, b: any) => {
    return a + Number(b.cryptoBalance * b.rate);
  }, 0);

  let totalSynthValue = balances
    .filter(function (obj) {
      return !obj.isEther;
    })
    .reduce((a: any, b: any) => {
      return a + Number(b.cryptoBalance * b.rate);
    }, 0);
  let bynBalance = balances.find(function (obj) {
    return obj.isSiteToken;
  });
  let USDbBalance = balances.find(function (obj) {
    return obj.short == ERC20Contracts.USDb;
  });
  // @ts-ignore
  let bynBalanceData = bynBalance?.cryptoBalance * bynBalance?.rate || 0;
  // @ts-ignore
  let USDbBalanceData = USDbBalance?.cryptoBalance * USDbBalance?.rate || 0;
  let totalBynPercentage = bynBalance
    ? ((bynBalance?.cryptoBalance * bynBalance?.rate) / totalSynthValue) * 100
    : 0;

  let totalUSDbBalancePercentage = USDbBalance
    ? ((USDbBalance?.cryptoBalance * USDbBalance?.rate) / totalSynthValue) * 100
    : 0;

  let othersBalPercentage =
    ((totalSynthValue - (bynBalanceData + USDbBalanceData)) / totalSynthValue) *
    100;

  const data = [
    { name: 'Group A', value: totalBynPercentage },
    { name: 'Group B', value: totalUSDbBalancePercentage },
    { name: 'Group C', value: othersBalPercentage },
  ];
  return (
    <div className="px-8 xl:px-24 lg:px-24 xl:flex lg:flex">
      <div className="rounded mr-8 w-full shadow-lg mt-8">
        <div className="rounded-t text-gray-500 border-b text-xs xxl:text-base px-2 py-1 font-medium">
          <text>TOTAL SYNTHETIC ASSET VALUE</text>
        </div>
        <h3 className="font-extrabold text-lg xxl:text-xl text-customBlack-500 text-center my-6 mx-2">
          ${totalSynthValue ? toFixedNoRounding(totalSynthValue,5) : "0.00"} USDb
        </h3>
      </div>
      <div className="shadow-lg rounded mr-8 w-full mt-8">
        <div className="rounded-t text-gray-500 border-b text-xs xxl:text-base px-2 py-1 font-medium">
          <h5>SYNTHETIC ASSET BREAKDOWN</h5>
        </div>
        <div className="flex content-between justify-between px-8">
          
          {/* <img
            src="/assets/Icons/Synthetic asset breakdown.svg"
            alt="img"
            className="h-12 xxl:h-20 my-2 mr-6"
          /> */}

          
          <div className="text-xxs xxl:text-lg">
            <div className="flex items-center text-xs xxl:text-sm font-bold mt-1">
              <h6 className="ml-1 mr-2 font-bold" style={{color:"#FF8042"}}>BYN</h6>
              <h6>
                {totalBynPercentage ? totalBynPercentage.toFixed(2) : "00.00"}%
              </h6>
            </div>
            <div className="flex items-center text-xs xxl:text-sm font-bold mt-1">
              {/* <img
                src="/assets/Icons/Purple.Ellipse.svg"
                alt="img"
                className="h-3 xxl:h-4 "
              /> */}
              <h6 className="ml-1 mr-2 font-bold" style={{color:"#FFBB28"}}>USDb</h6>
              <h6>
                {totalUSDbBalancePercentage
                  ? totalUSDbBalancePercentage.toFixed(2)
                  : "00.00"}
                %
              </h6>
            </div>
            <div className="flex items-center text-xs xxl:text-sm font-bold mt-1">
              <h6 className="ml-1 mr-2 font-bold" style={{color:"#0088FE"}}>Others</h6>
              <h6>
                {othersBalPercentage ? othersBalPercentage.toFixed(2) : "00.00"}
                %
              </h6>
            </div>
          </div>
          {
            !totalBynPercentage && !totalUSDbBalancePercentage && !othersBalPercentage ? <img
            src="/assets/Icons/chart.svg"
            alt="img"
            className="h-12 xxl:h-20 my-2"
          />:null
          }
        {/*  */}
        {
            totalBynPercentage || totalUSDbBalancePercentage || othersBalPercentage ?
        <PieChart width={66} height={66}>
            <Pie
              data={data}
              // cx={120}
              // cy={200}
              innerRadius={17}
              outerRadius={30}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>:null
}
          {/*  */}
        </div>
      </div>
      <div className="rounded shadow-lg mr-8 mt-8 w-full">
        <div className="rounded-t text-gray-500 border-b text-xs xxl:text-base px-2 py-1 font-medium">
          <h5>COLLETERLIZATION RATIO</h5>
        </div>
        <div className="flex ">
          <div className="flex flex-col items-center w-full pt-3">
            <h2 className="text-customBlue-400 text-lg xxl:text-xl font-extrabold">
              {currentCRatio}%
            </h2>
            <p className="font-bold text-xxs  xxl:text-lg">CURRENT</p>
          </div>
          <div className="flex flex-col items-center w-full pt-3">
            <h2 className="text-green-400 text-lg xxl:text-xl font-extrabold">
              {targetCRatio}%
            </h2>
            <p className="font-bold text-xxs  xxl:text-lg">TARGET</p>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded mt-8 w-full">
        <div className="rounded-t text-gray-500 border-b text-xs xxl:text-base px-2 py-1 font-medium">
          <h5>TOTAL WALLET VALUE</h5>
        </div>
        <h3 className="font-extrabold text-lg xxl:text-xl text-customBlack-500 text-center my-6 mx-2">
          ${totalWalletValue ? toFixedNoRounding(totalWalletValue,5) : "0.00"} USD
        </h3>
      </div>
    </div>
  );
}

export default StatesRow;
