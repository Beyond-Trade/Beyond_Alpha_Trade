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
import { USDbAbi } from "./abi/Usdb.abi";
import * as icons from "../utils/coinIcons";
import { AbiItem } from 'web3-utils'


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
        contractAddress: "0xaC9f43Be5f3b7CdD03478f13B429DA5e156399C8",
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
        contractAddress: "0xee482F26d93A1C6A402f2F010cdAfC12EcFe429E",
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
        contractAddress: "0x575d28D9bfB056cB29ef49A201438448b755965B",
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
        contractAddress: "0xB4D1B06b12f09d2bB07129b0F2eD95A1A46A8c00",
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
        contractAddress: "0x6c5289168677f7978D9f727aB880030Df14B98C0",
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
        contractAddress: "0x4Cea0F30FD3cFd0a029E8f9D0EF43C7F424d5334",
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
        contractAddress: "0x44dE6196e76F0624863BcD2D69Dd525d10437bE9",
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
        contractAddress: "0xc8Aa560cd3179dCc7646bab4Ad80d66dEdf76d9F",
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
        contractAddress: "0xFC723dCfFa670D6C069E3A71e863371330655368",
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
        contractAddress: "0x83d061a39e1E3eAc554FeD8d8206FD4c320bbe9a",
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
    }
]