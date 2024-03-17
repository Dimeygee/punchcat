import Image from "next/image"


export const Phase = ({ title, lists, image } : { title:string, lists: string[], image?: string  }) => {
    return (
        <div className="relative font-greyb basis-[350px] pcard">
            <div className="phaseimage absolute z-0 border-2 border-black top-[-25%]">
                <Image src="" alt="" fill={true} />
            </div>
            <div className="py-[16px] px-[12px] flex relative z-10 flex-col gap-[24px]">
                <span className="font-bold font-greyb text-[#000] tracking-[0.9px] text-[18px]">{title}</span>
                <div className="flex flex-col gap-[19px]">
                    { lists.map((list, index) => {
                        return (
                            <div className="flex gap-[12px] items-center font-medium pl-[12px]" key={index} >
                                <span className="h-[2px] w-[2px] bg-black"></span>
                                <span className="text-base text-black tracking-[0.8px]">{ list }</span>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}