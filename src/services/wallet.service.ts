import { Web3Wrapper } from '@0x/web3-wrapper';
import { providerUtils } from '@0x/utils';
import WalletLink from 'walletlink'
import { providers } from 'ethers';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import BigNumber from 'bignumber.js'

import WalletConnectProvider from "@walletconnect/web3-provider";
import {
    APP_NAME,
    CHAIN_ID,
    ETH_JSONRPC_URL,
    FORTMATIC_APP_ID,
    INFURA_ID,
    locaStorageConstants,
    NETWORK_ID,
    NETWORK_NAME,
    PORTIS_APP_ID,
    Wallet
} from '../constants';
//import { notification } from 'antd';
import { LocalStorage } from '../local_storage';
import { ContractLookup } from "../contracts/contracts.lookup";
import { ERC20Contracts } from "../contracts/constants/contracts";

let web3Wrapper: Web3Wrapper | null = null;
const web3: Web3 = new Web3();
const localStorage = new LocalStorage(window.localStorage);
// @ts-ignore
export const initializeWeb3 = async (wallet: Wallet): Promise<Web3> => {
    switch (wallet) {
        case Wallet.Portis:
            await initPortis();
            break;
        case Wallet.Metamask:
            await initMetamask();
            break;
            // case Wallet.Torus:
            //     web3Wrapper = await initTorus();
            break;
        case Wallet.Fortmatic:
            await initFortmatic();
            break;
            // case Wallet.Enjin:
            //     web3Wrapper = await initEnjin();
            break;
        case Wallet.WalletConnect:
            await initWalletConnect();
            break;
        case Wallet.Coinbase:
            await initCoinbase();
            break;
            // case Wallet.Trust:
            //     web3Wrapper = await initTrustWallet(wallet);
            //     break;
            // case Wallet.Cipher:
            //     web3Wrapper = await initProviderWallet(wallet);
            break;
        default:
            break;
    }
    console.log("--------------web3", web3.currentProvider);
    if (web3.currentProvider) {
        // push to local storage
        const accounts = await web3.eth.getAccounts();
        var EthBalance = await getWalletBalance();
        var BYNBalance = await getAddressBalanceForERC20(ERC20Contracts.BEYOND, accounts[0]);
        await local_storage_action(locaStorageConstants.addAddress, { address: accounts[0], wallet, EthBalance, BYNBalance })
        return web3;
    } else {
        // return null;
    }
};
// @ts-ignore
export const initPortis = async (): Promise<Web3> => {
    const { location } = window;
    if (!PORTIS_APP_ID) {
        // return null;
    }
    try {
        const Portis = await import('@portis/web3');
        console.log(PORTIS_APP_ID, 'netwrok ', NETWORK_NAME);
        const portis = new Portis.default(PORTIS_APP_ID, NETWORK_NAME.toLowerCase());
        console.log(portis);
        web3.setProvider(portis.provider);
        const [account] = await web3.eth.getAccounts();
        portis.onLogout(() => {
            localStorage.resetWalletConnected();
            location.reload();
        });
        portis.onLogin(() => {
            localStorage.saveWalletConnected(Wallet.Portis);
            localStorage.saveWalletConnected(Wallet.Portis);
            //@ts-ignore
            // document.getElementById('waa').innerHTML = 'Connected wallet is ' + localStorage.getWalletConnected();
            location.reload();
        });
        if (account) {
            localStorage.saveWalletConnected(Wallet.Portis);
            return web3;
        }
    } catch (error) {
        // return null;
    }
};
// @ts-ignore
export const initFortmatic = async (): Promise<Web3> => {
    if (FORTMATIC_APP_ID) {

        // @ts-ignore - no typings
        const Fortmatic = await import('fortmatic');
        const fm =
            NETWORK_ID === 1
                ? new Fortmatic.default(FORTMATIC_APP_ID)
                : new Fortmatic.default(FORTMATIC_APP_ID, NETWORK_NAME.toLowerCase());

        const provider = await fm.getProvider()
        // @ts-ignore
        web3.setProvider(provider);
        let isUserLoggedIn = await fm.user.isLoggedIn();
        // user is already logged
        if (isUserLoggedIn) {
            return web3;
        } else {
            await fm.user.login();
            isUserLoggedIn = await fm.user.isLoggedIn();
            if (isUserLoggedIn) {
                localStorage.saveWalletConnected(Wallet.Fortmatic);
                return web3;
            }
        }
    }
};
// @ts-ignore
export const initCoinbase = async (): Promise<Web3> => {
    //@ts-ignore
    if (window.web3) {
        // @ts-ignore
        const provider = providerUtils.standardizeOrThrow(window.web3.currentProvider);
        if (provider) {
            try {
                const walletLink = new WalletLink({
                    appName: APP_NAME,
                    appLogoUrl: APP_NAME,
                });
                const eth = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID);
                const provider = new providers.Web3Provider(eth);
                // @ts-ignore
                web3.setProvider(provider);
                console.log("web3wrapper   ", web3Wrapper);
                eth.enable().then((accounts: string[]) => {
                    console.log(`User's address is ${accounts[0]}`)
                    web3.eth.defaultAccount = accounts[0]
                })

                const address = await web3.eth.getAccounts();
                localStorage.saveWalletConnected(Wallet.Coinbase);
                return web3;
            } catch (error) {
                // The user denied account access

            }
        } else {
            localStorage.resetWalletConnected();
        }
    } else {
        localStorage.resetWalletConnected();
        //  The user does not have metamask installed
        // return null;
    }
};
export const initWalletConnect = async (): Promise<Web3> => {
    const { location } = window;
    // const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;

    const provider = new WalletConnectProvider({ infuraId: INFURA_ID });
    try {
        const res = await provider.enable();
        console.log(res)
        localStorage.saveWalletConnected(Wallet.WalletConnect);
    } catch {
        localStorage.resetWalletConnected();
        location.reload();
    }

    // @ts-ignore
    web3.setProvider(provider);

    // Subscribe to accounts change
    provider.on('accountsChanged', (accounts: string[]) => {
        location.reload();
    });

    // Subscribe to chainId change
    provider.on('chainChanged', (chainId: number) => {
        location.reload();
    });

    // Subscribe to networkId change
    provider.on('networkChanged', (networkId: number) => {
        location.reload();
    });

    // Subscribe to session connection/open
    provider.on('open', () => {
        localStorage.saveWalletConnected(Wallet.WalletConnect);
    });

    // Subscribe to session disconnection/close
    provider.on('close', (code: number, reason: string) => {
        deleteWeb3Wrapper();
        localStorage.resetWalletConnected();
        location.reload();
    });

    return web3;
};
// @ts-ignore
export const initMetamask = async (): Promise<Web3> => {
    //@ts-ignore
    const provider = await detectEthereumProvider();

    if (provider) {
        try {
            // @ts-ignore
            web3.setProvider(provider);
            // Request account access if needed
            // @ts-ignore
            // await provider.request('eth_requestAccounts')
            await provider.enable()
            // Subscriptions register
            //@ts-ignore
            provider.on('accountsChanged', async (accounts: []) => {
                // Reload to avoid MetaMask bug: "MetaMask - RPC Error: Internal JSON-RPC"
                window.location.reload();
            });
            //@ts-ignore
            provider.on('chainChanged', async (network: number) => {
                window.location.reload();
            });
            localStorage.saveWalletConnected(Wallet.Metamask);
            return web3;
        } catch (error) {
            // The user denied account access
        }
    } else {
        // @ts-ignore
        if (window.web3) {
            console.log("----------------curr provider ", web3);
            // @ts-ignore
            web3.setProvider(window.web3.currentProvider);
            return web3;
        } else {
            console.log("---------------null ", web3);
            localStorage.resetWalletConnected();
            //  The user does not have metamask installed
        }
    }
};
export const deleteWeb3Wrapper = (): void => {
    web3Wrapper = null;
};

