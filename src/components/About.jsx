import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const about = () => {
  const [scale, setscale] = useState(false);
  let hoverEffect = ()=>{
    scale === true ? setscale(false) : setscale(true);
  }
  return (
    <div className="w-full bg-[#CDEA68] mt-[-2vw] rounded-t-2xl">
      <div className="w-full border-b-[.7px] border-zinc-500">
        <h1 className="text-black text-[4vw] leading-[4.3vw] tracking-tighter text-start p-[4vw]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products,
          <br /> explain complexideas, and hire great people.
        </h1>
      </div>
      <div className="flex pl-12 pr-12 pb-12 pt-5">
        <div className="w-[50%]">
          <h1 className="text-[52px] tracking-tighter">Our approach:</h1>
          <p onMouseOver={hoverEffect} onMouseLeave={hoverEffect} className="readMore rounded-full bg-black text-white flex justify-around items-center w-[160px] p-3 cursor-pointer gap-3">
            READ MORE
            <div className="relative flex justify-center items-center">
              <div className="whiteDiv absolute w-2 h-2 rounded-full bg-white duration-500 ease"></div>
            <div className="arrow absolute opacity-0 text-black duration-500 ease">
              <MdArrowOutward />
            </div></div>
          </p>
        </div>
        <div className="w-[50%]">
          <img style={scale ? { transform: "scale(.9)" } : {}}
            className="image w-full rounded-lg duration-300 ease-in-out"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default about;
