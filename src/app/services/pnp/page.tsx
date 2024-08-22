import { Button } from "@radix-ui/themes";
import study_permit from "../../../../public/services/image.png";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function PNP(){
    return(
        <>
         <Navigation />
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
    Study Permit
  </h1>
</div>

          <h4 className="text-lg font-normal text-left tracking-tight text-slate-500">
          A Canadian Study Permit is a document that allows foreign nationals to study at
              an approved educational institution in Canada. To apply, you must have been
              accepted to study at a Designated Learning Institution (DLI)
              <br></br>
              <br></br>
              You will not receive your study permit until you arrive at a Canadian Port of Entry
              (POE). Upon approval, you will be issued a Port of Entry Introduction Letter,
              which you must present to an immigration official in Canada to obtain your study
              permit.
              <br></br>
              <br></br>
              Eligible International Students can work up to 24 hours a week along with their
              studies starting September 2024.
          </h4>
        </div>
        <div>
         
        </div>
      </div>
    </section>
    <Footer/>
        </>
    );
};