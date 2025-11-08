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


function Sonal() {
  const [showContent, setshowContent] = useState(false)
 useGSAP(() => { // this gsap code runs when the component mounts
   const tl = gsap.timeline();
   tl.to(".vi-mask-group",{   // this gsap code makes the VI rotate by 10 deegree
    rotate:10,
    duration:2,
    ease:"power4.inOut",
    transformOrigin:"50% 50%",
   })
   .to (".vi-mask-group",{ // this gsap code makes the VI scale up by 10 times and fade out
    scale:10,
    duration:2,
    opacity:0,
    ease:"expo.inOut", 
    transformOrigin:"50% 50%",
    // opacity:0,
   onUpdate: function(){ // this onUpdate function removes the svg element from the DOM once the animation is 90% complete
      if(this.progress() >= 0.9){
       setTimeout(()=>{  //settimeout is used this get a 50ms delye that makes the white screen which appears for a sec dispapper 
         const el = document.querySelector(".svg");
            if (el && el.parentNode) {
              el.parentNode.removeChild(el);
            }
        setshowContent(true);
       },50)
        this.kill(); // kill the animation to prevent further updates
      }
    }
   })
 });
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
  bottom:"-1%",
  scale:1.4,
  delay:"-.7",
  duration:2.5,
  ease:"Expo.easeInOut"
 })
 
  const main = document.querySelector(".main")
  main?.addEventListener("mousemove", function (e){ // this code makes the parallax effect
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;  
   
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
  Head1: "Sonalla",
  Head2: "The Solutionist",
  para1:
    "Sonalla is the group’s softest yet strongest heart. She’s emotional, sweet, and kind — the one who makes everyone feel heard and cared for. People often underestimate her calm nature, not realizing how strong she really is when things get heavy.",
  para2:
    "Known across college for being friendly and approachable, she somehow knows everyone — from classmates to seniors, and even the canteen guy. Her kindness makes her a magnet for people, even if it sometimes leads her to care too much.",
  para3:
    "She laughs easily, gets attached quickly, and feels deeply — but she never regrets it. Her emotions are her strength, not her weakness. When the group falls apart, she’s the one who quietly pieces everyone back together.",
};

const cardData = [
  {
    Head: "Background",
    para:
      "Sonalla’s presence makes people feel safe. She’s the friend who listens, the one who actually checks in, and the one whose laughter fills any empty space. People often come to her for advice — not because she knows everything, but because she listens like she does.",
  },
  {
    Head: "Personality",
    para:
      "Emotional, kind, and bright. She wears her heart on her sleeve and doesn’t hide her feelings. She fixes her hair every few minutes, laughs at even bad jokes, and has the rare ability to make people feel understood without saying much.",
  },
  {
    Head: "What Drives Her",
    para:
      "She seeks peace — not silence, but balance. Her goals are simple: success, happiness, and genuine friendships. She believes in doing good quietly and achieving things with grace. Success for her isn’t competition — it’s growth.",
  },
  {
    Head: "Little Things",
    para:
      "Her laugh is her signature — recognizable from a distance. She’s always fixing her hair when nervous or thinking, and she never hesitates to hug someone who needs comfort. Her phone gallery is filled with random photos of friends and quotes she finds 'cute.'",
  },
];

const Madness = {
  Madness1: "Can make anyone laugh even during chaos.",
  Madness2: "Uses kindness as her secret superpower.",
  Madness3: "Her laughter cures temporary sadness instantly.",
  Madness4: "Turns awkward silence into comfort with a smile.",
};

const chaosData = {
  drivingIQ: 4,
  RoastPower:5,
  LeatureSurvival:2,
  MoodSwing:3,
};

const imgData = {
  src: "./Prajwal.png",
  Btndata: "Summon the Sunshine",
};

  return (
    <>
      <Animated/> {/* this is Animated Component */}
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <Land characterImg="./image-Photoroom.png"/> {/* this is Land Component */}
        <div className="w-full h-screen flex bg-black items-center justify-center px-10">
          <div className="cont flex text-white w-full h-[80%] ">
           <div className="leftimg relative w-1/2 h-full">
          <TiltedCard imageSrc="./public/Prajwal.png"/>
           </div>
           <Download
            data={DownloadData}
           /> {/* this is Download Component */}
          </div>
        </div>
        <Cards data={Madness} chaosData={chaosData} imgData={imgData} /> {/* this is Cards Component */}
        <ScrollCard 
        StandImg="/personcar.png" 
        data={cardData}/> {/* this is ScrollCard Component */}
     </div>
     
     }
    </>
  );
}

export default Sonal
