import FormsPage from "../components/reusableComponents/formsPage";

const Policy = () => {
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <div className="pt-16  md:ml-16 ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Policy Privacy
                    </h1>
                    <p className=" md:w-2/3 text-lg">We prioritize the protection of your privacy.
                    </p>

                    <p className=" md:w-2/3 text-lg md:mt-16">We respect your right to privacy. We provide this notice outlining our online information practices and your options about data collection and usage in order to better protect it. On our homepage and anytime personally identifiable information is asked, this notice is easily accessible.
                    </p>

                    <div className=" text-black md:text-3xl mb-4 md:mt-16 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        The Information We Collect
                    </div>
                    <p className="md:w-3/4 text-lg">This notice applies to all information gathered or provided through our website. On some pages, you can register to receive resources and submit requests. The following data is gathered: Name, Company Name, Email, Phone Number, Address, City, State, and Message/Your Query are all required. </p>

                    <div className=" text-black md:text-3xl mb-4 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Our utilization of information
                    </div>
                    <p className="md:w-3/4 text-lg">We dont share your information with outside parties unless its necessary to complete a transaction; we only use it for that purpose. We do not utilize your information for our own benefit. Email addresses are kept private and are only used for correspondence. You can choose to receive updates and newsletters. Your personal data is kept private.</p>
                    <div className=" text-black md:text-3xl mb-4 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Our Dedication to Ensuring Data Security
                    </div>
                    <p className="md:w-3/4 text-lg">To maintain data integrity and prevent unauthorized access, we employ robust physical, electronic, and managerial protocols to safeguard the information collected online.</p>
                    <div className=" text-black md:text-3xl mb-4  mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Ways to Access and Rectify Your Information
                    </div>
                    <p className="md:w-3/4 text-lg">To maintain data integrity and prevent unauthorized access, we employ robust physical, electronic, and managerial protocols to safeguard the information By contacting us, you can obtain information about the personally identifiable data we gather and keep on file online. This procedure is used by us to improve the security of your data. You can correct any factual inaccuracies you find by submitting a request that is backed up by reliable information. Furthermore, before to providing access or making changes, we will authenticate your identity in order to protect your privacy and security. online.</p>
                </div>
                <FormsPage />
            </main>
        </>
    );
}

export default Policy;