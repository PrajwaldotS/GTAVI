import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
 

const HomeCard = ({height , route}) => {
    
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const playSound = ()=>{ 
   // onclick character audio 
    if (audioRef.current) {
        audioRef.current.currentTime = 0; // restart if already playing
        audioRef.current.play().catch((err) => {
        console.log("Audio playback blocked:", err);
      });
    }
     setTimeout(() => {
      navigate(route);
    }, 300);
  
      };
  return (
   <div className=' overflow-hidden transition-all ease-in-out hover:shadow-[0_0_50px_10px_rgba(234,179,8,0.8)] rounded-3xl  shrink-0 w-[20%]  ' style={{height:height}} onClick={playSound} >
          <audio ref={audioRef} preload="auto" src="/Sounds/button.mp3" ></audio>
            <img src="/Carperson.png" className='object-cover hover:scale-[110%] transition-all ease-in-out h-[100%]' alt="" />
        </div>
  )
}

export default HomeCard
