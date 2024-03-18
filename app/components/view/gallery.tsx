
'use client'

import { Boxing2 } from "../icon"
import { useState, useEffect , useRef } from 'react';
import Image from "next/image";



export const Gallery = () => {

    const [ images, setImages ] = useState([
        { images: "/assets/image 68.png", x: "100px", y: "300px" },
        { images: "/assets/Footer 4.png", x: "60%", y: "200px" },
        { images: "/assets/Footer 5.png", x: "40%", y: "150px" },
        { images: "/assets/Footer 11.png", x: "30px", y: "500px" },
        { images: "/assets/Footer 10.png", x: "80px", y: "70%" },
        { images: "/assets/Footer 12.png", x: "40%", y: "60%" },
    ])

    const [ clicked, setClicked ] = useState(false)
    

    const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  
  

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      useEffect(() => {
        if (count === images.length) {
          if(intervalId){
            clearInterval(intervalId)
          }; 
        }

        const Images = document.querySelectorAll(".image")

        Images.forEach((_image, index) => {
            if(!clicked) return 
            if(count === index){
                _image.classList.remove("hide")
                _image.classList.add("show")
            }
        })

      }, [count, images.length, intervalId]);

      
    
      
      const startInterval = () => {
        const id = setInterval(handleIncrement, 1000); 
        setIntervalId(id);
        setClicked(true)
      };
    
    return (
        <div className="randomSection h-[100vh] w-full flex justify-center bg-[#2E68FF] pt-[94px] relative" onClick={startInterval}>
            { images.map((_img, index) => {
                return (
                    <div
                    style={{ top: _img.y, left: _img.x }}
                    className="text-white text-[100px] absolute w-[250px] h-[250px] md:w-[450px] md:h-[380px] image hide" 
                    key={index}>
                        <div className="relative w-full h-full">
                            <Image src={_img.images} alt="" fill={true} />
                        </div>
                    </div>
                )
            }) }
             <div className="flex flex-col gap-[193px] items-center">
                <h5 className="-tracking-[1.6px] leading-[40px] text-[40px] text-white font-greyb font-bold">Explore the Gallery</h5>
                <span className="flex flex-col items-center">
                <Boxing2 />
                <span className="text-white text-center font-greyrg">Click here to punch</span>
                </span>
            </div>
        </div>
    )
}

function setCurrentIndex(arg0: (prevIndex: number) => number) {
    throw new Error("Function not implemented.");
}
