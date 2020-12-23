import GasFeeModal from "./GasFeeModal";
import Loader from "react-loader-spinner";
import React from "react";
import useMint from "../../../hooks/stake/useMint";

function Mint() {
  const {
    amount,
    amountVal,
    submit,
    fee,
    submitting,
    setAmount,
    openFeeModal,
    close,
    selectFee,
    isOpen,
    cRatio,
    BYNStackingAmount,
    BynBalance,
    usdbBalance,
    burnableByns,
    graphPercent,
    setMax,
  } = useMint();
  const maxLengthCheck = (e: any) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlue-500">Invest</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs xxl:text-base font-light text-blue-1000 mt-6 font-normal">
            Invest into USDb,by staking your BYN.
            <br />
            You can trade various synthetic assets using USDb
            <br />
             as well as earn staking reward daily from your staked BYN
            <br />
          </p>
          <img
            src="/assets/Icons/mint-illustration.svg"
            style={{ height: "150px" }}
            alt="img"
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-8 xl:w-full xxl:w-4/5">
              <p className="text-xs xl:text-xs xxl:text-sm font-medium">
                Confirm or enter amount to mint:
              </p>
              <div className="bg-gray-300 mt-2 rounded px-2 xl:px-4 xxl:px-6 text-gray-700 xl:text-sm xxl:text-sm flex justify-center items-center xl:py-2 xxl:py-2">
                <text className="focus:outline-none text-gray-600 text-xs xl:text-xs xxl:text-sm font-medium flex items-center border-r pr-4 border-gray-500">
                  USDb
                </text>
                <input
                  className="bg-gray-300 focus:outline-none ml-2 py-2 w-full"
                  type="number"
                  name="amount"
                  value={amount}
                  maxLength={25}
                  min="0"
                  step="0"
                  onInput={maxLengthCheck}
                  onChange={setAmount}
                />
                <button
                  onClick={setMax}
                  className="focus:outline-none bg-customBlue-200 flex justify-center items-center text-white text-xs xl:text-xs xxl:text-sm rounded py-1 xl:py-1 xxl:py-2 px-4 ml-2"
                >
                  Max
                </button>
              </div>

              <small className="block text-red-500 italic">{amountVal}</small>
            </div>
            <div className="flex justify-between text-xxs xl:text-xxs xxl:text-sm xl:w-full xxl:w-4/5 font-medium mt-1">
              <h6>Staking: {BYNStackingAmount.toFixed(4)} BYN</h6>

              <h6 className="flex">
                Estimated C-Ratio: {cRatio}%
                <p className="tooltip">
                  <img src="/assets/Icons/info.png" className="w-4 ml-2" />
                  <span className="tooltiptext">
                    To Mint Synths on Beyond, user has to deposit 300%
                    collateral of the value of synths being minted. This ensures
                    Synths are backed by sufficient collateral to absorb large
                    price shocks.
                  </span>
                </p>
              </h6>
            </div>
          </div>
          <div className="Xl:w-full font-medium xxl:w-4/5 m-auto">
          <div className="text-xs xl:text-xs xxl:text-sm mt-4">
            <h6>
              <text>Max BYN : </text>
              {BynBalance.toFixed(4)}
            </h6>
          </div>
          <div className="text-xs xl:text-xs xxl:text-sm">
            <h6>
              <text>Max USDb : </text>${usdbBalance.toFixed(4)}
            </h6>
          </div>
          </div>
          <div className="text-xxs xl:text-xxs xxl:text-sm m-auto xl:w-full xxl:w-4/5 font-medium mt-8">
            <div className="flex items-center">
              <div>
                <div className="border-2 border-blue-800 text-blue-800 rounded text-center px-1">
                  BYN
                </div>

                <div className="border-2 border-blue-800 text-blue-800 rounded px-1 mt-6">
                  USDb
                </div>
              </div>

              <div
                className="w-full flex flex h-6 items-center"
                style={{ padding: "0px" }}
              >
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <text></text>
                    <text>{burnableByns.toLocaleString('fullwide', { useGrouping: false })}</text>
                    <text></text>
                  </div>
                  <div
                    className="w-full flex pb-2 bg-gray-300 border-2 border-blue-800"
                    style={{ padding: "0px" }}
                  >
                    <div
                      className="h-5 bg-blue-700"
                      style={{ width: `${graphPercent}%` }}
                    ></div>
                  </div>

                  <div className="w-full flex justify-between">
                    <text></text>
                    <text>${Number(amount).toLocaleString('fullwide', { useGrouping: false }) || 0}</text>
                    <text></text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs xl:text-xs xxl:text-sm font-normal">
            <text>Ethereum network fee: $0/{fee} GWEI</text>
            <text
              onClick={openFeeModal}
              className="text-blue-500 underline ml-1 cursor-pointer"
            >
              EDIT
            </text>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={submit}
              className="focus:outline-none bg-customBlue-200 flex justify-center items-center text-white text-xs xxl:text-sm w-full xxl:w-4/5 rounded py-2 xxl:py-3 mt-2"
            >
              {!submitting && "INVEST NOW"}
              {submitting && (
                <Loader type="Bars" color="#ffffff" height={18} width={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      <GasFeeModal
        isOpen={isOpen}
        close={close}
        activeFee={fee}
        select={selectFee}
      />
    </div>
  );
}

export default Mint;
