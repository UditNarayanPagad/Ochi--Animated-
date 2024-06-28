import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-800 pt-1 text-white'>
        <div className="textStructure mt-40 px-14">
            {["WE CREATE" , "EYE OPENING" , "PRESENTATION"].map((item,index)=>(
                <div key={index} className="marker flex items-center justify-start">
                    {index === 1 && <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 1.5}} className='w-[9vw] h-[5.6vw] mt-3 rounded overflow-hidden'>
                        <img className='scale-150' src="https://cdn.dribbble.com/userupload/2948492/file/still-48f9e3bddbfd1e1efbbe1be4a174eb0d.png?resize=400x300&vertical=center" alt="" />
                    </motion.div>
                    }
                <h1 className='text-[7.5vw] leading-[6.5vw] tracking-tighter font-semibold'>{item}</h1>
            </div>
            ))}           
        </div>
        <div className='border-t-[1px] flex justify-between mt-20 pt-3 pl-12 pr-12'>
         {
            ["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p key={index}>{item}</p>
            ))
         }
         <div className='flex gap-1 hoverRound'>
            <div className='textDiv border-[1px] p-2 rounded-[20px] text-sm'>
                START THE PROJECT
            </div>
            <span className='iconDiv text-lg rounded-[50%] border-[1px] flex justify-center items-center w-9 transition-all ease-in-out delay-100'><MdArrowOutward /></span>
         </div>
        </div>
    </div>
  )
}

export default LandingPage