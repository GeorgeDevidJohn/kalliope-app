import work_permit from "../../../../public/services/workpermit.webp";
import Image from "next/image";
export default function Work(){
    return(
        <>
         <section
      className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32"
>
      <div
        className="flex w-full pt-20 max-w-2xl items-center justify-center justify-self-center rounded-2xl mt-20 md:mb-20  lg:justify-self-end"
      >
        <Image
          src={work_permit}
          alt=""
          
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col mt-20 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
        <div className="ten text-[34px] font-medium uppercase">
  <h1 className="text-justify  before:block before:bg-[#c50000] before:rounded before:h-[0.25rem] before:w-[42px]">
  Work Permit
  </h1>
</div>

          <h4 className="text-lg font-normal text-left tracking-tight text-slate-500">
          A Work Permit in Canada is an official document that allows foreign nationals to
work legally in the country for a specified employer and duration. It is a temporary
authorization subject to certain conditions and restrictions.
              <br></br>
              <br></br>
              <ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p><strong>Employer-Specific Work Permit (LMIA-Based):</strong> This is a closed work permit allowing individuals to work only for a specific
    employer in Canada.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Open Work Permit : </strong> This permit allows individuals to work for any employer in Canada, with
    exceptions for certain occupations.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Post-Graduation Work Permit (PGWP) :</strong> International students who have completed an eligible program at a Designated
Learning Institution (DLI) in Canada may be eligible to apply for a Post-
Graduation Work Permit.</p>
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