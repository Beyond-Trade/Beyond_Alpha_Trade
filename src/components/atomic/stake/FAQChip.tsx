import React from 'react';

function FAQChip() {
    return (
        <div className="rounded flex justify-between p-3 bg-white mt-2 shadow">
            <h5 className="text-xs font-medium">Lorem Ipsum is simply dummy text of the printing?</h5>
            <button className="focus:outline-none"><img src="assets/Icons/collapsible-plus.svg" /></button>
        </div>
    )
}

export default FAQChip