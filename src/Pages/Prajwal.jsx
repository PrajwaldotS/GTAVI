import {  useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Cards from "../Components/Cards";
import ScrollCard from "../Components/ScrollCard";
import TiltedCard from "../Components/TiltedCard";


function Prajwal() {
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
         document.querySelector(".svg").remove();
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
    const yMove = (e.clientY / window.innerWidth - 0.5) * 40; 
    console.log(xMove, yMove);
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
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                 VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
     {showContent && <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
        <div className="landing w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 w-full py-10 px-10 z-[10] "> {/* this is nav bar*/}
              <div className="logo flex gap-10">
                <div className="lines flex gap-[5px]  flex-col">
                  <div className="line h-2 w-15 mt-5 bg-white"></div>
                  <div className="line h-2 w-8 bg-white"></div>
                  <div className="line h-2 w-5 bg-white"></div>
                </div>
                <h3 className="text-7xl text-white leading-none mt-[2px]">RockStar</h3>
              </div>
          </div>
          <div className=" imagesdiv relative w-full overflow-hidden h-screen"> {/* this is Body*/}
            <img src="./sky.png" className="w-full scale-[1.7] rotate-[-10deg] sky absolute top-0 left-0 h-full object-cover" alt="" />
            <img src="./bg.png" alt="" className=" building scale-[1.5] rotate-[-5deg] w-full h-full absolute top-0 left-0 object-cover" />
            <div className="text text-white absolute top-20 left-1/2 scale-[1.4] rotate-[10deg] -translate-x-1/2">
              <h1 className="text-[12rem] leading-none  -ml-40">Grand</h1>
              <h1 className="text-[12rem] leading-none  ml-20">Theft</h1>
              <h1 className="text-[12rem] leading-none  -ml-40">Auto</h1>
            </div>
            <img src="./image-Photoroom.png" alt="" className="character  absolute -bottom-[150%] scale-[3] rotate-[-25deg]  -translate-x-1/2 ml-[12rem] left-1/3 " />
            <div className="btmbar w-full py-10 px-10 absolute bg-gradient-to-t from-black to-transparent bottom-0 left-0"> {/* this is bottom bar not fotter */}
            <div className="flex gap-4 text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
              <h3>Scroll Down</h3>
            </div>
            <img src="./ps5.png" className=" absolute top-1/2 left-1/2 h-[100px] -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          </div>
          
          
        </div>
        <div className="w-full h-screen flex bg-black items-center justify-center px-10">
          <div className="cont flex text-white w-full h-[80%] ">
           <div className="leftimg relative w-1/2 h-full">
          <TiltedCard/>
           </div>
           <div className="right w-[30%] py-50">
            <h1 className="text-8xl">Still Running</h1>
            <h1 className="text-8xl">Not Hunting</h1>
            <p className="mt-10 text-3xl font-[helventica_Now_Display]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laborum aut illum consectetur expedita repudiandae magnam voluptate inventore ea laboriosam!</p>
            <p className="mt-3 text-3xl font-[helventica_Now_Display]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad illum eum sunt eos, consequatur fugiat?</p>
            <p className="mt-3 text-3xl font-[helventica_Now_Display]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad illum eum sunt eos, consequatur fugiat?</p>
            <button className="bg-yellow-500 px-10 py-10 text-3xl mt-5 hover:bg-yellow-600 cursor-pointer text-black"> Download Now </button>

           </div>
          </div>
        </div>
        <Cards/> {/* this is Cards Component */}
        <ScrollCard/> {/* this is ScrollCard Component */}
     </div>
     
     }
    </>
  );
}

export default Prajwal
