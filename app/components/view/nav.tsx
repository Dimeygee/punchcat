
import Image from "next/image"
import { Wrapper } from "../wrapper"

export const Nav = () => {
    return (
        <>
            <Wrapper>
                <div className="flex items-center justify-between py-[27px] flex-col md:flex-row gap-[20px] md:gap-0">
                    <div className="w-[300px]"></div>
                    <nav className="">
                        <ul className="flex gap-[44px] items-center text-base font-greyrg leading-[32px] text-white">
                            <li className="tracking-[0.64px]">Home</li>
                            <li className="tracking-[0.64px]">Roadmap</li>
                        </ul>
                    </nav>
                    <div className="">
                        <button className="border-none bg-white flex min-h-[53px] px-[24px] items-center rounded-[6px] gap-[10px]">
                            <span className="bgraident tracking-[0.64px] text-base">Buy now and punch a Jeet </span>
                            <Image src="/assets/Group.png" alt="" width={47} height={33} />
                        </button>
                    </div>
                </div>
            </Wrapper>
        </>
        
    )
}