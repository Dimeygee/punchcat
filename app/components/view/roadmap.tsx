import Image from "next/image"
import { Phase } from "../phase"
import { Telegram, Twitter } from "../icon"

export const RoadMap = () => {
    return (
        <div className="pt-[69px] pb-[69px] bg-white font-greyb">
            <div className="flex flex-col items-center">
                <h4 className="leading-[2px] text-[40px] font-gregb font-medium">Roadmap</h4>
                <p className="tex-[#64748B] text-[20px] mt-[36px]">So for every cat here , here is the plan for world cat domination </p>
            </div>
            <div className="mt-[21px] w-[1251px] h-[683px] relative mx-auto">
                <div className="absolute z-0 w-full h-full">
                    <div className="relative w-full h-full">
                        <Image src="/assets/newframe.png" alt="" fill={true} />
                    </div>
                </div>
                <div className="z-20 absolute w-full h-full">
                    <div className="w-full relative h-full flex items-center">
                        <div className="flex justify-center gap-[53px]">
                            <Phase title="Phase 1 - Know the Cat" lists={["Launch $PUNCH on @pumpdotfun", "Get into every cat meme lovers wallets through giveaways and partial airdrops", "Punch out % supply with every 1000 new $PUNCH holders "]} />
                            <Phase title="Phase 1 - Know the Cat" lists={["Feel the Cat", "$PUNCH airdrop (More info soon)", "$PUNCH Cex listings"]} />
                            <Phase title="Phase 1 - Know the Cat" lists={["$PUNCH Merch", "Punch Cats game planning  (when we hit $100M punch cap)"]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[123px]">
                <h6 className="leading-[2.078px] text-[20px] font-medium mb-[65px] text-center">Join the community to punch a jeet</h6>
                <div className="w-[1251px] h-[156px] flex mx-auto">
                    <div className="grow flex py-[27px] px-[81px] gap-[13px] flex-col items-center bg-[#9747FF]">
                        <Twitter />
                        <span className="text-[20px] text-[#FFF] font-greyb">Twitter</span>
                    </div>
                    <div className="grow flex py-[27px] px-[81px] gap-[13px] flex-col items-center bg-[#1C9276]">
                        <Telegram />
                        <span className="text-[20px] text-[#FFF] font-greyb">Telegram</span>
                    </div>
                </div>
            </div>
            <div className="mt-[133px] text-center">
                <p className="text-[304px] tracking-[-6.08px] leading-[204px] font-greyxb font-bold">Punch Cat</p>
            </div>
        </div>
    )
}