import axios from 'axios';

export const zero_x_base_url = 'https://api.0x.org';
export const coinGeko = 'https://api.coingecko.com/api/v3/'
export const twelveData = 'https://api.twelvedata.com/';

export async function getCrypto(coinIds: any) {
    try {
        coinIds = encodeURI(coinIds);
       //const url = coinGeko + 'coins/' + params.coinId + '/ohlc?vs_currency=usd&days=' + params.day;
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+coinIds+"&order=market_cap_desc&per_page=100&page=1&sparkline=false"

        var prices = await axios.get(url);
        // console.log(prices)
        return prices.data;
    } catch (error) {
        console.log("--------- error is -------------------");
        return error;
    }
}

export async function getForex(params: any) {
    try {

        const url = twelveData + 'time_series?symbol='+params.coinId+'/USD&interval=1h&apikey=a1083c8f173849f0a0a395b2eb896d85'

        var prices = await axios.get(url);
        console.log(prices)
        return prices.data.values;
    } catch (error) {
        console.log("--------- error is -------------------");
        return error;
    }
}
export async function getGBP(params: any) {
    try {

        const url = 'https://api.exchangerate.host/timeseries?start_date=' + params.yesterday + '&end_date=' + params.today + '&symbols=GBP&base=USD'
        console.log(url)
        var prices = await axios.get(url);
        // console.log(prices)
        return prices.data;
    } catch (error) {
        console.log("--------- error is -------------------");
        return error;
    }
} 
