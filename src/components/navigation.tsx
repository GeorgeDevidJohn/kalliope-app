"use client"
import { useState, useEffect, useRef  } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import name from "../../public/home/logo_name.png";
import { ArrowBigLeft, BriefcaseBusiness, Cannabis, CarFrontIcon, ChevronDown, ChevronRight, ChevronUp, Earth, Files, GraduationCap, Home, Menu, Milestone, Users } from "lucide-react";
import { PinBottomIcon } from "@radix-ui/react-icons";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [subMenuOpen, setToggled] = useState(false);
  
    const handleToggle = () => {
      setToggled(!subMenuOpen);
    };


   
  return (
    <>
      <nav 
        className="flex items-center z-400 shadow-lg justify-between p-.5 lg:px-8 bg-white h-20 z-50 w-full fixed"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="" className="-m-1.5 p-1.5">
            <Image className="w-auto ml-2" height={48} src={name} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
        <button
              type="button"
              className={mobileMenuOpen? "mr-[-10rem] inline-flex items-center justify-center rounded-md p-2.5 text-gray-700":"hidden"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 "
                aria-hidden="true"
              />
            </button>
          <button
            type="button"
            className={!mobileMenuOpen? " mr-[-10rem] inline-flex items-center justify-center rounded-md p-2.5 text-gray-700":"hidden"}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className="h-6 w-6 "
              aria-hidden="true"
            />
          </button>
        </div>
        <Menubar>
        <MenubarMenu>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold leading-6 text-gray-500"
            }
          >
            Home          
          </Link>

          {/* Services menu with submenus */}
         
          <div className=" mt-[-4px] relative">
          <MenubarTrigger>
            <div className="text-sm flex gap-2 font-semibold dark:text-white leading-6 text-gray-500 focus:outline-none">
            Services <ChevronDown /> 
            </div>
            </MenubarTrigger>
          
            <MenubarContent>
              
            <div className={  "absolute w-[45rem] top-full left-0 mt-[-1rem]  bg-white rounded-lg shadow-2xl"}>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <a  href= "/services/immigration" className=" hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition rounded-2xl space-x-4 flex items-center space-x-4  m-4">
          <Milestone color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1 ">
            <p className="text-sm font-medium leading-none">
             Immigration Pathway
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </a>
        
        <div className=" flex items-center space-x-4  ">
        <a  href= "/services/study_permit" className=" hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition rounded-2xl space-x-4 flex items-center space-x-4  m-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Study Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
        <div className=" flex items-center space-x-4 ">
        <a  href= "/services/cadian_citizenship" className=" hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition rounded-2xl space-x-4 flex items-center space-x-4  m-4">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Canadian Citizenship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
        <div className=" flex items-center space-x-4 ">
        <a  href= "/services/work_permit" className=" hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition rounded-2xl space-x-4 flex items-center space-x-4  m-4">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-6 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Work Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
      
        <div className=" flex items-center space-x-4 ">
        <a  href= "/services/temporary_residence" className=" hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition rounded-2xl space-x-4 flex items-center space-x-4  m-4">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
 
</div>
            </div>
            </MenubarContent>
           
          </div>

        
          {/* End of Services menu with submenus */}

          <Link
            href="/aboutus"
            className={
              pathname == "/aboutus"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold  leading-6 text-gray-500"
            }
          >
            About us
          </Link>
          <Link
            href="/contactus"
            className={
              pathname == "/contactus"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold leading-6 text-gray-500"
            }
          >
            Contact us
          </Link>
        </div>
        </MenubarMenu>
        </Menubar>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6  mt-20 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
          <div className=" flow-root">
            <div className=" divide-y divide-gray-500/10">
              <div className="space-y-2 pb-6">
                <a
                  href="/"
                  className={
                    pathname == "/"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-[#BD0C0C]"
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500"
                  }
                >
                  Home
                </a>
                <div className=" relative">
            <button  onClick={() => handleToggle()}  className={ 
                    pathname == "/serviec"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base w-full flex items-center justify-between font-bold leading-7 text-[#BD0C0C]"
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 w-full flex items-center justify-between py-2 text-base font-bold leading-7 text-gray-500"
                  }>
            Services <ChevronRight className= {subMenuOpen ? "hidden":"block"}/> <ChevronUp className= {subMenuOpen ? "block":"hidden"}/>
            </button>
            <div className={ subMenuOpen ? "relative w-[20rem] top-full left-0 mt-1 bg-white":"hidden"}>
            <div className="grid grid-cols-1 grid-rows-5 gap-2">
            <div className=" flex items-center space-x-4  p-4">
            <a href= "/services/immigration" className=" flex items-center space-x-4 ">
          <Milestone color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Immigration Pathway
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
       
        <a href= "/services/study_permit" className=" flex items-center space-x-4  p-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Study Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </a>
        <div className=" flex items-center space-x-4  p-4">
        <a  href= "/services/cadian_citizenship" className=" flex items-center space-x-4 ">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Canadian Citizenship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
       
        <div className=" flex items-center space-x-4  p-4">
        <a  href= "/services/work_permit" className=" flex items-center space-x-4 ">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Work Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
          
        </div>
       
        <div className=" flex items-center space-x-4  p-4">
        <a  href= "/services/temporary_residence" className=" flex items-center space-x-4  ">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          </a>
        </div>
 
</div>
            </div>
          </div>
                <a
                  href="/aboutus"
                  className={
                    pathname == "/aboutus"
                      ? "-mx-3 block rounded-lg px-3 py-2  text-base font-bold leading-7 text-[#BD0C0C] "
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 "
                  }
                >
                  About us
                </a>
                <a
                  href="/contactus"
                  className={
                    pathname == "/contactus"
                      ? "-mx-3 block rounded-lg px-3 py-2 dark:text-gray-400  text-base font-bold leading-7 text-[#BD0C0C] "
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 "
                  }
                >
                  Contact us
                </a>
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navigation;
