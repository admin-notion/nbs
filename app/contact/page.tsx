"use client";
import { SetStateAction, useState } from "react";

const currencyOptions = [
  { code: "INR", name: "Indian Rupee" },
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
];

const Contact = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleCurrencyChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCurrency(e.target.value);
  };
  const handleAmountChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setAmount(e.target.value);
  };

  return (
    <form action="">
      <div className="bg-[#232534] md:pt-32 pt-28">
        <div className="md:pl-80  pl-10 md:w-2/3 text-neutral-100 md:text-5xl text-3xl font-bold font-['Urbanist'] leading-normal">
          Let&apos;s transform your brand image:
        </div>

        <div className="md:pl-80 md:pt-16  pt-8 pl-10 text-neutral-100 md:text-3xl text-2xl font-medium font-['Poppins'] leading-normal">
          Get in touch
        </div>

        <div className="md:pl-80 pl-10 md:pt-16 pt-20">
          <input
            className="border-b border-zinc-600 w-2/3 outline-none  bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Hola! I am "
          />
        </div>

        <div className="md:pl-80 pl-10 md:pt-16 pt-8">
          <input
            className="border-b border-zinc-600 w-2/3 outline-none  bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email "
          />
        </div>

        <div className="md:pl-80 pl-10 md:pt-16 pt-8">
          <input
            className="border-b border-zinc-600 w-2/3 outline-none  bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
            type="tel"
            name="tel"
            id="tel"
            autoComplete="tel"
            placeholder="Mobile "
          />
        </div>

        <div className="md:pl-80 pl-10  md:pt-20 pt-20 text-neutral-100 md:text-3xl text-2xl font-medium font-['Poppins'] leading-normal">
          I am looking for
        </div>

        <div className="md:pl-80 pl-10 md:pt-16 pt-8">
          <input
            className="border-b border-zinc-600 w-2/3 outline-none  bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
            type="text"
            name="text"
            id="text"
            placeholder="Service "
          />
        </div>

        {/* <div
                    className="relative mb-3"
                    data-te-datepicker-init
                    data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-2/3 rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Select a date" />
                    <label
                        htmlFor="floatingInput"
                        className="pointer-events-none absolute left-3 top-0 mb-0  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Select a date</label>

                </div> */}

        <div className="md:pl-80 pl-10 md:pt-16 pt-8">
          <input
            className="bg-[#232534] border-b border-zinc-600 w-2/3 outline-none text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose date-input"
            type="text"
            placeholder="When do we start"
            onChange={(e) => console.log(e.currentTarget.type)}
            onFocus={(e) => {
              e.target.type = "date";
              e.target.classList.add("date-input-focused");
            }}
            onBlur={(e) => {
              e.target.type = "text";
              e.target.classList.remove("date-input-focused");
            }}
          />
          <style jsx>{`
            .date-input-focused::-webkit-calendar-picker-indicator {
              filter: invert(1);
            }
          `}</style>
        </div>

        <div className="md:pl-80 pl-10 md:pt-16 pt-8">
          <div className="flex items-center">
            <input
              className="border-b border-zinc-600 w-[540px] outline-none bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
              type="text"
              name="amount"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <select
              className="border-b md:pt-3 md:ml-10 border-zinc-600 w-20 outline-none bg-[#232534] text-neutral-400 text-lg font-normal font-['Poppins'] leading-loose"
              name="currency"
              id="currency"
              onChange={handleCurrencyChange}
              value={selectedCurrency}
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currencyOptions.map((currency) => (
                <option value={currency.code} key={currency.code}>
                  ({currency.code})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-span-full md:pl-80 pl-10 md:pt-16 pt-8">
          <label
            htmlFor="about"
            className="block  text-lg font-medium leading-relaxed pt-6 text-neutral-400"
          >
            More information about project
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              className=" block w-2/3 md:h-28 bg-[#232532]  rounded-sm  border-zinc-600 px-1.5 py-1.5 text-white outline outline-zinc-600  sm:text-sm sm:leading-relaxed"
            ></textarea>
          </div>
        </div>
        <div className="md:pl-80 pl-10   md:pt-16 pt-8">
          <button
            type="button"
            className=" md:mb-56 mb-16 rounded-sm bg-white text-gray-800 text-center text-base font-medium font-['Poppins'] leading-tight px-2.5 py-1.5 shadow-sm  hover:text-[#fe2712] md:w-44 md:h-12 w-32 h-11 "
          >
            Connect with us
          </button>
        </div>
      </div>
    </form>
  );
};
export default Contact;
