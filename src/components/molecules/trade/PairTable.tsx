import React from "react";

function PairTable() {
  return (
    <table width="100%">
      <tr className="bg-gray-300 text-xxs text-left text-gray-600">
        <td className="w-1/2 pl-2 flex items-center py-1">
          PAIR
        </td>
        <td className="w-1/2 pr-2">
          <div className="flex items-center justify-end">
            CHANGE
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
      </tr>
      
    </table>
  );
}

export default PairTable;
