import { debug } from 'console';
import Web3 from 'web3';
import { store } from '../App';
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from '../contracts/contracts.lookup';
let web3: Web3 = new Web3();

export const loanDetails = async () => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;
    let activeAddress = walletInfo.selected.address;
    // @ts-ignore
    if (web3.currentProvider && activeAddress ) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo.contractAddress, { from: activeAddress });
            // @ts-ignore
            const tx = await contract.methods.getloanDetails(activeAddress).call()
            return tx;
        }
    }
    else
        return null;
}
// Interest Fee

// Loan Collat.ratio
export const loanCollatteralRatio = async () => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;
    let activeAddress = walletInfo.selected.address;
    // @ts-ignore
    if (web3.currentProvider && activeAddress ) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            // @ts-ignore
            const tx = await contract.methods.loanCollatteralRatio().call()
            return tx;
        }
    }
    else
        return null;
}
// no of open loans

// AND USDb SUPPLY
export const getLoanContractDetails = async () => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;
    let activeAddress = walletInfo.selected.address;
    // @ts-ignore
    if (web3.currentProvider && activeAddress ) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            // @ts-ignore
            const tx = await contract.methods.getLoanContractDetails().call()
            return tx;
        }
    }
    else
        return null;
}
//LOCKED ETH
export const getEthLocked = async () => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;
    let activeAddress = walletInfo.selected.address;
    // @ts-ignore
    if (web3.currentProvider && activeAddress ) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            // @ts-ignore
            const tx = await contract.methods.getEthLocked().call()
            return tx;
        }
    }
    else
        return null;
}

export const getLoan = async (amount: string,fee:any) => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    // @ts-ignore

    amount = web3.utils.toWei(amount, 'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            const gas = fee * Math.pow(10, 9);
            // const tx = await contract.methods.returnLoan().send({ gasPrice: gas });
            const tx = await web3.eth.sendTransaction({
                from: activeAddress,
                to: contractInfo.contractAddress,
                value: amount as unknown as string,
                data: contract.methods.getLoan().encodeABI(),
                gasPrice:gas
            })
            return tx;
        }
    }
    else
        return null;
}

export const getLoanUSDb = async (amount: string,fee:any) => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    // @ts-ignore

    amount = web3.utils.toWei(amount, 'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const gas = fee * Math.pow(10, 9);
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            const tx = await web3.eth.sendTransaction({
                from: activeAddress,
                to: contractInfo.contractAddress,
                value: amount as unknown as string,
                data: contract.methods.getLoanUSDb().encodeABI(),
                gasPrice:gas
            })
            return tx;
        }
    }
    else
        return null;
}

export const returnLoan = async (fee:any) => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    // @ts-ignore

    // amount = web3.utils.toWei(amount, 'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
          const gas = fee * Math.pow(10, 9);
         
            const tx = await contract.methods.returnLoan().send({ gasPrice: gas });
            // const tx = await web3.eth.sendTransaction({
            //     from: activeAddress,
            //     to: contractInfo.contractAddress,
            //     // value: amount as unknown as string,
            //     data: contract.methods.returnLoan().encodeABI()
            // })
            return tx;
        }
    }
    else
        return null;
}

export const returnLoanUSDb = async (fee:any) => {
    web3 = store.getState().wallet.web3;
    let walletInfo = store.getState().wallet;

    let activeAddress = walletInfo.selected.address;
    // @ts-ignore

    // amount = web3.utils.toWei(amount, 'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND_EXCHANGE)
        if (contractInfo) {
            // @ts-ignore
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from: activeAddress });
            const gas = fee * Math.pow(10, 9);
         
            const tx = await contract.methods.returnLoanUSDb().send({ gasPrice: gas });
            // const tx = await web3.eth.sendTransaction({
            //     from: activeAddress,
            //     to: contractInfo.contractAddress,
            //     // value: amount as unknown as string,
            //     data: contract.methods.returnLoanUSDb().encodeABI()
            // })
            return tx;
        }
    }
    else
        return null;
}

