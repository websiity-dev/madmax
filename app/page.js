import Image from "next/image";
import HeroPage from "./hero/page";
import Section2 from "./section2/page";

export default function Home() {
  return (
    <div>
  <div>
    <HeroPage/> 
  </div>
  <Section2/>
    </div>
  );
}
