import React from 'react'

const Land = ({characterImg}) => {
  return (
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
            <img src={characterImg} alt="" className="character  absolute -bottom-[150%] scale-[3] rotate-[-25deg]  -translate-x-1/2 ml-[38rem] left-1/3 " />
            <div className="btmbar w-full py-10 px-10 absolute bg-gradient-to-t from-black to-transparent bottom-0 left-0"> {/* this is bottom bar not fotter */}
            <div className="flex gap-4 text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
              <h3>Scroll Down</h3>
            </div>
            <img src="./ps5.png" className=" absolute top-1/2 left-1/2 h-[100px] -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          </div>
          
          
        </div>
  )
}

export default Land
