import React, { useState } from 'react';
import MidSectionTab from '../../atomic/stake/MidSectionTab';
import Burn from '../../molecules/stake/Burn';
import Mint from '../../molecules/stake/Mint';
import Rewards from '../../molecules/stake/Rewards';
import SwapByn from '../../molecules/stake/SwapByn';
import Transfer from '../../molecules/stake/Transfer';

function MidSection() {
    const [tabIndex, setTab] = useState(0)
    return (
        <div className="px-48 mt-12">
            <div className="flex justify-center">
                <MidSectionTab text="Swap BYN" onClick={()=>setTab(0)} active={tabIndex===0} />
                <MidSectionTab text="Mint" onClick={()=>setTab(1)} active={tabIndex===1} />
                <MidSectionTab text="Rewards" onClick={()=>setTab(2)} active={tabIndex===2} />
                <MidSectionTab text="Transfer" onClick={()=>setTab(3)} active={tabIndex===3} />
                <MidSectionTab text="Burn" onClick={()=>setTab(4)} active={tabIndex===4} />
            </div>
            {tabIndex===0 && <SwapByn />}
            {tabIndex===1 && <Mint />}
            {tabIndex===2 && <Rewards />}
            {tabIndex===3 && <Transfer />}
            {tabIndex===4 && <Burn />}
        </div>
    )
}

export default MidSection