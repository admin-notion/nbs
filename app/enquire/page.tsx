import FormsPage from "../components/reusableComponents/formsPage";

const Enquire = () => {
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                <div className="">
                    <div className="border border-white md:py-28  mb-10 ">
                        <h1 className="md:ml-16 text-black md:text-4xl mb-4  md:text-left  text-4xl  md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Contact  Notion Business Solutions
                        </h1>
                        <p className="md:ml-16 md:w-2/3 text-lg">Let&apos;s get in touch and explore the opportunities together.
                        </p>
                    </div>
                    <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                        <div className=" text-black md:text-3xl mb-4 md:mt-16 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            We&apos;re here to assist you!
                        </div>
                        <p className="md:w-3/4 text-lg">We can help you accelerate your business goals, if you work
                            in software development or use technology in your company
                            to solve business problems.</p>
                    </section>

                </div>
                <FormsPage />
            </main >
        </>
    );
}

export default Enquire;