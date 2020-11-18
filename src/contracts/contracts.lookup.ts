import {BtcAbi} from "./abi/btc.abi";
import {SyntheticCategories} from "./constants/synthetic.enum";
import {bUSDAbi} from "./abi/weenus.abi";
import {ERC20Contracts} from "./constants/contracts";
import {BeyondAbi} from "./abi/beyond.abi";

export const ContractLookup = [
    {
        contractName: ERC20Contracts.BITCOIN,
        contractAddress: "0x8654890655",
        contractTokenName: "btc",
        contractAbi: BtcAbi,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
    {
        contractName: ERC20Contracts.BUSD,
        contractAddress: "0x09874C7705598a43999Ac84c487ACA9cE08AB50C",
        contractTokenName: "bUSD",
        contractAbi: bUSDAbi,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    },
    {
        contractName: ERC20Contracts.BEYOND,
        contractAddress: "0x6c504DBF4D340dEbA4bc582aedEc0A58682F9578",
        contractTokenName: "Beyond",
        contractAbi: BeyondAbi,
        isNativeToken: false,
        isMainToken: true, // only for BYN,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY
    }
]