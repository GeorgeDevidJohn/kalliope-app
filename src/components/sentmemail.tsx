import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from './ui/use-toast';

export function SentMailToMe() {
    const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;
    const { toast } = useToast()
    const form = useRef<any>(null);
    
  
    const sendEmail = () => {
        
      if (
        form.current &&
        form.current[0]?.value !== undefined &&
        form.current[1]?.value !== undefined &&
        form.current[2]?.value !== undefined &&
        form.current[0]?.value !== "" &&
        form.current[1]?.value !== "" &&
        form.current[2]?.value !== ""
      ) {
        if (typeof YOUR_SERVICE_ID === 'undefined' ||  typeof YOUR_PUBLIC_KEY ==='undefined' || typeof YOUR_TEMPLATE_ID ==='undefined' ) {
          console.log(YOUR_SERVICE_ID  )
          throw new Error('Credentials is not defined');
        }
        emailjs
          .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
            publicKey: YOUR_PUBLIC_KEY,
          })
          .then(
            () => {
                toast({
                    description: "Your message has been sent.",
                  })
              form.current[0].value = " ";
              form.current[1].value  = " ";
               form.current[2].value = " ";
            },
            (error) => {
               
              form.current[0].value = " ";
              form.current[1].value  = " ";
               form.current[2].value = " ";
            },
          );
      } else {
        toast({
            description: "Fill all the details",
          })
      }
    };
  
    return (
      <>
      

      <form className="mt-6" ref={form} onSubmit={(e) => { e.preventDefault(); sendEmail(); }} >
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input name="user_name" type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input  name="user_email" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea  name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form> 
             
      </>
    );
  }

