import DisclaimerBanner from "../components/atomic/disclaimer/DisclaimerBanner";
import FAQChip from "../components/atomic/stake/FAQChip";
import PrivacyPolicyBanner from "../components/atomic/privacyPolicy/PrivacyPolicyBanner";
import React from "react";
import SupportBanner from "../components/atomic/support/SupportBanner";
function Support() {
  return (
    <div>
      <SupportBanner />
      <div className="px-20 py-12">
        <h2 className="text-lg font-bold">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
        <p className="text-xxs mt-6">
          We always appreciate if you take a minute to look at the most common
          questions.
        </p>
        <div className="xl:flex lg:flex xl:px-20 lg:px-20 md:px-20 mt-4">
          <div className="w-full xl:mr-2 lg:mr-2">
            <FAQChip />
            <FAQChip />
            <FAQChip />
            <FAQChip />
            <FAQChip />
          </div>
          <div className="w-full xl:ml-2 lg:ml-2">
            <FAQChip />
            <FAQChip />
            <FAQChip />
            <FAQChip />
            <FAQChip />
          </div>
        </div>
        <h2 className="font-bold mt-12">Didn't find an answer?</h2>
        <p className="text-xxs mt-6">
          If you did not find an answer to your question you can always contact
          us.
        </p>
        <button className="focus:outline-none rounded bg-blue-500 hover:bg-blue-400 mt-4 px-4 py-2 text-white text-xxs">
          Contact Us
        </button>
      </div>
    </div>
  );
}
export default Support;
