import Image from "next/image";
import { Nav } from "./components/view/nav";
import { HeroSection } from "./components/view/herosection";
import { Marque } from "./components/marque";
import { Gallery } from "./components/view/gallery";
import { RoadMap } from "./components/view/roadmap";

export default function Index() {
  return (
    <div className="">
      <header className="relative h-[100vh] border-2 border-black overflow-hidden">
        <div className="absolute w-full h-full z-0">
          <div className="relative w-full h-full">
                <video muted autoPlay loop className="w-full scale-150 hidden md:block">
                    <source src="/assets/cathero.mp4" type="video/mp4"></source>
                </video>
                <Image src="/assets/cathero.png" alt="" className="block md:hidden" style={{
                  objectFit:"cover"
                }} fill={true} />
          </div>
        </div>
        <div className="absolute w-full h-full z-20">
          <div className="relative w-full h-full">
            <Nav />
            <div className="flex h-[80%] justify-center items-center flex-col gap-[38px]">
              <div className="flex flex-col leading-[70px] text-[74px] font-bold text-gregxb mt-[20px] text-center">
                <span className="herog -tracking-[2.96px]">Punch cat. This</span>
                <span className="herog -tracking-[2.96px]">cat punchs Jeet:</span>
              </div>
              <button className="bgradient1 border-none bg-white text-white flex min-h-[53px] px-[24px] items-center rounded-[6px] gap-[10px] ">
                    <span className="tracking-[0.64px] text-base">Buy now and punch a Jeet </span>
                    <Image src="/assets/Group.png" alt="" width={47} height={33} />
                </button>
            </div>
          </div>
        </div>
      </header>
      <Marque />
      <Gallery />
      <RoadMap />
    </div>
  );
}
