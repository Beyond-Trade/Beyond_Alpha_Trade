import * as React from "react";
import { AreaChart, XAxis, YAxis, Area, Tooltip,ResponsiveContainer } from 'recharts';
import isNumber from 'lodash/isNumber';
import { CurrencyKey } from '../../../constants/currency';
import { PeriodLabel, PERIOD_IN_HOURS } from '../../../constants/period';
import format from 'date-fns/format';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { formatCurrencyWithSign } from '../../../utils/formatters';
import useTradeChart from "../../../hooks/trade/useTradeChart";
import Periodlabels from "../../atomic/trade/PeriodLabels";
export type HistoricalTrade = {
	block: number;
	date: Date;
	feesInUSD: number;
	fromAddress: string;
	fromAmount: number;
	fromAmountInUSD: number;
	fromCurrencyKey: CurrencyKey;
	fromCurrencyKeyBytes: string;
	gasPrice: number;
	hash: string;
	timestamp: number;
	toAddress: string;
	toAmount: number;
	toAmountInUSD: number;
	toCurrencyKey: CurrencyKey;
	toCurrencyKeyBytes: string;
	price: number;
	amount: number;
	isSettled: boolean;
	reclaim: number;
	rebate: number;
	settledPrice: number;
};
function Chart() {
  const { t } = useTranslation();
  // const { colors } = React.useContext(ThemeContext);
  const {PERIOD_LABELS_MAP,setSelectedPeriod,records,activePeriod}= useTradeChart()
  console.log(records,"==========IN CHART==========")
  
  const CustomTooltip = ({
		active,
		label,
		payload,
	}: {
		active: boolean;
		payload: [
			{
				value: number;
				payload: {
					trade?: HistoricalTrade;
				};
			}
		];
		label: Date;
	}) => {
		if (active) {
			if(payload){
        const { value, payload: innerPayload } = payload[0];
			return (
				<TooltipContentStyle>
					<LabelStyle>{format(label, 'do MMM yy | HH:mm')}</LabelStyle>
					<ItemStyle>{`Price:  ${formatCurrencyWithSign(
						"$",
						value
					)}`}</ItemStyle>
					{(innerPayload.trade?.fromAmount ?? 0) > 0 ? (
						<ItemStyle>{`${formatCurrencyWithSign(
							"$",
							(innerPayload.trade as HistoricalTrade).fromAmountInUSD
						)}`}</ItemStyle>
					) : null}
				</TooltipContentStyle>
			);
      }
		}

		return null;
	};
  return (
    <div className="xl:h-chartH xxl:h-chartHXXL" >
      
      <Periodlabels PERIOD_LABELS_MAP={PERIOD_LABELS_MAP} setSelectedPeriod={setSelectedPeriod} active={activePeriod}/>
    <ChartContainer>
    {records?.length > 0 ?
      <ResponsiveContainer width="100%" height={300}>
    <AreaChart
      data={records}
      margin={{ top: 0, right: -6, left: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={"#A08AFF"} stopOpacity={0.5} />
          <stop offset="95%" stopColor={"#A08AFF"} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        tick={{ fontSize: '9px', fill: "black" }}
        dataKey="timestamp"
        tickFormatter={(val:any) => {
          if (!isNumber(val)) {
            return '';
          }
          return activePeriod > PERIOD_IN_HOURS.ONE_DAY
            ? format(val, 'dd MMM')
            : format(val, 'h:mma');
        }}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        type="number"
        domain={['auto', 'auto']}
        tickFormatter={(val:any) => `${formatCurrencyWithSign("$", val)}`}
        tick={{ fontSize: '9px', fill: "black" }}
        orientation="right"
        axisLine={false}
        tickLine={false}
      />
      <Area
        dataKey="rate"
        stroke={"#A08AFF"}
        fillOpacity={0.5}
        fill="url(#colorUv)"
        // @ts-ignore
        // dot={<CustomizedDot />}
      />
      <Tooltip
        content={
          // @ts-ignore
          <CustomTooltip />
        }
      />
    </AreaChart>
    </ResponsiveContainer>:"no record found"}
    </ChartContainer>
    <small className="text-xs">Note: Slight price discrepancy between this chart and actual  synthetic asset might occur due to different pricing sources.</small>
    {/* Slight price discrepancy between this chart and actual  synthetic asset might occur due to different pricing sources. */}
    </div>
  );
}

export default Chart;

const ChartContainer = styled.div`
	width: 100%;
	height: 290px;
	display: flex;
	justify-content: center;
	align-items: center;
	.recharts-yAxis .yAxis,
	.recharts-xAxis .xAxis {
		display: none;
	}
`;
const TooltipContentStyle = styled.div`
	padding: 5px;
	border-radius: 4px;
	background-color: rgb(243, 243, 254);
	text-align: center;
`;

const ItemStyle = styled.div`
	color: "white";
	font-size: 12px;
	padding: 3px 5px;
`;

const LabelStyle = styled(ItemStyle)`
	text-transform: capitalize;
`;


{/* <div className="mt-4 w-full xl:h-chartH xxl:h-chartHXXL">
      <TradingViewWidget
        symbol={`${assetChartNames[selectedPair.counter]}${
          assetChartNames[selectedPair.base]
        }`}
        autosize
      />
      <div id="myTradeChart" className="w-full h-full"></div>
      
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      
    </div> */}