
'use client'

import { Boxing2 } from "../icon"
import { useState, useEffect , useRef } from 'react';
import Image from "next/image";




export const Gallery = () => {
  
    const [open, setOpen ] = useState(false)
    
    return (
        <div className="randomSection min-h-[100vh] w-full flex justify-center bg-[#2E68FF]  relative ">
            { open && <div className="absolute w-full h-full z-0">
                <div className="relative w-full h-full">
                    <Image src="/assets/nnframe.png" alt="" fill={true} />
                </div>
            </div> }
             <div className="flex flex-col items-center z-10">   
                <h5 className="-tracking-[1.6px] leading-[40px] text-[40px] text-white font-greyb font-bold pt-[94px]">Explore the Gallery</h5>
                { open ? (
                    <div className="flex flex-col gap-[70px] mt-[70px] pb-[250px]">
                        <div className="w-[1112px] h-[834px] bg-black overflow-hidden">
                            <video loop className="w-full h-full scale-150" autoPlay>
                                <source src="/assets/vid1.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="w-[1112px] h-[834px] bg-black overflow-hidden">
                            <video loop className="w-full h-full scale-150" autoPlay>
                                <source src="/assets/vid2.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="w-[1112px] h-[834px] bg-black overflow-hidden">
                            <video loop className="w-full h-full scale-150" autoPlay>
                                <source src="/assets/newhero.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                ) : (
                    <span className="flex flex-col items-center mt-[193px]" onClick={() => setOpen(true)}>
                    <Boxing2 />
                    <span className="text-white text-center font-greyrg">Click here to punch</span>
                    </span>
                ) }
                
            </div>
        </div>
    )
}

function setCurrentIndex(arg0: (prevIndex: number) => number) {
    throw new Error("Function not implemented.");
}
