import FormsPage from "../components/reusableComponents/formsPage";

const Careers = () => {
    return (
        <>
            <main className="max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <h1 className="ml-8  md:ml-16 md:mt-20 text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                    Careers
                </h1>
                <p className="ml-8  md:ml-16  md:w-2/3 text-lg">We offer opportunities and support to enable you to build your dream career where you can accomplish great things and keep challenging yourself for more in an open and collaborative work culture.
                </p>
                <FormsPage />
            </main>
        </>
    );
}

export default Careers;