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


function Praachi() {
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
  onUpdate: function () {
  if (this.progress() >= 0.9) {
    setTimeout(() => {
      const el = document.querySelector(".svg");
      if (el?.parentNode?.contains(el)) {
        el.parentNode.removeChild(el);
      }
      setshowContent(true);
    }, 50);
    this.kill();
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
  Head1: "Sasta Rebel Kid",
  Head2: "The Heart ",
  para1:
    "Sasta Rebel Kid is the kind of person who can make you laugh and think in the same minute. Funny, bold, and sharp-minded, she has the habit of overthinking everything — and somehow still turning it into a strength.",
  para2:
    "She’s emotional and defensive when it comes to the people she loves, and she’ll stand up for them without hesitation. She doesn’t chase attention, but her vibe naturally pulls people in — calm, stylish, and real.",
  para3:
    "Behind her bold jokes and carefree lines, there’s someone who feels deeply but hides it well. When it matters, she’s the one with a plan, the one who stays till the end.",
};

const cardData = [
  {
    Head: "Background",
    para:
      "A known face around college — not because she tries, but because she stands out naturally. She’s serious during exams, funny with friends, and bold when things get messy. She’s learned that not everyone deserves her energy, and that’s what makes her peaceful.",
  },
  {
    Head: "Personality",
    para:
      "Smart, moody, confident, and brutally honest. She jokes a lot, but her honesty cuts through when it matters. She overthinks every detail but somehow still manages to look effortlessly chill. Always has a nickname for everyone and laughs at the most unexpected times.",
  },
  {
    Head: "What Drives Her",
    para:
      "She values respect and loyalty above everything. Her goals aren’t loud — she works on them quietly while everyone else talks. She’s driven by a mix of ambition and emotion, and when she decides on something, she doesn’t stop until it’s hers.",
  },
  {
    Head: "Little Things",
    para:
      "Her ring and glasses are more than style — they’re part of her personality. She listens to English indie songs and romantic tracks when no one’s around. She gives everyone nicknames, teases her close friends, and somehow always smiles at the wrong time — it’s her way of lightening the room.",
  },
];

const Madness = {
  Madness1: "Turns every argument into a mic drop moment.",
  Madness2: "Can roast and motivate you in the same sentence.",
  Madness3: "Mood swings synced perfectly with playlist changes.",
  Madness4: "Plans chaos like it’s a school project — and aces it.",
};

const chaosData = {
  drivingIQ: 1,
  RoastPower:4,
  LeatureSurvival:5,
  MoodSwing:5,
};

const imgData = {
  src: "./PraachiSit.png",
  Btndata: "Summon the Rebel",
};

  return (
    <>
      <Animated/> {/* this is Animated Component */}
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <Land characterImg="./PraachiSelfie.png"/> {/* this is Land Component */}
        <div className="w-full h-screen flex bg-black items-center justify-center px-10">
          <div className="cont flex text-white w-full h-[80%] ">
           <div className="leftimg relative w-1/2 h-full">
          <TiltedCard imageSrc="./public/PraachiCar.png"/>
           </div>
           <Download
            data={DownloadData}
           /> {/* this is Download Component */}
          </div>
        </div>
        <Cards data={Madness} chaosData={chaosData} imgData={imgData}/>  {/* this is Cards Component */}
        <ScrollCard 
        StandImg="/PraachiGun.png" 
        data={cardData}/> {/* this is ScrollCard Component */}
     </div>
     
     }
    </>
  );
}

export default Praachi
