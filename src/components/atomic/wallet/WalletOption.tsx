import React from "react";
import Web3 from "web3";
import { locaStorageConstants, Wallet } from "../../../constants";
import { initializeWeb3, local_storage_action } from "../../../services/wallet.service";
interface IProps {
  text: string;
  image: string;
  type: string;
}
function WalletOption(props: IProps) {
  var web3: Web3;
    const connectToWallet = async (value: any): Promise<any> => {
        // console.info("props is ", this.props);
        // props.startLoading(true);
        // handleCancel(null);
        web3 = await initializeWeb3(value);
        if (web3) {
            const accounts = await web3.eth.getAccounts();
            console.log("accounts is ---------------------------- ", accounts);
            const wallet = await local_storage_action(locaStorageConstants.getWalletConnected, {});
            if (accounts[0] != undefined) {
                await local_storage_action(locaStorageConstants.saveAddress, { address: accounts[0] });
                // alert("padggg g")
                // dispatch(getBalance(accounts[0]));
                // dispatch(ecr20TokenDetails(accounts[0]))
                // //@ts-ignore
                // setState({ connected: true, address: accounts[0], wallet: wallet.toString() });
               // setConnected(true);
                //setAddress(accounts[0]);
                //@ts-ignore
                console.log(allet.toString());
                // setWallet(wallet.toString());

            }
            // props.initialize();
        }
        else {
            //openNotificationWithIcon(notificationPrefix.Warning, notificationTitles.Transation, notificationMessages.messageTwo);

        }
    }
  return (
    <button className="focus:outline-none flex border border-blue-300 bg-blue-300 rounded w-full mt-3" onClick={() => { connectToWallet(props.type) }}>
      <div className="py-4 w-24 flex justify-center rounded-l">
        <img src={props.image} className="h-8" />
      </div>
      <div
        className="w-full flex justify-center bg-white rounded-r text-sm font-medium"
        style={{ paddingTop: "24px", paddingBottom: "24px" }}
      >
        {props.text}
      </div>
    </button>
  );
}

export default WalletOption;
