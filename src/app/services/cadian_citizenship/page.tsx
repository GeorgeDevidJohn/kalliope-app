import { Button } from "@radix-ui/themes";
import citizen from "../../../../public/services/citizencanada.jpg";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function Canadian_citizen(){
    return(
        <>
    <section
      className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32"
>
      <div
        className="flex w-[96%] pt-20 max-w-2xl items-center justify-center justify-self-center rounded-2xl mt-20 md:mb-20  lg:justify-self-end"
      >
        <Image
          src={citizen}
          alt=""
          
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col mt-20 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
        <div className="ten text-[34px] font-medium uppercase">
  <h1 className="text-justify  before:block before:bg-[#c50000] before:rounded before:h-[0.25rem] before:w-[42px]">
  Canadian Citizenship
  </h1>
</div>

          <h4 className="text-lg font-normal text-left tracking-tight text-slate-500">
          Canadian Citizenship is the legal status that grants individuals certain rights,
privileges, and responsibilities within Canada. It can be acquired through birth,
descent, or naturalization.
              <br></br>
              <br></br>
              
          </h4>
        </div>
        <div>
         
        </div>
      </div>
    </section>

        </>
    );
};