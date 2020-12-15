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
        contractAddress: "0x4Ac4A21815487d59A1404E7b0aCC89625a8A2bDF",
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
        contractAddress: "0x15c4DF037BCF0286aFE4b32f97719bE520175dC5",
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
        contractAddress: "0x016B099265F7Be571e569e9af38005DA68845880",
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
        contractAddress: "0xfD409Ad01b51F3420ad9c81fc0AaB700aa0bB6b8",
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
        contractAddress: "0x535DD223eE35E26dE3a3C080ebf02693a0df20B6",
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
        contractAddress: "0x3178672edd64da1D8b239d5baA0dE3389EBA8e2e",
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
        contractAddress: "0xaa717b534870a06A17d07cc8130B78c44Df8270A",
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
        contractAddress: "0xaa97B0197Ec52Ec8053bea9dcDAC893C6AA98edD",
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
        contractAddress: "0xa65681BbF6729De37a8C404DaaE14F83192660b1",
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
        contractAddress: "0xfd65FB8C8AEff161b686bD7F75Ee2e5FaA3958CD",
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
        contractAddress: "0xd966ca258465201e0cF0B43a5A30424cE62c5ABa",
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