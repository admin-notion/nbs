import FormsPage from "../components/reusableComponents/formsPage";

const Enquire = () => {
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <div className="pt-16  md:ml-16 ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Contact  Notion Business Solutions
                    </h1>
                    <p className=" md:w-2/3 text-lg">Let's get in touch and explore the opportunities together.
                    </p>


                    <div className=" text-black md:text-3xl mb-4 md:mt-16 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        We're here to assist you!
                    </div>
                    <p className="md:w-3/4 text-lg">we can help you accelerate your business goals if you work
                        in software development or use technology in your company
                        to solve business problems. </p>


                </div>
                <FormsPage />
            </main>
        </>
    );
}

export default Enquire;