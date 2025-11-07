import React from 'react'

const SplMad = ({data}) => {
  return (
    <div>
      <div className='flex flex-col h-[100%] justify-between items-center gap-[100px] py-10'>
        <h1 className='text-8xl'>Special Madness</h1>
        <ul className='flex flex-col h-[80%] font-semibold text-4xl w-[70%] gap-[100px] font-[helventica_Now_Display]  '>
            <li>{data.Madness1}</li>
            <li>{data.Madness2}</li>
            <li>{data.Madness3}</li>
            <li>{data.Madness4}</li>
        </ul>
      </div>
    </div>
  )
}

export default SplMad
