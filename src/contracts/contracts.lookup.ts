import { BtcAbi } from "./abi/btc.abi";
import { SyntheticCategories } from "./constants/synthetic.enum";
import { WeenusAbi } from "./abi/weenus.abi";
import { ERC20Contracts } from "./constants/contracts";
import { BeyondAbi } from "./abi/beyond.abi";
import { BeyondExchangeAbi } from "./abi/beyondExchange.abi";
import { USDb } from "./abi/Usdb.abi";
import { PRICEFEED } from "./abi/priceFeed";

export const ContractLookup = [
    {
        contractName: ERC20Contracts.BTC,
        contractAddress: "0xaFF4481D10270F50f203E0763e2597776068CBc5",
        fullName: "Bitcoin",
        contractAbi: BtcAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
    },  
    {
        contractName: ERC20Contracts.ETHb,
        contractAddress: "0xaFF4481D10270F50f203E0763e2597776068CBc5",
        fullName: "Ethereum",
        contractAbi: BtcAbi,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
    },  
    {
        contractName: ERC20Contracts.USDB,
        contractAddress: "0x09874C7705598a43999Ac84c487ACA9cE08AB50C",
        fullName: "USDb",
        contractAbi: USDb,
        decimal:18,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
    {
        contractName: ERC20Contracts.PRICE_FEED,
        contractAddress: "0x411ae0bbb51aF95f5E41D9e79228B78497d18648",
        fullName: "PriceFeed",
        decimal:18,
        contractAbi: PRICEFEED,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
    {
        contractName: ERC20Contracts.BEYOND,
        contractAddress: "0xC9869c7D380FD0272282fA7B7Fe26deF2f991332",
        fullName: "Beyond",
        decimal:18,
        contractAbi: BeyondAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: true, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
    {
        contractName: ERC20Contracts.BEYOND_EXCHANGE,
        contractAddress: "0x057127BA6E64B166fE22b1ea213Db04473725eef",
        fullName: "beyondExchange",
        decimal:18,
        contractAbi: BeyondExchangeAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
]