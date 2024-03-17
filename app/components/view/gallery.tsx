
import { Boxing2 } from "../icon"

export const Gallery = () => {
    return (
        <div className="h-[100vh] w-full flex justify-center bg-[#2E68FF] pt-[94px]">
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