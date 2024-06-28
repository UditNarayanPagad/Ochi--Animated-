import React from "react";

const CurveBox = ({ ele }) => {
  return (
    <div className="h-[30px] flex items-center p-4 m-1 rounded-3xl text-sm border-white border-[1px] hover:bg-white hover:text-black transition-colors ease-in-out duration-500">
      {ele}
    </div>
  );
};

export default CurveBox;