export const deleteWeb3 = (): void => {
    // web3 = null;
};
export const disconnectWallet = async (): Promise<void> => {
    console.log("1")
    // const web3Wrapper = getWeb3Wrapper();
    console.log("2", web3Wrapper);
    // @ts-ignore
    const provider = web3.currentProvider;
    console.log("3", provider);
    localStorage.resetWalletConnected();

    // @ts-ignore
    await provider.close();
}
export const getWeb3 = async (): Promise<Web3> => {
    while (!web3) {
        // if web3Wrapper is not set yet, wait and retry
        await sleep(100);
    }

    return web3;
};
export const sleep = (timeout: number) => new Promise<void>(resolve => setTimeout(resolve, timeout));
export const local_storage_action = async (action: Number, payload: any) => {
    switch (action) {
        case locaStorageConstants.default:
            await initializeWeb3(localStorage.getWalletConnected() as Wallet)
            break;
        case locaStorageConstants.saveAddress:
            localStorage.saveWalletAddress(payload.address);
            break;

        case locaStorageConstants.getAddress:
            return localStorage.getWalletAddress();
            break;
        case locaStorageConstants.getWalletConnected:
            return localStorage.getWalletConnected();
            break;
        case locaStorageConstants.addAddress:
            return localStorage.pushWallet(payload);
            break;
        case locaStorageConstants.getAllWallets:
            return localStorage.getWallets();
            break;

        default:
            break;
    }
}

