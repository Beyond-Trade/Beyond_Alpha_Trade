import React, { useState } from "react";

function FAQChip() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <div className="rounded p-3 bg-white mt-2 shadow">
      <div className="flex justify-between">
        <h5 className="text-xs font-medium">
          Lorem Ipsum is simply dummy text of the printing?
        </h5>
        <button className="focus:outline-none" onClick={handleToggle}>
          {toggle ? (
            <img src="assets/Icons/collapsible-minus.svg" alt="img" />
          ) : (
            <img src="assets/Icons/collapsible-plus.svg" alt="img" />
          )}
        </button>
      </div>
      {toggle && (
        <div className="flex bg-gray-300 p-3 m-3 text-xs justify-content">
          Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
          consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices
          nulla. Morbi blandit nec est vitae dictum. Etiam velectetur diam.
          Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet
          finibus. Sed eu nunc sit amet elit euismod faucibus.
        </div>
      )}
    </div>
  );
}

export default FAQChip;
