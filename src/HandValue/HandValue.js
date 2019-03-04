import React from "react";

const HandValue = ({leading, value }) => {
  
  if(typeof leading === 'undefined') {
    leading = "Value: ";
  }
  return (
    <div className="hand-value">
      {leading + value}
    </div>
  );
};

export default HandValue;
