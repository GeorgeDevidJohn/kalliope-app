"use client"
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import name from "../../public/home/logo_name.png";
import { ArrowBigLeft, BriefcaseBusiness, Cannabis, CarFrontIcon, ChevronDown, ChevronRight, ChevronUp, Earth, Files, GraduationCap, Home, Menu, Users } from "lucide-react";
import { PinBottomIcon } from "@radix-ui/react-icons";

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
        className="flex items-center  justify-between p-.5 lg:px-8 bg-white h-20 z-50 w-full fixed"
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
              className={mobileMenuOpen? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700":"hidden"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 mr-4"
                aria-hidden="true"
              />
            </button>
          <button
            type="button"
            className={!mobileMenuOpen? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700":"hidden"}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className="h-6 w-6 mr-4"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={
              pathname == "/home"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold leading-6 text-gray-500"
            }
          >
            Home
          </Link>

          {/* Services menu with submenus */}
          <div className=" relative">
            <button  onClick={() => handleToggle()} className="text-sm flex gap-2 font-semibold dark:text-white leading-6 text-gray-500 focus:outline-none">
            Services <ChevronDown className= {subMenuOpen ? "hidden":"block"}/> <ChevronUp className= {subMenuOpen ? "block":"hidden"}/>
            </button>
            <div className={ subMenuOpen ? "absolute w-[45rem] top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg":"hidden"}>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className=" flex items-center space-x-4  p-4">
          <Files color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              PNP
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Users color="#BD0C0C" className="ml-2 text-red" />
          
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            Family Sponsorship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Study Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Canadian Citizenship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-6 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Work Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Home color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Permanent Residency
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
 
</div>
            </div>
          </div>
          {/* End of Services menu with submenus */}

          <Link
            href="/about"
            className={
              pathname == "/about"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold  leading-6 text-gray-500"
            }
          >
            About us
          </Link>
          <Link
            href="/contact"
            className={
              pathname == "/contact"
                ? "text-sm font-bold leading-6 text-[#BD0C0C]"
                : "text-sm font-semibold leading-6 text-gray-500"
            }
          >
            Contact us
          </Link>
        </div>
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
                <Link
                  href="/home"
                  className={
                    pathname == "/home"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-[#BD0C0C]"
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  Home
                </Link>
                <div className=" relative">
            <button  onClick={() => handleToggle()}  className={ 
                    pathname == "/serviec"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base w-full flex items-center justify-between font-bold leading-7 text-[#BD0C0C]"
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 w-full flex items-center justify-between py-2 text-base font-bold leading-7 text-gray-500"
                  }>
            Services <ChevronRight className= {subMenuOpen ? "hidden":"block"}/> <ChevronUp className= {subMenuOpen ? "block":"hidden"}/>
            </button>
            <div className={ subMenuOpen ? "relative w-[30rem] top-full left-0 mt-1 bg-white":"hidden"}>
            <div className="grid grid-cols-1 grid-rows-7 gap-2">
            <div className=" flex items-center space-x-4  p-4">
          <Files color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              PNP
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Users color="#BD0C0C" className="ml-2 text-red" />
          
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            Family Sponsorship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Study Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Canadian Citizenship
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Work Permits
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Home color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Permanent Residency
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
        <div className=" flex items-center space-x-4  p-4">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
 
</div>
            </div>
          </div>
                <Link
                  href="/about"
                  className={
                    pathname == "/about"
                      ? "-mx-3 block rounded-lg px-3 py-2  text-base font-bold leading-7 text-[#BD0C0C] "
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className={
                    pathname == "/contact"
                      ? "-mx-3 block rounded-lg px-3 py-2 dark:text-gray-400 dark:hover:bg-gray-200 text-base font-bold leading-7 text-gray-900 hover:bg-gray-200"
                      : "-mx-3 block dark:text-gray-white rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  Contact us
                </Link>
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
