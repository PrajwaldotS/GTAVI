import "remixicon/fonts/remixicon.css";

const ScrollCard = () => {
  return (
    <div className='h-screen w-100% gap-10 bg-black flex items-center justify-center'>
     <div className='w-[33%] h-[90%] mt-10 bg-red-300 overflow-hidden'>
        <img className='object-cover h-[100%] w-auto scale-[1.1] ' src="/Standimage.png" alt="" />
    </div>
    <div className='ScrollCard w-[66%] h-[80%]  mx-10 flex flex-col p-10 overflow-x-auto items-center'>
      <i className="ri-arrow-down-line"></i>
      <h1 className='text-white text-4xl'> Scroll Down</h1>
        <div className='h-[80%] flex flex-col justify-center gap-[100px] text-white items-center shrink-0 overflow-hidden w-[80%] my-25 rounded-4xl border-1 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]'>
          <h1 className='text-8xl my-10 '>this is Heading</h1>
          <p className='text-4xl my-10 w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptates eius consequuntur quam mollitia quisquam laborum iure ipsum est sint!</p>
        </div>
        <div className='h-[80%] flex flex-col justify-center gap-[100px] text-white items-center shrink-0 overflow-hidden w-[80%] my-25 rounded-4xl border-1 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]'>
          <h1 className='text-8xl my-10 '>this is Heading</h1>
          <p className='text-4xl my-10 w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptates eius consequuntur quam mollitia quisquam laborum iure ipsum est sint!</p>
        </div>
        <div className='h-[80%] flex flex-col justify-center gap-[100px] text-white items-center shrink-0 overflow-hidden w-[80%] my-25 rounded-4xl border-1 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]'>
          <h1 className='text-8xl my-10 '>this is Heading</h1>
          <p className='text-4xl my-10 w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptates eius consequuntur quam mollitia quisquam laborum iure ipsum est sint!</p>
        </div>
        <div className='h-[80%] flex flex-col justify-center gap-[100px] text-white items-center shrink-0 overflow-hidden w-[80%] my-25 rounded-4xl border-1 shadow-[0_0_50px_10px_rgba(234,179,8,0.4)]'>
          <h1 className='text-8xl my-10 '>this is Heading</h1>
          <p className='text-4xl my-10 w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptates eius consequuntur quam mollitia quisquam laborum iure ipsum est sint!</p>
        </div>
    </div>
      
      
       
    </div>
  )
}

export default ScrollCard
