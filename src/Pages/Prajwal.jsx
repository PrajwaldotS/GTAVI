import {  useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Cards from "../Components/Cards";
import ScrollCard from "../Components/ScrollCard";
import TiltedCard from "../Components/TiltedCard";
import Land from "../Components/Land";
import Download from "../Components/Download";
import Animated from "../Components/Animated";


function Prajwal() {
  const [showContent, setshowContent] = useState(false)
 useGSAP(() => {
  const tl = gsap.timeline();

  tl.to(".vi-mask-group", {
    rotate: 10,
    duration: 2,
    ease: "power4.inOut",
    transformOrigin: "50% 50%",
  })
  .to(".vi-mask-group", {
    scale: 10,
    duration: 2,
    opacity: 0,
    ease: "expo.inOut",
    transformOrigin: "50% 50%",
    onUpdate: function () {
      if (this.progress() >= 0.9) {
        // prevent double execution
        if (!document.querySelector(".svg")) return;

        setTimeout(() => {
          const el = document.querySelector(".svg");

          // ✅ check if element still exists and belongs to its parent
          if (el && el.parentNode && el.parentNode.contains(el)) {
            try {
              el.parentNode.removeChild(el);
            } catch (error) {
              console.warn("Element already removed, skipping...");
            }
          }

          setshowContent(true);
        }, 50);

        this.kill(); // stop GSAP timeline safely
      }
    },
  });

  // ✅ Clean up GSAP when component unmounts
  return () => {
    tl.kill();
    const el = document.querySelector(".svg");
    if (el && el.parentNode && el.parentNode.contains(el)) {
      el.parentNode.removeChild(el);
    }
  };
}, []);

 useGSAP(()=>{
 if(!showContent) return;
 gsap.to(".main",{
  rotate:0,
  scale:1,
  delay:"-1",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
  gsap.to(".sky",{
  rotate:0,
  scale:1.2,
  delay:"-.7",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
 gsap.to(".building",{
  rotate:0,
  scale:1.1,
  delay:"-.7",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
 gsap.to(".text",{
  rotate:0,
  scale:1,
  delay:"-.7",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
  gsap.to(".character",{
  rotate:0,
  x:"-50",
  bottom:"-10%",
  scale:0.8,
  delay:"-.7",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
 
  const main = document.querySelector(".main")
  main?.addEventListener("mousemove", function (e){ // this code makes the parallax effect
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;  
    const yMove = (e.clientY / window.innerWidth - 0.5) * 40; 
   
    gsap.to(".main .text",{
      x: `${xMove*0.4}%`,
      scale:1.05,
    });
     gsap.to(".sky",{
      x: `${xMove* 0.05}%`,
      scale:1.05,
    });
     gsap.to(".building",{
      x: xMove * 1.7,
      scale:1.05,
    });
  })
 }, [showContent]);
 const DownloadData = {
  Head1: "Black Panther",
  Head2: "The Driver",
  para1:
    "Black Panther isn’t the loudest in the room, but when he speaks, people stop and listen. He’s got that mix of humor, confidence, and a touch of mischief that keeps everyone around him entertained.",
  para2:
    "A tough breakup and family loss hit him hard, but instead of breaking down, he built himself up — physically and mentally. That calmness people notice? It’s not natural, it’s earned.",
  para3:
    "Now, he lives for moments — late-night rides, gym sessions, and real conversations. He’s chill most days, but when he wants something, he goes for it without hesitation.",
};

const cardData = [
  {
    Head: "Background",
    para:
      "Black Panther’s story isn’t dramatic — it’s real. He’s seen people come and go, faced heartbreak, and dealt with loss that changed him. Every challenge shaped him into someone who doesn’t complain — he adapts. That quiet maturity is what sets him apart.",
  },
  {
    Head: "Personality",
    para:
      "Funny, confident, and a bit of a flirt. He doesn’t fake emotions, doesn’t try to impress — he just is who he is. Around friends, he’s the one who keeps the mood alive, and when things get rough, he’s the first one to calm everyone down. He’s got heart, even if he hides it behind jokes.",
  },
  {
    Head: "What Drives Him",
    para:
      "He’s not chasing fame or money. He’s chasing peace — the kind you find on empty roads and in late-night talks. He wants a simple life filled with good people, real love, and just enough thrill to feel alive. Every risk he takes is his way of reminding himself he’s still breathing.",
  },
  {
    Head: "Little Things",
    para:
      "He’s got small habits that make him, him — the chain he never takes off, the bracelet that’s always on his wrist, and the gum he’s always chewing. He believes in energy — some people wear luck, he wears calm. These little things keep him balanced, no matter how chaotic life gets.",
  },
];

const Madness = {
  Madness1: "Turns every getaway into a cinematic masterpiece.",
  Madness2: "Recharges health by flexing in the mirror.",
  Madness3: "Police reports list him as “unrealistic.”",
  Madness4: "Never misses a headshot — even when it’s just a vibe check.",
};

const chaosData = {
  drivingIQ: 4,
  RoastPower:5,
  LeatureSurvival:2,
  MoodSwing:3,
};



const imgData = {
  src: "./PrajwalSit.png",
  Btndata: "Summon the Legend",
 
};

  return (
    <>
      <Animated/> {/* this is Animated Component */}
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <Land characterImg="./PrajwalSelife.png" /> {/* this is Land Component */}
        <div className="w-full h-screen flex bg-black items-center justify-center px-10"> // this is the section below Land Component
          <div className="cont flex text-white w-full h-[80%] ">
           <div className="leftimg relative w-1/2 h-full">
          <TiltedCard imageSrc="./public/PrajwalCar.png"/>
           </div>
           <Download
            data={DownloadData}
           /> {/* this is Download Component */}
          </div>
        </div>
        <Cards data={Madness} chaosData={chaosData} imgData={imgData}/> {/* this is Cards Component */}
        <ScrollCard 
        StandImg="/PrajwalGun.png" 
        data={cardData}/> {/* this is ScrollCard Component */}
     </div>
     
     }
    </>
  );
}

export default Prajwal
