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


function Vaishnavi() {
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
  bottom:"-5%",
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
  Head1: "ViratPaglu",
  Head2: "The Designer",
  para1:
    "The Tailor isn’t loud or attention-seeking — she’s the one who quietly makes things beautiful. She’s the calmest in the group, an observer who notices every detail — how people move, talk, or even stay silent. That’s what makes her art feel alive.",
  para2:
    "She’s deeply passionate about art and design. Every line she draws, every outfit she sketches, has meaning. Her dream isn’t fame — it’s expression. She’s fascinated by fashion and loves turning her art into designs that reflect mood, personality, and peace.",
  para3:
    "Her focus is rare. While others drift between interests, she can spend hours lost in her designs — completely immersed, completely herself. Her art is her voice; her silence, her strength.",
};

const cardData = [
  {
    Head: "Background",
    para:
      "Known by everyone, understood by few. The Tailor is the calm, mysterious artist who brings color into silence. She discovered her passion for art early and turned it into focus — spending nights refining lines and experimenting with textures. Her art isn’t just a hobby; it’s how she processes the world.",
  },
  {
    Head: "Personality",
    para:
      "Introverted yet expressive, soft-spoken but strong-minded. She doesn’t need attention to feel seen — her presence speaks through her work. Moody at times, elegant always, she carries an energy that feels peaceful and powerful at once. Around friends, she’s quiet comfort and silent strength.",
  },
  {
    Head: "What Drives Her",
    para:
      "She’s driven by creation — designing clothes, sketching art, and finding beauty in little details. Fashion design fascinates her, not for style alone, but for the emotion behind it — how what you wear can tell a story. Every piece she creates is thoughtful, personal, and layered with feeling.",
  },
  {
    Head: "Little Things",
    para:
      "She’s always sketching — on paper, napkins, even her notebook margins. You’ll often find her staring out of windows, lost in thought, or painting late into the night. Her bracelets and rings have stories, her colors have moods, and her quiet moments often become masterpieces.",
  },
];

const Madness = {
  Madness1: "Sketches peace in chaos — literally.",
  Madness2: "Can turn silence into an art form.",
  Madness3: "Her calm energy is more intimidating than anger.",
  Madness4: "Creates beauty faster than most people can think.",
};

const chaosData = {
   drivingIQ: 2,
  RoastPower:2,
  LeatureSurvival:1,
  MoodSwing:4,
};

const imgData = {
  src: "./Prajwal.png",
  Btndata: "Summon the Creator",
};

  return (
    <>
      <Animated/> {/* this is Animated Component */}
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <Land characterImg="./VaishSelfie.png"/> {/* this is Land Component */}
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

export default Vaishnavi
