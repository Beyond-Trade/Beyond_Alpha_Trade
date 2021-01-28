import * as React from "react";
import Loader from "react-loader-spinner";

function GeneralButton({
    submitting,
    submit,
    textValue,
    otherClasses,
    children,
    isDisabled,
}:any) {
  
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    
        <button
        disabled={isDisabled}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
          onClick={submit}
          className={` focus:outline-none hover:shadow-custom font-medium hover:bg-customBlack-550 hover:text-white flex justify-center items-center text-black ${otherClasses} rounded `}
        >
          {!submitting && textValue}
          {submitting && (
            <Loader type="Bars" color="#ffffff" height={18} width={20} />
          )}
          {children}
        </button>
  );
}

export default GeneralButton;