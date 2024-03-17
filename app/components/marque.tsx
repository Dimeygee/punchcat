'use client'

import { MarqueItem } from "./marqueitem"
import Image from "next/image"
import Marquee from "react-fast-marquee"


const items = [
    { text1: "0/0 Tax", text2: "No buy or sell tax" },
    { text1: "Liquidity Pool Burnt", text2: "Cant be taken out of protocol" },
    { text1: "Immutable", text2: "Token info cant be changed" },
    { text1: "100 % Community Owned", text2: "0/0 Tax" },
]

export const Marque = () => {
    return (
        <Marquee
            speed={100}
        >
            <div className="border-y-[6px] border-y-[#0F0F0F] flex items-center bg-[#0F0F0F] shrink-0">
            { items.map((item, index) => {
                return (
                    <MarqueItem text={item.text1} text2={item.text2} key={index} />
                )
            }) }
            <div className="h-[90px] w-[150px] bg-[#0F0F0F] px-[28px]">
                <div className="w-full h-full rounded-full relative overflow-hidden">
                    <Image src="/assets/Frame 1000005388.png" alt="" fill={true} />
                </div>
            </div>
            { items.map((item, index) => {
                return (
                    <MarqueItem text={item.text1} text2={item.text2} key={index} />
                )
            }) }
            </div>
        </Marquee>
    )
}