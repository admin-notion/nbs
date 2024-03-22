import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";
const Management = () => {
    const faqs = [
        {
            title: "What are the costs associated with application maintenance services?",
            text: "The platform, complexity, and size of the application are some of the elements that affect the cost of maintenance and support for that program. To find out how much your application will cost, get in touch with our experts. To produce a thorough report on errors and problems that need to be fixed, we will evaluate and test a variety of parameters.",
            active: false,
        },
        {
            title: "What are the available hiring models for application maintenance services?",
            text: "For application maintenance services, we offer two engagement models: time-based and fixed price. The one that best meets your demands can be chosen.",
            active: false,
        },
        {
            title: "What categories of application management services are available?",
            text: "As part of our application performance management capabilities, we provide an extensive range of application maintenance and support services. Version updates, additions, error tracking, debugging, technical troubleshooting, offshore product maintenance, performance monitoring, performance testing, QA testing, and more are among them.",
            active: false,
        },
        {
            title: "What advantages can we expect from application management services?",
            text: <ul className=" list-decimal">
                <li> Better User Experiences: creating customized interactions.</li>
                <li>Rapid bug fixes and patces: constant upkeep and prompt response.</li>
                <li>Low downtime and controlled disruptions are hallmarks of smooth operations.</li>
            </ul>,
            active: false,
        },

    ]
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" ml-8 py-16 md:py-28 mb-10  md:ml-16 text-black ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Management Services
                    </h1>
                    <p className="mb-16 text-lg md:w-3/4">Stay aligned with evolving business needs through Enterprise Application Management.
                    </p>
                    <div>
                        <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                    </div>
                </section>
                <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Enhancing Application Agility, Efficiency, and Uptime through
                        Application Lifecycle Management.
                    </h1>
                    <p className=" text-black pb-4 md:w-3/4 text-lg mr-4">
                        Optimize application productivity, usability, efficiency, and speed by transforming IT environments with enterprise application management that combines automation, analytics, devops, cloud computing, and agile methodologies.

                    </p >
                    <p className=" text-black md:w-3/4 text-lg">Performance monitoring, analysis, testing, incident and patch management configuration, and enhancements are all included in our application management services, which cover the full lifecycle of application maintenance and support. Businesses rely on our extensive knowledge in application maintenance and support, which is backed by our Center of Excellence, tried-and-true procedures, and cutting-edge frameworks. Our goal is to improve stability, operational efficiency, and agility while lowering expenses, risks, and total cost of ownership .</p>
                </section>
                <section className=" md:ml-16 md:mt-20 mt-10 text-black">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl  font-semibold md:w-3/4 font-['Urbanist'] leading-normal md:leading-snug  ">
                        Agile Application Management Services to Inspire Innovation and Change.
                    </h1>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 md:pr-16 pt-10 gap-5 pb-16">
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Application Maintenance and Support
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">Application Troubleshooting & Tuning</li>
                                <li className="text-lg"> Performance Testing & Monitoring</li>
                                <li className="text-lg">Version Upgrades & Enhancements</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                QA & Testing
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">Functional Testing</li>
                                <li className="text-lg">    Unit, API, & UI Testing</li>
                                <li className="text-lg">    Manual & Automation Testing</li>
                                <li className="text-lg">  Regression Testing</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Enhancements and Optimization
                            </div>
                            <ul className=" px-10 list-decimal ml-6  ">
                                <li className="text-lg">New Feature Development and Integration
                                </li>
                                <li className="text-lg">Tool Configuration for Application Testing</li>
                                <li className="text-lg">Issue and Slowdown Detection and Solution</li>
                                <li className="text-lg">Software Integration and Application Re-Architecture</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Application Security Management
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">Penetration Testing</li>
                                <li className="text-lg">    24×7 Monitoring</li>
                                <li className="text-lg">Misconfiguration and Vulnerability Testing</li>
                                <li className="text-lg">Vulnerability Reports</li>
                            </ul>
                        </div>
                    </div>
                </section >
                <section className="md:pl-16 md:pt-16 mt-10 bg-black text-white">
                    <h1 className=" mx-6  md:mx-0 md:text-4xl mb-6  md:text-left  text-3xl md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        What is the importance of Enterprise Application Management?
                    </h1>
                    <p className=" mx-6  md:mx-0 pb-6 md:w-1/2 text-lg mr-4">
                        Supplying the best possible combination of staff, processes, and technology to manage and control business applications.

                    </p >

                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 pb-16 md:mr-16">
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> Experienced and certified specialists in both legacy and emerging technologies.</p>
                        </div>
                        <div className="border border-solid border-whi px-10 py-10">
                            <p className="text-lg ">Guaranteeing application availability and reliability through application performance management services.</p>
                        </div>
                        <div className="border border-solid border-whi px-10 py-10">
                            <p className="text-lg">Tailored service offerings supported by maintenance and support.</p>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="ml-8 md:ml-16 md:mt-20 mt-10 mr-4 text-black">
                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
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

export default Management;