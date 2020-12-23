import { BTCbAbi } from "./abi/btcb.abi";
import { ETHbAbi } from "./abi/ethb.abi";
import { OILbAbi } from "./abi/oilb.abi";
import { GBPbAbi } from "./abi/gbpb.abi";
import { EURbAbi } from "./abi/eurb.abi";
import { SyntheticCategories } from "./constants/synthetic.enum";
import { WeenusAbi } from "./abi/weenus.abi";
import { ERC20Contracts } from "./constants/contracts";
import { BeyondAbi } from "./abi/beyond.abi";
import { BeyondExchangeAbi } from "./abi/beyondExchange.abi";
import { BeyondExProxAbi } from "./abi/beyondExProx.abi";
import { PriceFeedAbi } from "./abi/priceFeed";

import * as icons from "../utils/coinIcons";
import { AbiItem } from 'web3-utils'
import { USDbAbi } from "./abi/Usdb.abi";
import { LoanAbi } from "./abi/loan.abi";



export interface IContractLookup {
    contractName: string,
    contractAddress:string,
    marketRateApiID: string,
    oracleRateID:string,
    fullName: string,
    contractAbi: any,
    decimal:number,
    isSyntheticAsset:boolean,
    isNativeToken: boolean,
    isMainToken: boolean, // only for BYN,
    isFixedRate:boolean,
    fixedRateValue:number,
    syntheticCategory: any, 
    icon:string
}


export const ContractLookup:IContractLookup[] = [
    {
        contractName: ERC20Contracts.ETH,
        contractAddress: "",
        marketRateApiID: "ethereum",
        oracleRateID: "sETH",
        fullName: "Ethereum",
        contractAbi: '',
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: true,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
        icon:icons.iconETH
    }, 
    {
        contractName: ERC20Contracts.BEYOND,
        contractAddress: "0x2C955b35c35931A2C62438F385065C7CF3dEa5CB",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Beyond",
        decimal:18,
        contractAbi: BeyondAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: true, // only for BYN,
        isFixedRate:true,
        fixedRateValue:0.5,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconBEYOND
    }, 
    {
        contractName: ERC20Contracts.BTCb,
        contractAddress: "0x2292240aB72fc9cB6B56729E9d70C6D56555c9A9",
        marketRateApiID: "bitcoin",
        oracleRateID: "sBTC",
        fullName: "Bitcoin",
        contractAbi: BTCbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
        icon:icons.iconBTCb
    },  
    {
        contractName: ERC20Contracts.ETHb,
        contractAddress: "0xD352c2B2A7D79975059a59658e090709Bd7b0983",
        marketRateApiID: "ethereum",
        oracleRateID: "sETH",
        fullName: "Ethereum",
        contractAbi: ETHbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
        icon:icons.iconETHb
    },
    {
        contractName: ERC20Contracts.OILb,
        contractAddress: "0xcEda6d298e4E27A2f3BB06f69bdAF7c7dEB6Eeb4",
        marketRateApiID: "OIL",
        oracleRateID: "sOIL",
        fullName: "OIL",
        contractAbi: OILbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.COMMODITIES, 
        icon:icons.iconOILb
    }, 
    {
        contractName: ERC20Contracts.GBPb,
        contractAddress: "0x19d9bf0D94B839e359957275e5B3101f4bD8e755",
        marketRateApiID: "gbp",
        oracleRateID: "sGBP",
        fullName: "Great britain Pound",
        contractAbi: GBPbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.FOREX, 
        icon:icons.iconGBPb
    }, 
    {
        contractName: ERC20Contracts.EURb,
        contractAddress: "0x89a81Bf68CA9c775C92a91f0AC1a45d3708c1EB9",
        marketRateApiID: "Euro",
        oracleRateID: "sEUR",
        fullName: "Euro",
        contractAbi: EURbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.FOREX, 
        icon:icons.iconEURb
    },
    {
        contractName: ERC20Contracts.USDb,
        contractAddress: "0xBE4988631F3a4fF69B7AcB9410dC42CFBC910093",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "USDb",
        contractAbi: USDbAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:true,
        fixedRateValue:1,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconUSDb
    },
    
    {
        contractName: ERC20Contracts.PRICE_FEED,
        contractAddress: "0x3840021D3DF5026ede1fd66eE6229b23ec67165c",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "PriceFeed",
        decimal:18,
        contractAbi: PriceFeedAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconUSDb
    },
    {
        contractName: ERC20Contracts.BEYOND_EXCHANGE,
        contractAddress: "0xd342d1FB711e056ACaDe2E4EBF14Bc8FE2952174",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "beyondExchange",
        decimal:18,
        contractAbi: BeyondExchangeAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.BEYOND_EX_PROX,
        contractAddress: "0x3f1414E43939f61437CBEAcAd32d2E96A738a353",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "beyondExProx",
        decimal:18,
        contractAbi: BeyondExProxAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.LOAN,
        contractAddress: "0xb441A09C3a11c1e9B4B657AA4f1Fdb804B1d5A57",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "loan",
        decimal:18,
        contractAbi: LoanAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    }
]