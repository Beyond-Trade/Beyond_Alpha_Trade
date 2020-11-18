import React from 'react';

function PairSearch() {
    return (
        <div className="border-b border-gray-300 flex py-2">
        <img src="assets/Icons/searching.svg" />
        <input
          type="text"
          className="focus:outline-none text-gray-500 text-xs ml-2"
          placeholder="SEARCH"
        />
      </div>
    )
}

export default PairSearch