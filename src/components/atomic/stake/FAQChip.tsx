import React, { useState } from "react";

function FAQChip({question,answer,faqNo}:any) {
  const [toggle, setToggle] = useState(false);
  const [activeFAQ,setActiveFAQ]=useState(0)
  const handleToggle = () => {
    setActiveFAQ(faqNo);
    setToggle((prev) => !prev)};
console.log(faqNo)
  return (
    <div className={`rounded p-3 bg-white mt-2 shadow border hover:shadow-custom hover:border-customBlack-550 ${toggle ?"border-customBlack-550":""}`}>
      <div className="flex justify-between">
        <h5 className="text-xs xxl:text-base font-medium">
          {question}
          {/* Lorem Ipsum is simply dummy text of the printing? */}
        </h5>
        <button className="focus:outline-none" onClick={handleToggle}>
          {toggle ? (
            <img src="/assets/Icons/collapsible-minus.svg" alt="img" />
          ) : (
            <img src="/assets/Icons/collapsible-plus.svg" alt="img" />
          )}
        </button>
      </div>
      {toggle && faqNo === activeFAQ ? (
        <div className="flex bg-gray-300 p-3 m-3 font-normal text-xs xxl:text-sm justify-content">
          {answer}
          {/* Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
          consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices
          nulla. Morbi blandit nec est vitae dictum. Etiam velectetur diam.
          Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet
          finibus. Sed eu nunc sit amet elit euismod faucibus. */}
        </div>
      ):null}
    </div>
  );
}

export default FAQChip;
