import Image from "next/image"
import { Phase } from "../phase"
import { Telegram, Twitter } from "../icon"

export const RoadMap = () => {
    return (
        <div className="pt-[69px] pb-[69px] bg-white font-greyb relative">
            <video muted autoPlay loop className="w-full  absolute bottom-[-300px]">
                <source src="/assets/punch.mp4" type="video/mp4"></source>
            </video>
            <div className="relative w-full top-0 h-full  z-20 bg-white">
            <div className="flex flex-col items-center relative z-10">
                <h4 className="leading-[2px] text-[40px] font-gregb font-medium">Roadmap</h4>
                <p className="tex-[#64748B] text-[20px] mt-[36px] text-center">So for every cat here , here is the plan for world cat domination </p>
            </div>
            <div className="md:mt-[21px] mt-[300px] md:w-[1251px] h-[683px] relative mx-auto z-40">
                <div className="absolute z-0 w-full h-full">
                    <div className="relative w-full h-full">
                        <Image src="/assets/newframe.png" alt="" fill={true} />
                    </div>
                </div>
                <div className="z-20 absolute w-full h-full">
                    <div className="w-full relative h-full flex items-center justify-center">
                        <div className="flex justify-center gap-[120px] md:gap-[53px] flex-col md:flex-row">
                            <Phase title="Phase 1 - Know the Cat" lists={["Launch $PUNCH on @pumpdotfun", "Get into every cat meme lovers wallets through giveaways and partial airdrops", "Punch out % supply with every 1000 new $PUNCH holders "]} image="/assets/catstand.mp4" />
                            <Phase title="Phase 1 - Know the Cat" lists={["Feel the Cat", "$PUNCH airdrop (More info soon)", "$PUNCH Cex listings"]} image="/assets/2cat.mp4" />
                            <Phase title="Phase 1 - Know the Cat" lists={["$PUNCH Merch", "Punch Cats game planning  (when we hit $100M punch cap)"]} image="/assets/guycat.mp4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:mt-[123px] mt-[323px]">
                <h6 className="leading-[2.078px] text-[20px] font-medium mb-[65px] text-center">Join the community to punch a jeet</h6>
                <div className="md:w-[1251px] h-[156px] flex mx-auto">
                    <div className="grow flex py-[27px] md:px-[81px] gap-[13px] flex-col items-center bg-[#9747FF]">
                        <Twitter />
                        <span className="text-[20px] text-[#FFF] font-greyb">Twitter</span>
                    </div>
                    <div className="grow flex py-[27px] md:px-[81px] gap-[13px] flex-col items-center bg-[#1C9276]">
                        <Image src="/assets/Telegram.png" alt="" width={64} height={64} />
                        <span className="text-[20px] text-[#FFF] font-greyb">Telegram</span>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="text-center relative  flex justify-center">
                <p className="text-[100px] leading-[100px]  md:text-[304px] tracking-[-6.08px] md:leading-[204px] font-greyxb font-bold absolute top-0 bg-white text-black z-10 mix-blend-screen w-full h-[500px] pt-[132px]"> Punch Cat</p>
            </div>
        </div>
    )
}