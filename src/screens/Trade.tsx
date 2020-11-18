import React from 'react';
import PairSelection from '../components/molecules/trade/PairSelection';

function Trade() {
    return (
        <div className="px-20">
            <div className="flex mt-8">
                <PairSelection />
            </div>
        </div>
    )
}

export default Trade