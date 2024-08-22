"use client"
import Navigation from "@/components/navigation";
import logo from "../../../public/home/logo red.png";
import Image from "next/image";
import Homebanner from "../../../public/home/kalliop_data.png"; 
import banner from "../../../public/home/better.png";
import rcic from "../../../public/home/RCIC-IRB_EN_HORZ_CLR_POS.png";
import logocip from "../../../public/home/capic2-logo.png";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, CalendarDays, Cannabis, Earth, Files, GraduationCap, Home, Users } from "lucide-react";
import Footer from "@/components/footer";
import { Card } from "@radix-ui/themes";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardContent, CardHeader } from "@/components/ui/card";
export default function HomePage() {
  type DrawData = {
    drawName: string;
    drawCRS: number;
    drawSize: number;
    drawDateTime: string;
    drawCutOff: string;
  };
    const [data, setData] = useState<DrawData[] | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json?wbCacheBust=feee3f75-be79-494f-8744-7fe244735836');
            setData(response.data.rounds);
            console.log(response.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchData();
      }, []);


  return (
    <>
      <section className="bg-white  dark:bg-gray-900">
    <div className="grid max-w-screen-xl - px-4 py-[10rem] mx-auto lg:gap-8 xl:gap-0 lg:py-[10rem] lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
           <div className="flex">
            <Button>
                Book an appointment
            </Button>
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image alt="mockup" src={Homebanner}/>
        </div>                
    </div>
</section>





<div  className="flex justify-center mb-60 mt-[-10rem]">
<div className="flex flex-wrap items-center justify-center py-5 md:w-3/4 md:pb-20 md:pt-10 md:pl-10">

{data && (
<div
className="relative flex flex-wrap flex-row lg:justify-start justify-center bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white max-w-[80%] shadow-gray-900/20 shadow-md w-full  p-8">
<div
className="relative  m-0 md:mr-4 md:pr-4 overflow-hidden text-center text-gray-700 bg-transparent md:border-r rounded-none shadow-none bg-clip-border border-white/10">
<p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
{data[0]?.drawName}
</p>
<h1 className="flex justify-center gap-1 mt-4 font-sans antialiased font-normal tracking-normal text-[#BD0C0C] text-7xl">
  {data[0]?.drawCRS}
  <span className="self-end text-4xl"></span>
</h1>
<span className="mt-4 text-gray-400 text-2xl">CRS score</span>
</div>
<div className="p-0 flex items-center w-[55%] mt-8 lg:mt-0 md:mt-0">
<ul className="flex flex-col w-full gap-4">
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base flex antialiased font-normal leading-relaxed text-inherit">
    Number of invitations issued : <span className="font-bold ml-2"> {data[0]?.drawSize}</span>
    </p>
  </li>
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    Date and time of round : <span className="font-bold ml-2"> {data[0]?.drawDateTime}</span>
    </p>
  </li>
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    Tie-breaking rule :<span className="font-bold ml-2"> {data[0]?.drawCutOff}</span>
    </p>
  </li>
 
  
</ul>
</div>

</div> 
)}
</div>
</div>




   
{/* ------------------about us------------------- */}



<div  style={{
          backgroundImage: `url(${banner.src})`
          
        }} className="bg-cover">
      <div  
        className="relative flex  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  flex-col  items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div className="w-full px-4 lg:w-6/12 ">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-8 md:ml-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-[#BD0C0C]  text-lg font-semibold ">
                  Why Choose Us 
                </span>
                <h2 className="mb-5 text-3xl font-bold text-white dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-[#F4F4F4] dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <h6 className="mb-6  border-b flex items-center text-xs font-normal text-white dark:text-dark-6">
                   Certification
                 
                  </h6>
                <div className="flex gap-6 mb-8 justify-center lg:justify-start ">
               
               <Image className="rounded" src={logocip} alt="" width={120} height={120}/>
               <Image src={rcic} alt="" width={160} height={120}/>
             </div>
               
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#BD0C0C] hover:bg-opacity-90"
                >
                  Know more
                </a>
              </div>
            </div>
</div>
</div>
{/* -----------services----------- */}


<section className="pt-20 pb-12 lg:pt-[120px] bg-[#F4F4F4] lg:pb-[90px] dark:bg-dark">
   <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
         <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
               <span className="text-primary mb-2 block text-[#BD0C0C] text-lg font-semibold">
               Our Services
               </span>
               <h2
                  className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                  >
                  What We Offer
               </h2>
               <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
         </div>
         <div className="flex flex-wrap justify-center  gap-4">
            <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Files color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none">
              PNP
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notifications to device.Send notifications to device. Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Users color="#BD0C0C" className="ml-2 text-red" />
          
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
            Family Sponsorship
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notific ations to device.ations to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Study Permits
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notifications to device.ations to device.ations to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Canadian Citizenship 
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notifications to device. ations to device.ations to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-6 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Work Permits
            </p>
            <p className=" text-base text-muted-foreground">
              Send notifications to device. ations to device.ations to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Home color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Permanent Residency
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notifications to device. e. ations to device.ations to device.
            </p>
          </div>
          
        </div>
        <div className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-base text-muted-foreground">
              Send notifications to device. e. ations to device.ations to device.
            </p>
          </div>
          
        </div>
 
</div>
      </div>
     
   </div>
</section>


      {/* ----------footer---------- */}
     
      
    </>
  );
}
