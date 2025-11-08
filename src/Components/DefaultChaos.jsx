import React from 'react'

const DefaultChaos = ({ drivingIQ,  RoastPower , LeatureSurvial , MoodSwing }) => {
  const renderStars = (count) => {
    const stars = [];
    console.log(count);
    for(let i=0;i<count;i++){
      stars.push(
        <img 
         key={i}
         src="/star.png"
         alt="" 
         className='h-15' />
      )
    }
    return stars;
  }
  return (
    <div>
      <h1  className='text-8xl py-2 text-center'>Default Caos</h1>
      <div className='py-6'>
        <h1 className='text-5xl font-semibold font-[helventica_Now_Display] text-center '>Driving IQ</h1>
        <div className='flex justify-around  py-5 gap-4 items-start'>
            {renderStars( drivingIQ )}
        </div>
        
      </div>
      <div className='py-6'>
        <h1 className='text-5xl font-semibold font-[helventica_Now_Display] text-center'>Roast Power</h1>
        <div className='flex justify-around  py-5 gap-4 items-center'>
            {renderStars( RoastPower  )}
        </div>
        
      </div>
      <div className='py-6'>
        <h1 className='text-5xl font-semibold font-[helventica_Now_Display] text-center'>Leature Survival</h1>
        <div className='flex justify-around gap-4 py-5 items-center'>
            {renderStars( LeatureSurvial )}
        </div>
        
      </div>
      <div className='py-6'>
        <h1 className='text-5xl font-semibold font-[helventica_Now_Display] text-center'>Mood Swing</h1>
        <div className='flex justify-around gap-4 py-5 items-center'>
            {renderStars(  MoodSwing )}
        </div>
        
      </div>
     
    </div>
  )
}

export default DefaultChaos
