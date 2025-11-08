
import TiltedCard from './TiltedCard'

import SplMad from './SplMad'
import DefaultChaos from './DefaultChaos'


const Cards = ({data , chaosData, imgData}) => {
  return (
    <div>
        <div className="h-screen w-100% gap-10 bg-black flex items-center justify-center">
          <div className="text-white flex flex-col gap-10 rounded-3xl  px-8 justify-between py-10 items-center h-[80%] w-[30%] mx-10 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)] ">
                 <DefaultChaos
                  drivingIQ={chaosData.drivingIQ}
                  RoastPower={chaosData.RoastPower}
                  LeatureSurvial={chaosData.LeatureSurvival}
                  MoodSwing= {chaosData.MoodSwing}
                 />
                </div>
              
            
                
                <div className='px-30 flex flex-col justify-center items-center w-[30%] gap-10'>
                  <TiltedCard imageSrc={imgData.src}/>
                <button className="bg-yellow-500 px-10 py-10 text-4xl mt-5 active:bg-yellow-600  cursor-pointer text-black"> {imgData.Btndata}</button>
                </div>
                <div className="text-white flex flex-col gap-10 rounded-3xl mx-10  px-8 justify-between py-10 items-center h-[80%]  shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]">
                 <SplMad data={data}/>
              </div>
                </div> 
    </div>
  )
}

export default Cards
