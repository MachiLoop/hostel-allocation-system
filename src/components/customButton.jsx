import React from "react";

const CustomButton = ({ children, style }) => {
  return (
    <button type="submit" className={style}>
      {children}
    </button>
  );
};

export default CustomButton;
