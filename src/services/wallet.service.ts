import Web3 from 'web3';
import { ERC20Contracts } from "../contracts/constants/contracts";
import { store } from '../App';
import { Balance } from '../store/types/WalletState';
import { ContractLookup } from '../contracts/contracts.lookup';
import { SyntheticCategories } from '../contracts/constants/synthetic.enum';
import { saveBalanceInfoAction } from '../store/actions/WalletActions';
import { getCrypto, getGBP, getSynthetixPrices } from './axios.service';




let web3: Web3 = new Web3();

export const updateBalances = async () => {
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    const assets = ContractLookup.filter(c => c.isSyntheticAsset && !c.isNativeToken);
    var today = new Date(Date.now());
    var todayUpdated = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    var yesterday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() - 1);
    const [cryptoRates, gbpPrice] = await Promise.all([
        getCrypto('bitcoin,litecoin'),
        getGBP({
            today: todayUpdated, yesterday: yesterday
        })
    ])
   let synthetixPricesFeed = await getSynthetixPrices();
debugger
    let balances: Balance[] = [];
    for (let i = 0; i < assets.length; i++) {
        let bal: any = 0;
        if (activeAddress) {
            bal = await getERC20Balance(assets[i], activeAddress);
        }
        let price: number = await getPriceFeed(assets[i].contractName, assets[i].decimal);

        console.log('Price of ' + assets[i].contractName + ' is ' + price);
        let balanceObj: Balance = {
            name: assets[i].contractName,
            short: assets[i].contractName,
            rate: price,
            change24h: 0,
            high24h: 0,
            low24h: 0,
            cryptoBalance: bal,
            category: assets[i].syntheticCategory,
            isEther: false,
            isSiteToken: assets[i].isMainToken,
        }
        if (balanceObj.category == SyntheticCategories.CRYPTOCURRENCY) {

            let rateObj = cryptoRates.find((x: any) => x.id == assets[i].fullName.toLowerCase())
            
            if (rateObj) {
                balanceObj.change24h = rateObj.price_change_percentage_24h;
                balanceObj.high24h = rateObj.high_24h;
                balanceObj.low24h = rateObj.low_24h;
                balanceObj.rate = rateObj.current_price
            }
        }

        balances.push(balanceObj);
        console.log(balances)
    }

    let EthBalance = await getETHBalance(activeAddress);
    let balanceObj: Balance = {
        name: "Ethereum",
        short: "ETH",
        rate: 0,
        change24h: 0,
        high24h: 0,
        low24h: 0,
        cryptoBalance: EthBalance,
        category: SyntheticCategories.CRYPTOCURRENCY,
        isEther: true,
        isSiteToken: false,
    }
    balances.push(balanceObj);
    store.dispatch(saveBalanceInfoAction(balances));
}

export const getETHBalance = async (address: string) => {
    web3 = store.getState().wallet.web3;
    if (web3.currentProvider) {
        try {
            var balanceInWei = await web3.eth.getBalance(address)
            balanceInWei = Web3.utils.fromWei(balanceInWei, 'ether')
            return Number(balanceInWei);
        } catch (error) {
            console.error("Get ETH Balance: ", error);
            return 0;
        }
    } else {
        return 0
    }
}

// @ts-ignore
export const getERC20Balance = async (contractInfo: any, address: string) => {
    web3 = store.getState().wallet.web3;
    if (web3.currentProvider) {
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo.contractAddress, {});
            try {
                const balance = await contract.methods.balanceOf(address).call();
                var balanceInWei = web3.utils.fromWei(balance, 'ether');
                return balanceInWei
            } catch (error) {
                console.error("Get ECR20 Balance: ", error);
                return 0;
            }
        }
    } else {
        return 0
    }
}

// @ts-ignore
export const getPriceFeed = async (contractName: any, decimal: number): Promise<number> => {
    web3 = store.getState().wallet.web3;
    const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.PRICE_FEED)
    if (web3.currentProvider) {
        if (contractInfo) {

            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress);

            try {

                const price = await contract.methods.viewLatestPrice(contractName).call();
                return price;
            } catch (error) {
                return 0;
            }
        }
    }
    else return 0;
}





