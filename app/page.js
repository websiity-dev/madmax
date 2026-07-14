import Image from "next/image";
import HeroPage from "./hero/page";
import Section2 from "./section2/page";
// import ShutterTransition from "./components/ShutterTransition";
import Section4 from "./section4/page";
import Carousel3D from "./components/Carousel3D";
import Review from "./section_5/pagr";
import ReviewCarousel from "./components/Carousel";
import AboutSection from "./section6/page";
import CreativeFinalSection from "./footer/page";
import Footer from "./footer/page";


export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
  <div>
    <HeroPage/> 
  </div>
  {/* <ShutterTransition/> */}
  <Section2/>
 <div>
   <Section4/>
 </div>
<div className="flex items-center justify-center w-full h-full md:col-span-2 mt-16 overflow-hidden">
  <Carousel3D/>

</div>
<ReviewCarousel/>
<AboutSection/>
<Footer/>
    </div>
  );
}
