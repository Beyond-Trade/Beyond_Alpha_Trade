import FAQChip from "../../atomic/stake/FAQChip";
import React from "react";
import { useHistory } from "react-router-dom";
import GeneralButton from "../../atomic/GeneralButton";

function FAQ() {
  const history = useHistory();
  return (
    <div className="px-20 py-12">
      <h1 className="text-2xl xxl:text-4xl xl:pt-4 xxl:pt-8 font-bold text-customBlack-500">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h1>
      <p className="text-xs font-bold xxl:text-lg py-6 mt-3 text-customBlack-500">
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
      <div className="flex">
<div>
<h2 className="font-bold mt-12 text-xl xxl:text-3xl text-customBlack-500">
        Didn't find an answer?
      </h2>
      <p className="text-xs font-bold xxl:text-lg my-6 text-customBlack-500">
        If you did not find an answer to your question you can always contact
        us.
      </p>
      <GeneralButton
              submitting={false}
              submit={() => history.push("/contact_us")}
              textValue={"Contact Us"}
              otherClasses={"bg-customBlack-500 mt-4 px-4 py-2 xxl:text-lg text-xs"}
            />
</div>
{/* <div> <img
            src="/assets/Images/chatIllustration.svg"
            style={{ height: "270px" }}
            alt="img"
            className="m-auto ml-20 mt-10"
          /></div> */}
      </div>
     
    </div>
  );
}

export default FAQ;
