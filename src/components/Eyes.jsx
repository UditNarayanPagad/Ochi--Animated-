import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.x;
      let mouseY = e.y;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen cursor-pointer overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-screen bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 t-1/2 left-1/2 -translate-x-[50%] translate-y-[50%]">
          <div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
            <div className="h-[9.5vw] w-[9.5vw] relative rounded-full bg-black flex justify-center items-center">
              <div className="absolute h-[100%] w-full flex justify-center items-center text-lg text-white">Play</div>
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transition: "all ease .3s",
                }}
                className="h-[2vw] w-full"
              >
                <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
            <div className="h-[9.5vw] w-[9.5vw] relative rounded-full bg-black flex justify-center items-center">
            <div className="absolute h-[100%] w-full flex justify-center items-center text-lg text-white">Play</div>
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transition: "all ease .3s",
                }}
                className="h-[2vw] w-full"
              >
                <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
