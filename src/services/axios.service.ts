import axios from 'axios';
import moment from 'moment';


const ETHERSCAN_API ='GIX8SDXWGSK2Q3JFXBQIIZIT3TKIXKHGMH';
const etherscan_baseurl = 'https://api-rinkeby.etherscan.io';
export const zero_x_base_url = 'https://api.0x.org';
export const coinGeko = 'https://api.coingecko.com/api/v3/'
export const twelveData = 'https://api.twelvedata.com/';

export async function getCrypto(coinIds: any) {
    try {
        coinIds = encodeURI(coinIds);
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + coinIds + "&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        var prices = await axios.get(url);
        
        return prices.data;
    } catch (error) {
        return error;
    }
}
export async function getForex(params: any) {
    try {
        const url = 'https://api.exchangerate.host/timeseries?start_date=' + params.yesterday + '&end_date=' + params.today + '&symbols=' + params.symbols + '&base=USD'
        var prices = await axios.get(url);
        return prices.data.rates;
    } catch (error) {
        return error;
    }
}



export async function getSynthetixPrices() {
    try {
        let prices = await axios({
            url: 'https://api.thegraph.com/subgraphs/name/synthetixio-team/synthetix-rates',
            method: 'post',
            data: {
                query: `
              {
                latestRates(orderBy: id) {
                rate
                id
                }
                }
                `
            }
        })
        return prices.data.data.latestRates;
    } catch (error) {
        return error;
    }
}


export const getContractTransactions = async (contractAddress: any) => {
  //  const url = 'https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=' + contractAddress + '&page=1&offset=2000&sort=asc&apikey=GIX8SDXWGSK2Q3JFXBQIIZIT3TKIXKHGMH';
  const url = etherscan_baseurl+'/api?module=account&action=tokentx&contractaddress=' + contractAddress + '&page=1&offset=2000&sort=asc&apikey='+ETHERSCAN_API;
    
  var response = await axios.get(url);
    let result = response.data.result;

    if (result.includes('Error')) { return 0 }
    var transactionsArray:any = []

    result.forEach((elementData: any) => {
       
        let amount = elementData.value / Math.pow(10,parseInt(elementData.tokenDecimal));
        let dateTime = new Date(elementData.timeStamp * 1000)
        let objectFormat = {
            tokenSymbol: elementData.tokenSymbol,
            tokenName: elementData.tokenName,
            amount: amount,
            time: moment(dateTime).format("MMM Do YY"),
            infoURL: 'https://rinkeby.etherscan.io/tx/' + elementData.hash,
            confirmations: elementData.confirmations,
            fromAddress: elementData.from.toLowerCase(),
            toAddress: elementData.to.toLowerCase(),
            hash: elementData.hash,
            blockHeight: elementData.blockNumber
        }
        transactionsArray.push(objectFormat);
    })
    return transactionsArray;
}

export const getUserContractTransactions = async (contractAddress: any,userAddress:any) => {
const url= etherscan_baseurl + '/api?module=account&action=tokentx&contractaddress=' + contractAddress + '&address=' + userAddress + '&page=1&offset=1000&sort=asc&apikey=' + ETHERSCAN_API;
    var response = await axios.get(url);
    let result = response.data.result;

    if (result.includes('Error')) { return 0 }
    var transactionsArray:any = []

    if(response.data.status != "0") result.forEach((elementData: any) => {
       
        let amount = elementData.value / Math.pow(10,parseInt(elementData.tokenDecimal));
        let dateTime = new Date(elementData.timeStamp * 1000)
        let objectFormat = {
            tokenSymbol: elementData.tokenSymbol,
            tokenName: elementData.tokenName,
            amount: amount,
            time: moment(dateTime).format("MMM Do YY"),
            infoURL: 'https://rinkeby.etherscan.io/tx/' + elementData.hash,
            confirmations: elementData.confirmations,
            fromAddress: elementData.from.toLowerCase(),
            toAddress: elementData.to.toLowerCase(),
            hash: elementData.hash,
            blockHeight: elementData.blockNumber
        }
        transactionsArray.push(objectFormat);
    })
    return transactionsArray;
}