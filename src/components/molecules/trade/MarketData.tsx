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
  console.log(props.selectedPair)
  return (
    <div className="border rounded py-2 px-6 flex justify-between whitespace-nowrap overflow-auto mb-4 w-full">
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">
          Price
        </h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {Number(props.selectedPair.rate).toFixed(2)} USDb
        </h2>
      </div>
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">
          Change(24h)
        </h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.change24h.toFixed(2)} %
        </h2>
      </div>
      <div>
        <h5 className="text-gray-500 boldText text-xxs xl:text-xxs lg:text-xxs">
          High(24h)
        </h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.high24h.toFixed(2)} USDb
        </h2>
      </div>
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">
          Low(24h)
        </h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.low24h.toFixed(2)} USDb
        </h2>
      </div>
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">
          24H VOLUME
        </h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">
          {props.selectedPair.volume24h.toFixed(2)} USDb
        </h2>
      </div>
    </div>
  );
}

export default MarketData;
