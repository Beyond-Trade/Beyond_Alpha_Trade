import Web3 from "web3";
import { store } from "../App";
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from "../contracts/contracts.lookup";
let web3: Web3 = new Web3();

export const mintERC20 = async (amount: number, /*erc20ContractName: ERC20Contracts,*/ gasPrice: any) => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
   
    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(c => c.contractName == ERC20Contracts.BEYOND_EXCHANGE);
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress,{from:activeAddress});

                const tx = await contract.methods.buybUSD(amount).send({ gasPrice: gasPrice });
                return tx;

        }
    }
    else return null;

};
