import React from 'react'

const Download = ({data}) => {
  return (
   <div className="h-screen right w-[30%] py-50">
            <h1 className="text-8xl">{data.Head1}</h1>
            <h1 className="text-8xl">{data.Head2}</h1>
            <p className="mt-5 text-3xl font-[helventica_Now_Display]">{data.para1}</p>
            <p className="mt-5 text-3xl font-[helventica_Now_Display]">{data.para2}</p>
            <p className="mt-5 text-3xl font-[helventica_Now_Display]">{data.para3}</p>
            <button className="bg-yellow-500 px-10 py-10 text-3xl mt-5 hover:bg-yellow-600 cursor-pointer text-black"> Download Now </button>

     </div>
  )
}

export default Download
