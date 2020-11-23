import { Web3Wrapper } from '@0x/web3-wrapper';
import { parseInt } from 'lodash';
import Web3 from 'web3';
import { store } from '../App';
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from '../contracts/contracts.lookup';
import BigNumber from 'bignumber.js'
let web3: Web3 = new Web3();


//For transer of ether 
// @ts-ignore
export const transferEther = async (toAddress: string, amount:  number | BigNumber, gas: any) => {
    web3 = store.getState().wallet.web3;

    if (web3.currentProvider) {
        let walletInfo = store.getState().wallet;

        let activeAddress = walletInfo.selected.address;
        // amount = amount * Math.pow(10,18);
        // amount = Web3Wrapper.toWei(amount.toString())
        amount = Web3Wrapper.toWei(new BigNumber(amount))
       
        debugger

        // @ts-ignore
        const tx = await web3.eth.sendTransaction({ from: activeAddress.toString(), to: toAddress, value: amount.toString(), gasPrice: gas });
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
    //let amountToSend = parseInt(amount) * Math.pow(10,18);
    let amountWei = Web3.utils.toWei(amount, 'ether');
    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === erc20ContractName)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            debugger
         
            const tx = await contract.methods.transfer(to, amountWei).send({ gasPrice: gas });
            return tx;
        }
    }
    else return null;
}


