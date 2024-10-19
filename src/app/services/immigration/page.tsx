import canadavisa from "../../../../public/services/canadaimigration.jpg";
import Image from "next/image";
export default function Immigration(){
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
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col mt-20 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
        <div className="ten text-[34px] font-medium uppercase">
  <h1 className="text-justify  before:block before:bg-[#c50000] before:rounded before:h-[0.25rem] before:w-[42px]">
  Immigration Pathways
  </h1>
</div>

          <h2 className="text-lg font-normal text-left tracking-tight text-slate-500">
          
              <ul className="space-y-4">
 
   
    <h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
    Express Entry
</h2> 
    <p> Express Entry is an online system that manages Canada’s immigration
application intake and provides a pathway to permanent residency. Eligible
candidates can create an Express Entry profile, valid for 12 months, and may
receive an Invitation to Apply (ITA) from the Canadian Federal Government or a
Letter of Invitation from a province. The system includes the following programs:</p>

<ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p><strong>Federal Skilled Worker Program:</strong> For skilled workers with foreign work
    experience who wish to immigrate to Canada permanently.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Federal Skilled Trades Program:</strong> For skilled workers with qualified work
    experience in specific trade occupations.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Canadian Experience Class:</strong> For skilled workers with Canadian work
    experience seeking permanent residency.</p>
  </li>
</ul>

  


 
</ul>
          </h2>
        </div>
        <div>
         
        </div>
      </div>
    </section>
    <section
      className="flex flex-row  justify-center text-center  md:py-4  max-w-screen-2xl m-auto w-full  px-3"
>
      
      <div className=" my-10 gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="md:px-40 px-2 gap-6">
       

          <div className="text-lg font-normal text-left tracking-tight text-slate-500">
          
              <ul className="space-y-4">
 
   
   


  
<h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
Provincial Nominee Program (PNP)
</h2> 
    <p> Provincial Nominee Programs allow Canadian provinces and territories to
nominate candidates for permanent residency who wish to settle in a specific
province. These programs are tailored to meet the economic and social goals of
each province, targeting individuals with specific skills, education, and work
experience.</p>

<br></br><br></br> 

    <h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
    Atlantic Immigration Program
</h2> 

    <p> The Atlantic Immigration Program is an employer-driven initiative designed to
attract skilled workers to the Atlantic Canada region. Applicants must have a job
offer from a designated employer and a settlement plan.</p>
<br></br><br></br>

<h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
Rural and Northern Immigration Pilot
</h2> 

    <p> This community-driven program allows participating communities to attract and
retain skilled workers by matching them with local job vacancies. Successful
candidates who obtain permanent residency can move to and work in these
communities.</p>


<br></br><br></br>
<h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
Home Child Care Provider/Home Support Worker Pilot Program
</h2> 

    <p>These pilot programs enable qualified caregivers and their families to come to
    Canada with the goal of becoming permanent residents.</p>

</ul>
<br></br>
<br></br>
<h2 className="text-s md:text-l pl-2 my-2 border-l-4  font-sans font-bold border-red-600  dark:text-gray-200">
Family Class Sponsorship
</h2> 
    <p> The Family Class Sponsorship program allows Canadian citizens and permanent
residents to sponsor close family members for permanent residency. This
program is designed to reunite families in Canada.</p>
<br></br>
<ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p><strong>Spouse or Common-Law Partner:</strong> Sponsors can bring their legally
    married spouse or common-law partner to Canada.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Dependent Children:</strong> Parents can sponsor their dependent or adopted
    children for permanent residency.</p>
  </li>
  <li className="flex items-start">
    <span className="text-red-600 mr-2">►</span>
    <p> <strong>Parents and Grandparents:</strong> Canadian citizens can sponsor their parents
    and grandparents under the Parents and Grandparents Sponsorship Program.</p>
  </li>
</ul>
          </div>
        </div>
        <div>
         
        </div>
      </div>
    </section>
        </>
    );
};