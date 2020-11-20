import axios from 'axios';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export const zero_x_base_url = 'https://api.0x.org';
export const coinGeko = 'https://api.coingecko.com/api/v3/'
export const twelveData = 'https://api.twelvedata.com/';



// var getMarketData = async (coinsFullNames:string) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             coinsFullNames = encodeURI(coinsFullNames);
//             let data = await CoinGeckoClient.simple.price({
//                 ids: coinsFullNames,
//                 vs_currencies: ['usd'],
//                 include_market_cap:true,
//                 include_24hr_vol:true,
//                 include_24hr_change:true,
//                 include_last_updated_at:true,
//             });
//             if(data.success)
//             {
//                 resolve(data.data)
//             }
//           else{
//             reject(data.message)
//           }
//         } catch (err) {
//             reject(err)
//         }
//     });
// };



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
