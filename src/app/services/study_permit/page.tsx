import { Button } from "@radix-ui/themes";
import study_permit from "../../../../public/services/image.png";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function StuyPermit() {
  return (
    <>
    <Navigation />
    <section
      className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32"
>
      <div
        className="flex w-full pt-20 max-w-2xl items-center justify-center justify-self-center rounded-2xl   lg:justify-self-end"
      >
        <Image
          src={study_permit}
          alt=""
          
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
          <p className="text-sm font-semibold uppercase text-slate-500">
            Tailframes
          </p>
          <h3 className="text-4xl font-semibold text-slate-950 md:text-5xl">
            Copy & Paste.
            <br />
            Its that simple.
          </h3>
          <h4 className="text-lg font-normal tracking-tight text-slate-500">
            Weve done it carefully and simply. The elements work well together to create stunning landings.
          </h4>
        </div>
        <div>
          <Button>
            Get a Template
          </Button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};