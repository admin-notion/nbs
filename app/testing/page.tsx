import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";
const Testing = () => {
    const faqs = [
        {
            title: "Do we need QA software testing?",
            text: "Indeed, QA software testing provides the confidence to launch your product into the market securely. Without meticulous QA, the software's chances of success may diminish.",
            active: false,
        },
        {
            title: "Can you ensure that the software will be entirely free of bugs after release through QA software testing?",
            text: "Because user behavior is unpredictable and total test coverage is impractical, achieving 100% bug-free software is a fantasy. However, we promise to produce software that is nearly bug-free thanks to thorough QA testing.",
            active: false,
        },
        {
            title: "What types of software testing does a software testing company offer?",
            text: "we offers an extensive range of services, including functional testing, black box testing, usability testing, performance testing, and more.",
            active: false,
        },
        {
            title: "When is the appropriate time to instruct the software testing services company to cease testing my software?",
            text: "Working with a software testing services provider is advantageous since software testing is a continuous process. Consistent testing guarantees a flawless user experience. You can temporarily halt testing once test cases are finished, bug rates drop, and beta/alpha testing is over.",
            active: false,
        },
        {
            title: "Can I hire QA specialists full-time through software testing outsourcing as I don't have an internal software testing department?",
            text: "Yes, outsourcing software testing is an option. We have seasoned QA specialists with a ton of software testing experience that are hiring full-time.",
            active: false,
        },

    ]
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" firstContainer w-full md:py-10 text-black">
                    <div className=" ml-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Software Testing Services
                        </h1>
                        <p className="mb-16 text-lg">Ensure Unmatched Quality. Elevate Customer Experience.

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>

                <section className="ml-8 md:ml-16  text-black  md:mt-28 ">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl w-80 md:w-2/3  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Use software testing and quality assurance to provide a fast time
                        to market and an outstanding user experience.
                    </h1>
                    <p className="pb-4 md:w-2/3 text-lg mr-4">
                        Debugging with competence is necessary to ensure a perfect user experience without sacrificing performance or scalability. Potential failures are recognized and managed by insight-driven quality assurance. To translate organizational efforts into error-free solutions, selecting the appropriate QA and testing partner is essential.
                    </p >
                    <p className="md:w-2/3 text-lg">As a software testing business, we assist clients in customizing their development cycles to ensure smooth operations and functional assurance. Our licensed professionals carry out thorough testing to get rid of mistakes and defects that could interfere with the functionality of the software. In order to provide error-free solutions, we tailor techniques based on business requirements. These strategies include strategic AI-based testing, non-functional and functional testing, and a DevOps methodology.</p>
                </section>
                <section>
                    <div className="my-10 py-16  md:pl-16  bg-black text-white ">
                        <div className="mx-6 md:mx-0 md:text-4xl mb-8  md:text-left  text-4xl w-80 md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Services Offerings <br /><span className="md:w-3/4"> Ensuring superior quality and accelerating time-to-market with QA testing services.</span>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 md:mr-16">
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-10  md:text-left  text-4xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Test Consulting
                                </div>
                                <p className=" text-lg">Using our Test Advisory Service, you can improve software maturity levels and meet software objectives. Test Centers of Excellence are also established with our help, carefully designed to match your future roadmap and present company demands. We collaborate closely to establish the goals, schedule, and framework for your TCoE.
                                </p>

                            </div>
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-10  md:text-left  text-4xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Data Testing
                                </div>
                                <p className=" text-lg">Strategic Performance/Security Testing, Business Functionality Testing, Audit Report/Data Quality Report, and Automated ETL Data Validation can help prevent the loss of important data. We support ongoing testing of ETL pipelines to maintain the accuracy and dependability of data.
                                </p>

                            </div>
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-10  md:text-left  text-4xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Functiona &
                                    Non-Functional Testing
                                </div>
                                <p className="text-lg">Perform both functional and non-functional testing, such as end-to-end cloud implementation testing and data security testing. Within API/Web Services Testing, we provide Unit, Load, Security, Runtime Error, and Web UI Testing. With our globalization and localization testing services, we enable businesses to grow internationally through linguistic, cosmetic, and functional testing. To protect sensitive company data, we also provide ERP, CRM, BPSM Testing, and Test   Management Services.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="border border-black md:py-28  py-6 mb-10">
                    <div className=" ml-8 md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl w-80 md:w-3/4 font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Improved customer satisfaction, shorter time-to-market, better product
                            quality, and more operational efficiency are some of the business advantages
                            of QA and testing.
                        </h1>


                    </div>


                </section>
                <section className="pr-10 md:pr-0 bg-black text-white">
                    <div className="ml-8 md:ml-16 md:mt-16 pt-10 ">
                        <h1 className=" md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Business Benefits
                        </h1>
                    </div>
                    <p className="ml-8 md:ml-16 text-lg leading-snug">QA testing services improve automation and productivity to meet industry standards.</p>
                </section>

                <div className="bg-black text-white grid md:grid-cols-2 sm:grid-cols-1 md:pl-16 md:pr-16 pt-10 gap-5 pb-16">
                    <div className="border border-solid border-white md:w-full w-full bg-black  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Cost Saving
                        </div>
                        <p className=" px-10 w-96 text-lg">Businesses may find and fix defects early in the development process by employing QA and software testing, which will pay off in the long run.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Accelerated Delivery
                        </div>
                        <p className="px-10 w-96 text-lg">Achieving quicker software deployment while maintaining high standards of code quality.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10 md:text-3xl mb-4 md:mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Improves CSAT
                        </div>
                        <p className=" px-10 w-96 text-lg">Enhance customer satisfaction scores (CSAT) by providing intuitive software tailored to the target audience&apos;s needs.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4 md:mt-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Regulation Friendly
                        </div>
                        <p className="px-10 w-96 text-lg">Conduct thorough testing to ensure compliance with various regulations while maintaining standardized accessibility.
                        </p>
                    </div>
                </div>
                <section>
                    <div className="ml-8 md:ml-16 md:mt-20 mt-10 mr-4 text-black">
                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            FAQs
                        </h1>

                        <div className="divide-y divide-slate-200 text-black">
                            {faqs.map((faq, index) => (
                                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                                    {faq.text}
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </section>
                <FormsPage />
            </main >
        </>
    );
}

export default Testing;