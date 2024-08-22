import { Button } from "@radix-ui/themes";
import study_permit from "../../../../public/services/image.png";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function Family(){
    return(
        <>
       
    <section
      className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32"
>
      <div
        className="flex w-full pt-20 max-w-2xl items-center justify-center justify-self-center rounded-2xl mt-20 md:mb-20  lg:justify-self-end"
      >
        <Image
          src={study_permit}
          alt=""
          
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col mt-20 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
        <div className="ten text-[34px] font-medium uppercase">
  <h1 className="text-justify  before:block before:bg-[#c50000] before:rounded before:h-[0.25rem] before:w-[42px]">
  Family Class Sponsorship
  </h1>
</div>

          <h4 className="text-lg font-normal text-left tracking-tight text-slate-500">
          The Family Class Sponsorship program allows Canadian citizens and permanent
            residents to sponsor close family members for permanent residency. This
            program is designed to reunite families in Canada.
              <br></br>
              <br></br>
              <ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p><strong>Spouse or Common-Law Partner :</strong> Sponsors can bring their legally married spouse or common-law partner to Canada.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Dependent Children:</strong> Parents can sponsor their dependent or adopted children for permanent residency.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Parents and Grandparents:</strong> Canadian citizens can sponsor their parents and grandparents under the Parents and Grandparents Sponsorship Program.</p>
  </li>
</ul>
          </h4>
        </div>
        <div>
         
        </div>
      </div>
    </section>
   </>
    );
};