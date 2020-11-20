import Web3 from 'web3';


import { ERC20Contracts } from "../contracts/constants/contracts";
import { store } from '../App';
import { saveBalanceInfoAction } from '../store/actions/WalletActions';
import { Balance } from '../store/types/WalletState';
import { ContractLookup } from '../contracts/contracts.lookup';
import { SyntheticCategories } from '../contracts/constants/synthetic.enum';

let web3: Web3 = new Web3();




export const buyBYNToken = async (address:string, amount?: string) => {
    // @ts-ignore
    amount = web3.utils.toWei(amount, 'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND)
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from:address });
            try {
                const tx = await web3.eth.sendTransaction({
                    from: address,
                    to: contractInfo.contractAddress,
                    value: amount as unknown as string,
                    data: contract.methods.buyTokens().encodeABI()
                })
                return tx;
            } catch (error) {
                return error;
            }
        }

    }
    else
        return null;
}




