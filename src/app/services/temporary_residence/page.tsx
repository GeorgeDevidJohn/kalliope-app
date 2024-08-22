import { Button } from "@radix-ui/themes";
import canadavisa from "../../../../public/services/canadavisa.jpg";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function Temp(){
    return(
        <>
        
    <section
      className="grid grid-flow-row flex-wrap items-start gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full  px-3"
>
      <div
        className="flex w-[96%] pt-20 max-w-2xl items-start justify-start justify-self-center rounded-2xl mt-20 md:mb-20  lg:justify-self-end"
      >
        <Image
          src={canadavisa}
          alt=""
          
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col mt-20 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
        <div className="ten text-[34px] font-medium uppercase">
  <h1 className="text-justify  before:block before:bg-[#c50000] before:rounded before:h-[0.25rem] before:w-[42px]">
  Temporary Resident Visa (TRV)
  </h1>
</div>

          <h4 className="text-lg font-normal text-left tracking-tight text-slate-500">
          A Temporary Resident Visa (TRV) is a visa that allows foreign nationals to enter
Canada for a limited period. It is often required for individuals from non-visa-
exempt countries who wish to visit Canada for purposes such as tourism, family
visits, business, or study.
              <br></br>
              <br></br>
              <ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p><strong>Visitor Visa :</strong> The Visitor Visa is the most common type of TRV. It is intended for individuals
visiting Canada for tourism, family visits, or business. Typically issued for a
specific duration, visitors are expected to leave Canada before the visa expires.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Super Visa:</strong> The Super Visa is a specialized visa designed for parents and grandparents of
Canadian citizens and permanent residents. It allows them to visit their family in
Canada for an extended period. The Super Visa is a multi-entry visa, valid for up
to 10 years, permitting stays of up to five years per visit without the need to
renew status within that period.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Electronic Travel Authorization (eTA):</strong> An Electronic Travel Authorization (eTA) is a requirement for visa-exempt foreign
nationals traveling to Canada by air. The eTA is electronically linked to the
traveler’s passport and is valid for a specified period or until the passport expires,
whichever comes first. The eTA is primarily for short visits related to tourism,
business, or family. It is not applicable for individuals seeking to work or study in
Canada.</p>
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