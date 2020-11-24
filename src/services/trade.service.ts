import { Web3Wrapper } from "@0x/web3-wrapper";
import BigNumber from "bignumber.js";
import Web3 from "web3";
import { store } from "../App";
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from "../contracts/contracts.lookup";
let web3: Web3 = new Web3();

export const TradePairsLookup = [
  {
    marketCoin: ERC20Contracts.USDb,
    pairs: [
      {
        coin: ERC20Contracts.BTCb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.ETHb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.EURb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.GBPb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.OILb,
        rate: 0,
      },
    ],
  },
  {
    marketCoin: ERC20Contracts.BTCb,
    pairs: [
      {
        coin: ERC20Contracts.ETHb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.EURb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.GBPb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.OILb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.USDb,
        rate: 0,
      },
    ],
  },
  {
    marketCoin: ERC20Contracts.ETHb,
    pairs: [
      {
        coin: ERC20Contracts.BTCb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.BEYOND,
        rate: 0,
      },
      {
        coin: ERC20Contracts.EURb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.GBPb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.OILb,
        rate: 0,
      },
      {
        coin: ERC20Contracts.USDb,
        rate: 0,
      },
    ],
  },
];

export const addTrade = async (from: string, to: string, amount: number, gasFee: number) => {
  if (from === ERC20Contracts.USDb) {
    const res = await mintSynth(to, amount, gasFee);
    return res;
  } else if ( from !== ERC20Contracts.USDb && to !== ERC20Contracts.USDb) {
    const res = await convertSynths(from, to, amount, gasFee)
    return res
  } else if (to === ERC20Contracts.USDb) {
    const res = await convertSynthsToUSD(from, amount, gasFee)
    return res
  }
}

// @ts-ignore
export const mintSynth = async (
  toSynth: string,
  amount: number,
  gasPrice: number
) => {
  web3 = store.getState().wallet.web3;
  let walletInfo = store.getState().wallet;

  let activeAddress = walletInfo.selected.address;

  if (web3.currentProvider) {
    const contractInfo = ContractLookup.find(
      (c) => c.contractName == ERC20Contracts.BEYOND_EXCHANGE
    );
    if (contractInfo) {
      const contract = new web3.eth.Contract(
        contractInfo.contractAbi,
        contractInfo.contractAddress,
        { from: activeAddress }
      );
// amount = amount * Math.pow(10, contractInfo.decimal);
      //let amountToSend =1000 * 1000000000000000000///= (amount * Math.pow(10, contractInfo.decimal)).toString();
      let amountToSend = Web3Wrapper.toWei(new BigNumber(amount))
      gasPrice = gasPrice * Math.pow(10, 9);
      // @ts-ignore
      debugger
      const tx = await contract.methods
        .mintSynth(toSynth, amountToSend)
        .send({ gasPrice: gasPrice });
      return tx;
    }
  } else return null;
};

export const convertSynths = async (
  from: string,
  to: string,
  amount: number,
  gasPrice: number
) => {
  debugger
  web3 = store.getState().wallet.web3;
  let walletInfo = store.getState().wallet;

  let activeAddress = walletInfo.selected.address;

  if (web3.currentProvider) {
    const contractInfo = ContractLookup.find(
      (c) => c.contractName == ERC20Contracts.BEYOND_EXCHANGE
    );
    if (contractInfo) {
      const contract = new web3.eth.Contract(
        contractInfo.contractAbi,
        contractInfo.contractAddress,
        { from: activeAddress }
      );
      amount = amount * Math.pow(10, contractInfo.decimal);
      gasPrice = gasPrice * Math.pow(10, 9);
      // @ts-ignore
      const tx = await contract.methods
        .convertSynths(from, to, amount.toString())
        .send({ gasPrice: gasPrice });
      return tx;
    }
  } else return null;
};


export const convertSynthsToUSD = async (
  from: string,
  amount: number,
  gasPrice: number
) => {
  web3 = store.getState().wallet.web3;
  let walletInfo = store.getState().wallet;

  let activeAddress = walletInfo.selected.address;

  if (web3.currentProvider) {
    const contractInfo = ContractLookup.find(
      (c) => c.contractName == ERC20Contracts.BEYOND_EXCHANGE
    );
    if (contractInfo) {
      const contract = new web3.eth.Contract(
        contractInfo.contractAbi,
        contractInfo.contractAddress,
        { from: activeAddress }
      );

      amount = amount * Math.pow(10, contractInfo.decimal);
      gasPrice = gasPrice * Math.pow(10, 9);
      // @ts-ignore
      const tx = await contract.methods
        .convertSynthsToUSD(from, amount.toString())
        .send({ gasPrice: gasPrice });
      return tx;
    }
  } else return null;
};