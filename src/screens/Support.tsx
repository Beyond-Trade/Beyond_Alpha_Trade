import DisclaimerBanner from "../components/atomic/disclaimer/DisclaimerBanner";
import FAQChip from "../components/atomic/stake/FAQChip";
import PrivacyPolicyBanner from "../components/atomic/privacyPolicy/PrivacyPolicyBanner";
import React, { useEffect } from "react";
import SupportBanner from "../components/atomic/support/SupportBanner";
function Support() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <SupportBanner />
      <div className=" px-20 py-12">
        <h1 className="xl:text-2xl xxl:text-4xl xl:pt-4 xxl:pt-8 font-bold text-customBlack-500">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h1>
        <p className="xl:text-xxs xxl:text-lg py-6 mt-3 text-customBlack-500">
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
        <h2 className="font-bold mt-12 xl:text-xl xxl:text-3xl text-customBlack-500">
          Didn't find an answer?
        </h2>
        <p className="xl:text-xs xxl:text-lg my-6 text-customBlack-500">
          If you did not find an answer to your question you can always contact
          us.
        </p>
        <button className="focus:outline-none rounded bg-blue-1000 hover:bg-blue-400 mt-4 px-4 py-2 text-white xxl:text-lg xl:text-xs">
          Contact Us
        </button>
      </div>
    </div>
  );
}
export default Support;
