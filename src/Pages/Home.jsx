
import Prajwal from './Prajwal.jsx'
const Home = () => {
  return (
    <div className='h-screen bg-black text-white flex  items-center justify-center px-10  gap-10'>
           
        <div className='h-[70%] w-[20%] bg-red-200 '>
            <img src="/Carperson.png" className='object-cover h-[100%]' alt="" />
        </div>
        <div className='h-[75%] w-[20%] bg-red-200 '>
            <img src="/Carperson.png" className='object-cover h-[100%]' alt="" />
        </div>
        <div className='h-[80%] overflow-hidden shrink-0 w-[20%] bg-red-200 '>
            <img src="/Carperson.png" className='object-cover hover:scale-[110%] transition-all ease-in-out h-[100%]' alt="" />
        </div>
        <div className='h-[75%] w-[20%] bg-red-200 '>
            <img src="/Carperson.png" className='object-cover h-[100%]' alt="" />
        </div>
        <div className='h-[70%] w-[20%] bg-red-200 '>
            <img src="/Carperson.png" className='object-cover h-[100%]' alt="" />
        </div>
      {/* <Prajwal/> */}
    </div>
  )
}

export default Home
