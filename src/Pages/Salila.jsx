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


function Salila() {
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
  bottom:"-10%",
  scale:0.9,
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
  Head1: "Tomboy",
  Head2: "The planner",
  para1:
    "Tomboy is the backbone no one asked for but everyone relies on. Bold, confident, and fearless, she protects her people without ever making it look like effort. She’s that one friend who can argue, roast, and defend you in the same breath.",
  para2:
    "Famous across college for being smart, sarcastic, and impossible to intimidate, she’s the teachers’ favorite and the group’s driver — literally. Every morning and evening, she drops and picks up Sasta Rebel Kid, pretending to be annoyed but secretly loving it.",
  para3:
    "She gets bored easily and is always half sleepy in class, but when things get serious, she switches on instantly — calm, sharp, and ready to lead. Her energy isn’t chaotic — it’s contagious.",
};

const cardData = [
  {
    Head: "Background",
    para:
      "Known as one of the smartest students in college, Tomboy balances her attitude with intellect. Teachers respect her, seniors know her, and juniors either fear or admire her. She doesn’t try to lead — it just happens naturally because of how she carries herself.",
  },
  {
    Head: "Personality",
    para:
      "Bold, sarcastic, and fun to be around, she has a habit of saying “bro” way too often. Always direct, never fake. She may tease or argue, but it’s always out of love. When things go wrong, she’s the first to take control and the last to walk away.",
  },
  {
    Head: "What Drives Her",
    para:
      "She lives for her people — Sasta Rebel Kid and The Tailor are her priorities, and she’d do anything to protect them. Freedom, loyalty, and respect are her rules. She doesn’t care about opinions, only intentions. If she trusts you, you’re safe for life.",
  },
  {
    Head: "Little Things",
    para:
      "Her backpack is basically part of her identity — it goes everywhere with her. She’s always saying “bro” in every mood possible. Sometimes bored, sometimes sleepy, but always present when it matters. She loves English music with a sprinkle of Hindi, and her laugh can turn any serious moment light.",
  },
];

const Madness = {
  Madness1: "Drives like she’s in an action movie — even to class.",
  Madness2: "Says 'bro' more than she breathes.",
  Madness3: "Can roast, fix, and protect — all before lunch.",
  Madness4: "Turns chaos into team strategy within seconds.",
};

const chaosData = {
  drivingIQ: 5,
  RoastPower:3,
  LeatureSurvival:1,
  MoodSwing:1,
};

const imgData = {
  src: "./Prajwal.png",
  Btndata: "Summon the Storm",
};

  return (
    <>
      <Animated/> {/* this is Animated Component */}
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <Land characterImg="./SalilaSelfie.png"/> {/* this is Land Component */}
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
        <Cards data={Madness} chaosData={chaosData} imgData={imgData}/> {/* this is Cards Component */}
        <ScrollCard 
        StandImg="/personcar.png" 
        data={cardData}/> {/* this is ScrollCard Component */}
     </div>
     
     }
    </>
  );
}

export default Salila
