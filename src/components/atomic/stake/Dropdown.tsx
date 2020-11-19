import * as React from "react";

function Dropdown() {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0)
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const select = (i:number) => {
      hide()
      setIndex(i)
  }
  const data = ["ETH", "BYN"]
  return (
    <div className="relative" onMouseOver={show} onMouseLeave={hide}>
      <button className="focus:outline-none text-gray-600 text-xs font-medium flex items-center border-r pr-4 border-gray-500">
        {data[index]}
        <img src="assets/Icons/arrow-down.svg" className="ml-1 w-2" />
      </button>
      {visible && (
        <div className="absolute text-gray-600 text-xs font-medium bg-white shadow">
          {data.map((item, i) => (
            <button className="focus:outline-none py-2 px-4 hover:bg-gray-200" onClick={()=>select(i)}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
