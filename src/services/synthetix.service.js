import snxData from "synthetix-data";
import subHours from 'date-fns/subHours';
const calculateTimestampForPeriod = (periodInHours) =>
	Math.trunc(subHours(new Date().getTime(), periodInHours).getTime() / 1000);
 export  const getRates = async () => {
    const rates = await snxData.rate.updates({
      synth: "sBTC",
      // maxTimestamp: Math.trunc(now / 1000),
      minTimestamp: calculateTimestampForPeriod(672),
      max: 6000,
    });
    return rates
  }