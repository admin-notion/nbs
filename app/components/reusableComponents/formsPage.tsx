const FormsPage = () => {
    return (
        <>
            <div>
                <div className="max-w-7xl md:ml-6 md:mt-10  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                    <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Is your business prepared to take a leap into the future?
                    </h1>
                    <div className=" text-lg font-medium leading-relaxed pt-3 text-black">Hola!  I am :
                        <input
                            className="ml-4 border-b border-black w-96 outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            placeholder=""
                        />
                    </div>


                    <div className=" text-lg font-medium leading-relaxed pt-3 text-black"> Email :
                        <input
                            className="ml-4 border-b border-black w-96 outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder=" "
                        />
                    </div>
                    <div className=" text-lg font-medium leading-relaxed pt-3 text-black">Mobile :
                        <input
                            className=" ml-4 border-b border-black w-96 outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                            type="tel"
                            name="tel"
                            id="tel"
                            autoComplete="tel"
                            placeholder=" "
                        />
                    </div>

                    <div className=" text-lg font-medium leading-relaxed pt-3 text-black">Company :
                        <input
                            className="ml-4 border-b border-black w-96 outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                            type="text"
                            name="text"
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
                            <textarea
                                id="about"
                                name="about"
                                className=" block w-96 md:h-28   rounded-sm  px-1.5 py-1.5 text-black outline outline-black  sm:text-sm sm:leading-relaxed"
                            ></textarea>
                        </div>
                    </div>
                    <div className="relative flex gap-x-3 mt-10">
                        <div className="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div className="text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">Get strategy guides, industry insights, trend reports, and more delivered straight to your email by subscribing to our resources!</label>

                        </div>
                    </div>


                    <button
                        type="button"
                        className=" mt-10 rounded-sm bg-gray-300  text-black text-center text-base font-medium font-['Poppins'] leading-tight px-2.5 py-1.5 shadow-sm  hover:text-[#fe2712] md:w-44 md:h-12 w-32 h-11 "
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
        </>
    );
}

export default FormsPage;