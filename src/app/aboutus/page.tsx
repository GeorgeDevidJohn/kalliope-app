import Homebanner from "../../../public/home/kalliop_data.png"; 
import Image from "next/image";
import banner from "../../../public/home/better.png";
import rcic from "../../../public/home/RCIC-IRB_EN_HORZ_CLR_POS.png";
import logocip from "../../../public/home/capic2-logo.png";
export default function AboutUs(){
    return(<>
      <div className="flex items-center justify-center  w-screen">
  <div className=" flex flex-row justify-center mb-[8rem] mt-[8rem] items-center">
  <div className="lg:max-w-xl p-8 lg:pr-5 relative z-40">
                    <p className="flex text-sm uppercase text-g1  ">
                         
                      
                    </p>
                    <h2 className="mb-6 mt-[0.5rem] max-w-lg text-4xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                       About Us
                       <br></br>
                        <span className=" inline-block border-b-8 border-red-600 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash"></span>
                    </h2>
                    <p className="text-base text-gray-700">Welcome to Kalliope Immigration Inc. We are a federally incorporated Canadian immigration
                firm founded by Merilo Elizabeth John,<strong> Regulated Canadian Immigration Consultant
                (RCIC-IRB)</strong>. With exceptional experience in Canadian immigration law, we are committed to
                helping individuals and families navigate the complex and ever-evolving immigration system in
                Canada.</p>
<br></br>
<p className="text-base text-gray-700">Our expertise ensures that every client receives accurate, up-to-date advice and personalized
services tailored to their unique needs. Whether you’re seeking permanent residence, temporary
visas, work or study permits, or refugee and humanitarian assistance, we are dedicated to guiding
you through the entire immigration process.</p>
<br></br>
<p className="text-base text-gray-700">At Kalliope, we pride ourselves on integrity, professionalism, and a client-first approach. We
understand that every immigration journey is unique, and we work closely with you to achieve
your goals of living, working, or studying in Canada. Our commitment to transparency and
excellence sets us apart, making us a reliable partner on your pathway to Canada.</p>
<br></br>
<p className="text-base text-gray-700" > <strong>Let us help you craft your Canadian Tales.</strong></p>

                   
                </div>

                <div className="abg-orange-400 hidden lg:block w-[30%] overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                     <Image src={Homebanner} alt={""}/>
                </div>
   
  </div>
</div>

<div  style={{
          backgroundImage: `url(${banner.src})`
          
        }} className="bg-cover">
      <div  
        className="relative flex justify-center pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  flex-col  items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
   
   <div className="md:w-1/2 px-4 md:ml-8 lg:w-1/2 xl:w-6/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-[#BD0C0C]  text-lg font-semibold ">
                  About Me
                </span>
                <h2 className="mb-5 text-3xl font-bold text-white dark:text-white sm:text-[40px]/[48px]">
                MERILO ELIZABETH JOHN
                </h2>
                <h4 className="mb-4 - text-white italic dark:text-white sm:text-[14px]/[18px]">RCIC-IRB (Chief Immigration Consultant and Founder)</h4>
                <p className="mb-5 text-base text-[#F4F4F4] dark:text-dark-6">
                Merilo Elizabeth John is the founder and Chief Immigration Consultant at Kalliope Immigration
,bringing a wealth of knowledge and expertise to the Canadian immigration process. As a <strong>
Regulated Canadian Immigration Consultant (RCIC-IRB ) </strong>, she has extensive experience
handling a wide range of immigration cases, from temporary residency pathways to permanent
residency and family sponsorships. She is an active member in good standing with the College of
Immigration and Citizenship Consultants and also a registered member of the Canadian
Association of Professional Immigration Consultants (CAPIC).
                </p>
                <p className="mb-5 text-base text-[#F4F4F4] dark:text-dark-6">
                She has completed, post graduation studies in Canadian Immigration Law from Queens
University,Canada. She also holds a Masters in International studies. With a passion for helping
individuals and families achieve their dreams of immigrating to Canada, Merilo is known for a
client-centric approach that combines professionalism, integrity, and deep knowledge of
immigration law. Having personally guided clients through the complexities of the Canadian
immigration system, she is dedicated to providing personalized, results-oriented solutions.
                </p>
                <p className="mb-5 text-base text-[#F4F4F4] dark:text-dark-6">
                Whether you’re applying for a visa, work permits, permanent residency or navigating the
appeals process, Merilo ensures that each client receives the highest standard of service and
support throughout their journey. With her expert guidance, you can be confident that your
immigration process will be handled with care and expertise.
                </p>
               
               
             
            
              </div>
            </div>
    <div className="w-full px-4 lg:w-3/12 ">
              <div className="flex items-center -mx-3 sm:-mx-4">
                
                <div className="w-full px-3 sm:px-4 xl:w-1/4">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                 
                  </div>
                </div>
              </div>
           
              <h6 className="mb-6  border-b flex items-center sm:text-[14px]/[18px] font-normal text-white dark:text-dark-6">
                   Certification
                 
                  </h6>
                <div className="flex gap-6 mb-8 justify-center lg:justify-start ">
               
               <Image className="rounded" src={logocip} alt="" width={120} height={120}/>
               <Image src={rcic} alt="" width={160} height={120}/>
             </div>
               
            </div>
            
           
</div>

</div>
    
    </>
    






)
}