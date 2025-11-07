import "remixicon/fonts/remixicon.css";
import Card from "./Card";

const ScrollCard = ({StandImg, data}) => {
  return (
    <div className='h-screen w-100% gap-10 bg-black flex items-center justify-center'>
     <div className='w-[33%] h-[100%]  overflow-hidden'>
        <img
             className="object-cover h-[100%] w-auto scale-[1.32] [box-shadow:0_0_50px_10px_rgba(234,179,8,0.4)]"
             src={StandImg}
             alt=""
        />

    </div>
    <div className='ScrollCard w-[66%] h-[80%]  mx-10 flex flex-col p-10 overflow-x-auto items-center'>
      <h1 className='text-white text-8xl'> Scroll Down</h1>
        {data.map((card, index) => (
          <Card key={index} data={card} />
        ))}
    </div>
      
      
       
    </div>
  )
}

export default ScrollCard
