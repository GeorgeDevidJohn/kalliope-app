import Homebanner from "../../../public/home/kalliop_data.png"; 
import Image from "next/image";
export default function AboutUs(){
    return(<>
      <div className="flex items-center justify-center h-screen w-screen">
  <div className=" flex flex-row justify-center items-center">
  <div className="lg:max-w-xl p-4 lg:pr-5 relative z-40">
                    <p className="flex text-sm uppercase text-g1  ">
                         
                      
                    </p>
                    <h2 className="mb-6 mt-[3.5rem] max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                       About Us
                        <span className="my-1 inline-block border-b-8 border-red-600 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">different</span>
                    </h2>
                    <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque it.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque it.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque it.</p>
                   
                </div>

                <div className="abg-orange-400 hidden lg:block w-[30%] overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                     <Image src={Homebanner}/>
                </div>
   
  </div>
</div>
    
    </>)
}