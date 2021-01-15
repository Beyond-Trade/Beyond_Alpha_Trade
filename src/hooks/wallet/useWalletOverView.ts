import { useEffect, useState } from "react";

import { Balance } from "../../store/types/WalletState";
import { RootState } from "../../store/reducers/Index";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentCRatioAction, SetTargetCRatioAction } from "../../store/actions/WalletActions";
import { checkUserCollateralProx, getExchangeProxDetails } from "../../services/wallet.service";

const UseWalletOverView = () => {
    const { balances} = useSelector((state: RootState) => state.wallet);
    const dispatch=useDispatch()
  useEffect(()=>{
    
    getExchangeProxDetails().then((res)=>{
        dispatch(SetTargetCRatioAction(res?._collatteralRatio))
    }).catch((e)=>{})

    checkUserCollateralProx().then((res)=>{
        dispatch(SetCurrentCRatioAction(res?.collatteralRatioUpdated))
    }).catch((e)=>{})
    // SetCurrentCRatioAction()
  },[balances])
};

export default UseWalletOverView;