// @ts-ignore
export const transferAmount = async (to: string, amount: number | BigNumber) => {
    if (web3.currentProvider) {
        let from = localStorage.getWalletAddress();

        // Web3Wrapper.toWei(amount);
        amount = Web3Wrapper.toWei(new BigNumber(amount))



        try {
            // @ts-ignore
            const tx = await web3.eth.sendTransaction({ from: from.toString(), to: to, value: amount });
            return tx;
        } catch (error) {
            console.error("Transfer ETH Balance: ", error);
            return error;
        }
    }
    else return null;
}

// @ts-ignore
export const transferERC20 = async (to: string, amount: string, erc20ContractName: ERC20Contracts) => {

    let from = localStorage.getWalletAddress() as string;
    console.log("amount to transfer in byn is -------------------- ", amount);
    amount = Web3.utils.toWei(amount, 'ether');
    console.log("amount to transfer in byn is 2 -------------------- ", web3.utils.toBN(amount));
    if (web3.currentProvider) {
        console.log("amount to transfer in byn is 3 -------------------- ", amount);
        const contractInfo = ContractLookup.find(contract => contract.contractName === erc20ContractName)
        console.log("amount to transfer in byn is 4 -------------------- ", amount);
        if (contractInfo) {
            console.log("amount to transfer in byn is 5 -------------------- ", amount);
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from });
            // const tx = await web3.eth.sendTransaction({
            // from: from.toString(),
            // to: contractInfo.contractAddress,
            // data: contract.methods.transfer(to, 5).encodeABI()
            // })
            console.log("amount to transfer in byn is 2 -------------------- ", amount);
            try {
                const tx = await contract.methods.transfer(to, amount.toString()).send();
                return tx;
            } catch (error) {
                console.error("Transfer ECR20: ", error);
                return error;
            }


        }
    }
    else return null;
}
// @ts-ignore
export const getWalletBalance = async () => {
    // @ts-ignore
    if (web3.currentProvider) {

        try {
            const accounts = await web3.eth.getAccounts();
            // @ts-ignore
            var balanceInWei = await web3.eth.getBalance(accounts[0])
            // console.log("balance is ==== ", balanceInWei);

            balanceInWei = Web3.utils.fromWei(balanceInWei, 'ether')
            // console.log("balance is ==== ", balanceInWei);
            return Number(balanceInWei);
        } catch (error) {
            console.error("Get ECR20 Balance: ", error);
            return error;
        }
    } else {
        return 0
    }
}

// @ts-ignore
// export const openNotificationWithIcon = (type: any, title: any, description: any) => {
//     //@ts-ignore
//     notification[type]({
//         message: title,
//         description: description
//     });
// };

// @ts-ignore
export const getAddressEtherBalance = async (address) => {
    // @ts-ignore
    if (web3.currentProvider) {
        // @ts-ignore

        try {
            var balanceInWei = await web3.eth.getBalance(address);
            // console.log("address balance is ==== ", balanceInWei);
            balanceInWei = web3.utils.fromWei(balanceInWei, 'ether');
            return Number(balanceInWei);
        } catch (error) {
            console.error("Get Eth Address: ", error);
            return error;
        }
    } else {
        return -1
    }
}

// @ts-ignore
export const getAddressBalanceForERC20 = async (erc20ContractName: ERC20Contracts, address: string) => {

    let from = localStorage.getWalletAddress() as string;
    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === erc20ContractName)
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo.contractAddress, { from });
            try {
                const balance = await contract.methods.balanceOf(address).call();
                var balanceInWei = web3.utils.fromWei(balance, 'ether');

                console.log(balanceInWei);
                return balanceInWei
            } catch (error) {
                console.error("Get ECR20 Balance: ", error);
                return error;
            }
        }

    } else {
        return -1
    }
}

// @ts-ignore
export const buyBYNToken = async (amount?: string) => {

    let from = localStorage.getWalletAddress() as string;

    // @ts-ignore
    amount = web3.utils.toWei(amount,'ether');

    if (web3.currentProvider) {
        const contractInfo = ContractLookup.find(contract => contract.contractName === ERC20Contracts.BEYOND)
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo?.contractAddress, { from });
            try {
                const tx = await web3.eth.sendTransaction({
                    from: from.toString(),
                    to: contractInfo.contractAddress,
                    value: amount as unknown as string,
                    data: contract.methods.buyTokens().encodeABI()
                })
                console.log(tx);
                return tx;
            } catch (error) {
                console.error("buy ECR20: ", error);
                return error;
            }
        }

    }
    else
        return null;
}

