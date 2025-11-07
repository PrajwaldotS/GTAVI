import React from 'react'

const Card = ({data}) => {
  return (
   <div className='h-[80%] flex flex-col justify-center gap-[100px] text-white items-center shrink-0 overflow-hidden w-[80%] my-25 rounded-4xl border-1 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]'>
          <h1 className='text-8xl my-10 '>{data.Head}</h1>
          <p className='text-4xl my-10 w-[50%]'>{data.para}</p>
    </div>
  )
}

export default Card
