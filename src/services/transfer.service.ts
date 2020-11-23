import { Web3Wrapper } from '@0x/web3-wrapper';
import Web3 from 'web3';
import { store } from '../App';
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from '../contracts/contracts.lookup';
let web3: Web3 = new Web3();


//For transer of ether 
// @ts-ignore
export const transferEther = async (to: string, amount: any, gas: any) => {
    debugger
    if (web3.currentProvider) {
        let from = localStorage.getWalletAddress();

        amount = Web3Wrapper.toWei(amount.toString())


            // @ts-ignore
            const tx = await web3.eth.sendTransaction({ from: from.toString(), to: to, value: amount, gasPrice: gas });
            debugger
            return tx;

    }
    else return null;
}

//For transfer of tokens
// @ts-ignore
export const transferERC20 = async (to: string, amount: string, erc20ContractName: ERC20Contracts, gas: any) => {

    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    amount = Web3.utils.toWei(amount, 'ether');
    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === erc20ContractName)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });

                const tx = await contract.methods.transfer(to, amount.toString()).send({ gasPrice: gas });
                return tx;

        }
    }
    else return null;
}


