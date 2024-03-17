import Image from "next/image";
import { Nav } from "./components/view/nav";
import { HeroSection } from "./components/view/herosection";
import { Marque } from "./components/marque";
import { Gallery } from "./components/view/gallery";
import { RoadMap } from "./components/view/roadmap";

export default function Index() {
  return (
    <div className="">
      <header className="relative h-[100vh] border-2 border-black">
        <div className="absolute w-full h-full z-0">
          <div className="relative w-full h-full">
              <Image src="/assets/cathero.png" alt="hero" fill={true} />
          </div>
        </div>
        <div className="absolute w-full h-full z-20">
          <div className="relative w-full h-full">
            <Nav />
            <div className="flex h-[80%] justify-center items-center">
              <div className="flex flex-col leading-[70px] text-[74px] font-bold text-gregxb mt-[20px]">
                <span className="herog -tracking-[2.96px]">Punch cat. This</span>
                <span className="herog -tracking-[2.96px]">cat punchs Jeet: </span>
              </div>
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
