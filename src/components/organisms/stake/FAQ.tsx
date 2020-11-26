import FAQChip from "../../atomic/stake/FAQChip";
import React from "react";

function FAQ() {
  return (
    <div className="bg-customGray-100 px-20 py-12">
      <h1 className="xl:text-2xl xxl:text-4xl xl:pt-4 xxl:pt-8 font-bold">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h1>
      <p className="xl:text-xxs xxl:text-lg py-6 mt-3 ">
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
      <h2 className="font-bold mt-12 xl:text-xl xxl:text-3xl">
        Didn't find an answer?
      </h2>
      <p className="xl:text-xs xxl:text-lg my-6">
        If you did not find an answer to your question you can always contact
        us.
      </p>
      <button className="focus:outline-none rounded bg-blue-500 hover:bg-blue-1000 mt-4 px-4 py-2 text-white xxl:text-lg xl:text-xs">
        Contact Us
      </button>
    </div>
  );
}

export default FAQ;
