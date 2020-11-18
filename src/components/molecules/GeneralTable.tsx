import React from 'react';

interface IProps {
    
}

function GeneralTable() {
    return (
        <table width="100%">
        <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
          <td className="w-1/5 pl-2 flex items-center">
            ASSETS
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </td>
          <td className="w-1/5">
            <div className="flex items-center">
              DESCRIPTION
              <img
                src="assets/Icons/up-down-arrow.svg"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/5">
            <div className="flex items-center">
              Total
              <img
                src="assets/Icons/up-down-arrow.svg"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/5">
            <div className="flex items-center">
              USD Value
              <img
                src="assets/Icons/up-down-arrow.svg"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/5">
            <div className="flex items-center">Action</div>
          </td>
        </tr>
        <tbody></tbody>
      </table>
    )
}