import React from 'react';
import FAQChip from '../../atomic/stake/FAQChip';

function FAQ() {
    return (
        <div className="bg-customGray-100 px-20 py-12">
            <h2 className="text-lg font-bold">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
            <p className="text-xxs mt-6">We always appreciate if you take a minute to look at the most common questions.</p>
            <div className="flex px-20 mt-4">
                <div className="w-full mr-2">
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                </div>
                <div className="w-full ml-2">
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                    <FAQChip />
                </div>
            </div>
            <h2 className="font-bold mt-12">Didn't find an answer?</h2>
            <p className="text-xxs mt-6">If you did not find an answer to your question you can always contact us.</p>
            <button className="focus:outline-none rounded bg-blue-500 hover:bg-blue-400 mt-4 px-4 py-2 text-white text-xxs">Contact Us</button>
        </div>
    )
}

export default FAQ