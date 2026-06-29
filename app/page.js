import Image from "next/image";
import HeroPage from "./hero/page";
import Section2 from "./section2/page";
import Section4 from "./section4/page";
import Carousel3D from "./components/Carousel3D";

export default function Home() {
  return (
    <div className="bg-black">
  <div>
    <HeroPage/> 
  </div>
  <Section2/>
 <div>
   <Section4/>
 </div>
<div className="flex items-center justify-center w-full h-full md:col-span-2 mt-16 overflow-hidden">
  <Carousel3D/>
</div>
    </div>
  );
}
