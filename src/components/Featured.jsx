import React from "react";
import { GoDotFill } from "react-icons/go";
import CurveBox from "../assets/CurveBox";
import { MdArrowOutward } from "react-icons/md";

const Featured = () => {
  let left = ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"];
  let right = ["AGENCY","COMPANY PRESENTATION"]
  return (
    <div className="w-full bg-zinc-800 text-white pt-[5vw] rounded-t-3xl ">
      <div className="text-white text-6xl p-[5vw]">Featured projects</div>
      <div className="flex gap-5 w-full h-screen border-t-[1px] border-zinc-400 p-[5vw]">
        <div className="left w-full rounded-lg p-2 relative">
            <div className="leftHead absolute z-10 top-[45%] opacity-0 right-[-20%] "><h1 className="text-[#CDEA68] text-8xl font-semibold tracking-tighter ">FYDE</h1></div>
          <span className="flex items-center">
            <GoDotFill /> FYDE
          </span>
          <div className="featureOuter overflow-hidden w-full h-[95%] mt-5 pb-2 rounded-lg">
            <div className='featureInner rounded-lg w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")] bg-center bg-contain'></div>
          </div>
          <div className="text-white flex">
            {left.map((ele, index) => (
              <div className="text-white" key={index}>
                <CurveBox ele={ele} />
              </div>
            ))}
          </div>
        </div>
        <div className="right w-full rounded-lg relative">
        <div className="rightHead absolute z-10 top-[45%] left-[-20%] opacity-0"><h1 className="text-[#CDEA68] text-8xl font-semibold tracking-tighter ">VISE</h1></div>
          <span className="flex items-center">
            <GoDotFill /> VISE
          </span>
          <div className="featureOuter w-full h-[92%] mt-5 pb-2 overflow-hidden rounded-lg">
            <div className='featureInner rounded-lg w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] bg-center bg-contain'></div>
          </div>
          <div className="text-white flex">
            {right.map((ele, index) => (
              <div className="text-white" key={index}>
                <CurveBox ele={ele} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[40vh] w-full flex justify-center items-center ">
      <p className="readMore rounded-full bg-white text-black flex justify-around items-center font-semibold w-[240px] p-3 cursor-pointer gap-3">
           VIEW ALL CASE STUDIES
            <div className="relative flex justify-center items-center">
              <div className="whiteDiv absolute w-2 h-2 rounded-full bg-black duration-300 ease"></div>
            <span className="arrow absolute opacity-0 text-white duration-300 ease">
              <MdArrowOutward />
            </span></div>
          </p>
      </div>
    </div>
  );
};

export default Featured;
