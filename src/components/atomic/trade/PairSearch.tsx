import React from "react";
import { useDispatch } from "react-redux";
import { searchAsset } from "../../../store/actions/ExchangeActions";

function PairSearch() {
  const dispatch = useDispatch();
  return (
    <div className="border-b border-gray-300 flex py-2">
      <img src="/assets/Icons/searching.svg" />
      <input
        type="text"
        className="focus:outline-none text-gray-500 text-xs boldText w-full ml-2"
        placeholder="SEARCH"
        onChange={(event) => {
          const value = event.target.value
          dispatch(searchAsset(value.toUpperCase()));
        }}
      />
    </div>
  );
}

export default PairSearch;
