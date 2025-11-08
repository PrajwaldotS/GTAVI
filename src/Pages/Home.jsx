
import Prajwal from './Prajwal.jsx'
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../Components/HomeCard.jsx';
const Home = () => {
 
   
  
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
 const cards = [
    { height: "70%", src:"./PraachiGun.png" , route: "/salila" },
    { height: "75%", src:"./SalilaGun.png" , route: "/praachi" },
    { height: "80%", src:"./PrajwalGun.png" , route: "/prajwal" },
    { height: "75%", src:"./VaishGun.png" , route: "/sonal" },
    { height: "70%", src:"./SonalGun.png" , route: "/Vaishnavi" },
  ];
  return (
    <>
      {/* this makes the VI Animation */}
     <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="50"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  
                >
                 RockStar <br /> Games
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./Yellowbg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div> 
      {/* /this makes the VI Animation */}
   { showContent && <div className='bg-[url("./HomeBg.jpg")] text-center pt-10  text-white text-8xl'>
     <div className="navbar absolute top-0 left-0 w-full py-10 px-10 z-[10] "> {/* this is nav bar*/}
              <div className="logo flex justify-between">
                <div className="lines flex gap-[5px]  flex-col">
                  <div className="line h-2 w-15 mt-5 bg-white"></div>
                  <div className="line h-2 w-8 bg-white"></div>
                  <div className="line h-2 w-5 bg-white"></div>
                </div>
                <h1 className="text-8xl text-white leading-none mt-[2px] hover:[text-shadow:0_0_50px_rgba(234,179,8,0.5)]">
                    RockStar Games
                  </h1>

                <div className='h-15 w-15 mx-5 scale-[0.9] '>
                 <audio  src="/Sounds/button.mp3" loop></audio>

                        {/* toggle button */}
                        <div className="text-5xl cursor-pointer"
                         
                        >
                          <i className="ri-volume-up-line"></i>
                        </div>
                    </div>
              </div>
          </div>
     <div className='h-screen  text-white flex items-center justify-center mx-[8rem] pb-20 gap-10'>
       
      {cards.map((card,idx)=>(
        <HomeCard key={idx} height={card.height} route={card.route} src={card.src}/>
      ))}
      


      
    </div>
   </div>}
   </>
  )
}

export default Home
