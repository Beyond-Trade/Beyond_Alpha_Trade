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
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });

            const tx = await contract.methods.buybUSD(amount).send({ gasPrice: gasPrice });
            return tx;

        }
    }
    else return null;

};


// @ts-ignore
export const getStackedByn = async (): Promise<any> => {

    let stack = {
        unstackedBYN: 0,
        stackedBYN: 0,
        totalBYN: 0
    };
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EX_PROX)
    if (web3.currentProvider) {
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress);
            try {
                const data = await contract.methods.getBYN(activeAddress).call();
                let bynContract = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND)
                // @ts-ignore
                stack.unstackedBYN = parseInt(data.unstackedBYN) / Math.pow(10, bynContract.decimal);
                // @ts-ignore
                stack.stackedBYN = parseInt(data.stackedBYN) / Math.pow(10, bynContract.decimal);
                // @ts-ignore
                stack.totalBYN = parseInt(data.totalBYN) / Math.pow(10, bynContract.decimal);

                debugger
                return stack;
            } catch (error) {
                return stack;
            }
        }
    }
    else return stack;
}

// @ts-ignore
export const checkUserCollatteral = async (): Promise<number> => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EX_PROX)
    if (web3.currentProvider) {
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress);
            try {
                const price = await contract.methods.checkUserCollatteral(activeAddress).call();
                return price;
            } catch (error) {
                return 0;
            }
        }
    }
    else return 0;
}
// @ts-ignore
export const collatteralRatio = async (): Promise<number> => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EX_PROX)
    if (web3.currentProvider) {
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress);
            try {
                const ratio = await contract.methods.collatteralRatio().call();
                return ratio;
            } catch (error) {
                return 0;
            }
        }
    }
    else return 0;
}
