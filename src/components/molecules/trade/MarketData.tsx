import * as React from "react";
import {
  fetchExchanges,
  fetchSynthVolumeInUSD,
} from "../../../services/rates/rates";
import { AssetPair } from "../../../store/types/ExchangeState";

interface IProps {
  selectedPair: AssetPair;
}

function MarketData(props: any) {
  const [volume24H, setVolume24H] = React.useState<number>(0);
  const [activePeriod, setActivePeriod] = React.useState(24);
  const fetchVolumeData = async () => {
    const totalVolume = await fetchSynthVolumeInUSD(
      props.selectedPair.base,
      props.selectedPair.counter,
      activePeriod
    );
    setVolume24H(totalVolume);
  };

  const MarketExchangesData = async () => {
    const data = await fetchExchanges();
  };

  React.useEffect(() => {
    fetchVolumeData();
    MarketExchangesData();
  });

  return (
    <div className="border-2 border-gray-400 py-2 px-2 flex overflow-auto whitespace-no-wrap justify-between whitespace-nowrap overflow-auto mb-4 w-full">
      <div className="w-full">
        <div className="bg-gray-300 py-2 w-full pl-2">
        <h5 className="text-xs font-semibold xxl:text-sm">
          Price
        </h5>
        </div>
        <h2 className="font-medium ml-2 text-sm xs:text-xs xl:text-base lg:text-base">
          {Number(props.selectedPair.rate).toFixed(2)} USDb
        </h2>
      </div>
      <div className="w-full">
        <div className="bg-gray-300 py-2 w-full">
        <h5 className="text-xs font-semibold xxl:text-sm">
          Change(24h)
        </h5>
        </div>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.change24h.toFixed(2)} %
        </h2>
      </div>
      <div className="w-full">
      <div className="bg-gray-300 py-2 w-full">
        <h5 className="text-xs font-semibold xxl:text-sm">
          High(24h)
        </h5>
        </div>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.high24h.toFixed(2)} USDb
        </h2>
      </div>
      <div className="w-full">
      <div className="bg-gray-300 py-2 w-full">
        <h5 className="text-xs font-semibold xxl:text-sm">
          Low(24h)
        </h5>
        </div>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.low24h.toFixed(2)} USDb
        </h2>
      </div>
      <div className="w-full">
        <div className="bg-gray-300 py-2 w-full">
        <h5 className="text-xs font-semibold xxl:text-sm">
        24H VOLUME
        </h5>
        </div>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.volume24h.toFixed(2)} USDb
        </h2>
      </div>
    </div>
  );
}

export default MarketData;
