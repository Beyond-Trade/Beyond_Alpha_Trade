import * as React from "react";
interface IProps {
  fields: string[];
  index: number;
  onSelect: Function;
}
function Dropdown(props: IProps) {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const select = (i: number) => {
    hide();
    props.onSelect(i);
  };

  return (
    <div className="relative" onMouseOver={show} onMouseLeave={hide}>
      <button className="focus:outline-none text-gray-600 text-xs font-medium flex items-center border-r pr-4 border-gray-500">
        {props.fields[props.index]}
        <img src="assets/Icons/arrow-down.svg" className="ml-1 w-2" />
      </button>
      {visible && (
        <div className="absolute text-gray-600 text-xs font-medium bg-white shadow">
          {props.fields.map((item, i) => (
            <button
              className="focus:outline-none py-2 px-4 hover:bg-gray-200"
              onClick={() => select(i)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
