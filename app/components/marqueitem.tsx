import { Boxing } from "./icon"

export const MarqueItem = ({ text, text2, key } : { text: string, text2 : string, key: number | string  }) => {
    return (
        <div key={key} className="flex py-[18px] px-[24px] gap-[12px] bg-white border-r-[#E3E3E3] border-r-[1px] w-[380px] items-center">
            <Boxing />
            <div className="flex flex-col gap-[16px] font-greyrg">
                <span className="text-[#222] leading-[22px] text-sm">{text}</span>
                <span className="text-[#848484] leading-[16px] text-sm">{text2}</span>
            </div>
        </div>
    )
}