import Navigation from "@/components/navigation";
import logo from "../../../public/home/logo red.png";
import Image from "next/image";
import Homebanner from "../../../public/home/homeBanner.png"; 
import banner from "../../../public/home/bannerimage.webp";
import rcic from "../../../public/home/RCIC-IRB_EN_HORZ_CLR_POS.png";
import logocip from "../../../public/home/capic2-logo.png";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
export default function HomePage() {
  return (
    <>
      <Navigation />
      <div
        className="bg-cover py-10"
        style={{
          backgroundImage: `url(${Homebanner.src})`
          
        }}
      >
   
        <div className=" pt-20 grid  flex items-center justify-items-center max-w-2xl filter drop-shadow-2xl  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="absolute bottom-0 right-0 mr-8 mb-[-2rem]">
  <Image src={logo} alt="logo" width={50} height={50} className="sm:w-20 sm:h-20" />
</div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
             
              <p className="mt-2 text-4xl font-bold tracking-tight text-white  sm:text-5xl text-center sm:text-left">
               Heading
              </p>
              <p className="my-8 leading-loose dark:text-gray-400  text-[#F4F4F4] text-center sm:text-left ">
                Aspiring Software Developer with a robust foundation in computer
                science and hands-on experience in developing scalable
                applications. Eager to apply my knowledge of modern programming
                languages and Committed to continuous learning
                and leveraging collaborative skills to enhance team productivity
                and project success.
              </p>
              <div className="flex gap-6 mb-8 justify-center sm:justify-start ">
               
                <Image className="rounded" src={logocip} alt="" width={120} height={120}/>
                <Image src={rcic} alt="" width={160} height={120}/>
              </div>
              <div className=" flex justify-center sm:justify-start ">
              <Button  className="gap-2 bg-[#BD0C0C]  ">
                <CalendarDays/> Book an appointment
              </Button>
              </div>
              <div className="grid  sm:w-2/3 mt-8 gap-4 text-base font-semibold w-full  text-gray-600 grid-cols-2 "></div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
