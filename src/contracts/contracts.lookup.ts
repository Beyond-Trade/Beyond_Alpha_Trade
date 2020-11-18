import {BtcAbi} from "./abi/btc.abi";
import {SyntheticCategories} from "./constants/synthetic.enum";
import {WeenusAbi} from "./abi/weenus.abi";
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
        contractName: ERC20Contracts.WEENUS,
        contractAddress: "0xaFF4481D10270F50f203E0763e2597776068CBc5",
        contractTokenName: "weenus",
        contractAbi: WeenusAbi,
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