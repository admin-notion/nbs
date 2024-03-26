"use client";
import { useCallback, useState } from "react";
import { handleSendEmail } from "../../utils/emailSender";

const FormsPage = () => {
  const [status, setStatus] = useState("");
  const onClick = useCallback(async (data: FormData) => {
    const { status } = await handleSendEmail(data);
    if (status == "ok") {
      setStatus("Thank You!!! We will reach out to you shortly");
    } else {
      setStatus("Something Went Wrong, we are checking!");
    }
  }, []);

  return (
    <>
      <div id="forms">
        <div className="max-w-7xl md:ml-6 md:mt-10  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
          <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
            Is your business prepared to take a leap into the future?
          </h1>
          <form action={onClick}>
            <div className=" text-lg font-medium leading-relaxed pt-3 text-black">
              Hola! I am :
              <input
                className="ml-4 border-b border-black md:w-96  outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                placeholder=""
              />
            </div>

            <div className=" text-lg font-medium leading-relaxed pt-3 text-black">
              {" "}
              Email :
              <input
                className="ml-4 border-b border-black md:w-96  outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder=" "
              />
            </div>
            <div className=" text-lg font-medium leading-relaxed pt-3 text-black">
              Mobile :
              <input
                className="ml-4 border-b border-black md:w-96   outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                required
                type="tel"
                name="tel"
                id="tel"
                autoComplete="tel"
                placeholder=" "
              />
            </div>

            <div className=" text-lg font-medium leading-relaxed pt-3  text-black">
              Company :
              <input
                className="ml-4 border-b border-black md:w-96   outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                type="text"
                name="company"
                id="text"
                placeholder=" "
              />
            </div>

            <div className="col-span-full ">
              <label
                htmlFor="about"
                className="block  text-lg font-medium leading-relaxed pt-6 text-black"
              >
                How can we help you ?
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="about"
                  name="message"
                  className=" pt-0 md:w-96  md:h-28 h-24 ml-4 md:ml-0 rounded-sm  px-1.5  text-black border border-black outline-none sm:text-sm sm:leading-relaxed"
                ></input>
              </div>
            </div>
            <div className="flex items-start mb-6 mt-6">
              <div className="flex items-center h-5">
                <input
                  name="terms"
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 md:w-3/4"
              >
                Get Strategy Guides, Industry Insights, Trend Reports And Many More Delivered Straight To Your Email By Subscribing To Our Resources!
              </label>
            </div>
            <button
              type="submit"
              className=" mt-10 rounded-sm bg-gray-300  text-black text-center text-base font-medium font-['Urbanist'] leading-tight px-2.5 py-1.5 shadow-sm  md:text-xl hover:text-[#fe2712] md:w-40 md:h-10 w-32 h-11 "
            >
              SUBMIT
            </button>
            <p>{status}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
