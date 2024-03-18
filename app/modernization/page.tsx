import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";
const Modernization = () => {
    const faqs = [
        {
            title: "How much do services for modernizing outdated applications cost?",
            text: "The pricing for legacy application modernization services varies based on factors such as existing infrastructure, technology stack, business objectives, project scope, and chosen engagement model. Our modernization experts evaluate the current portfolio across various parameters to determine the appropriate strategy and technology stack for revitalizing the application.",
            active: false,
        },
        {
            title: "How can I access top-notch application modernization services?",
            text: "In order to deliver elite enterprise modernization services, our Division of Expertise develops a plan and timeline to direct work and distribute resources in an efficient and effective manner. Our experts create innovative applications using the best possible technological stack and tactics.",
            active: false,
        },
        {
            title: "What is the estimated timeline for completing the application modernization?",
            text: "Various factors, such as the complexity of the current infrastructure, the cloud platform chosen for transfer, the number of man-hours required, and more, affect the schedule for application modernization through our software modernization services. On the other hand, we guarantee that the modernization process will be finished as quickly as possible.",
            active: false,
        },
    ]

    return (
        <>
            <main className="max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" ml-8 py-16  md:ml-16 text-black">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Modernization Services
                    </h1>
                    <p className="mb-16 text-lg">Enhance and rejuvenate existing portfolios for optimal performance.
                    </p>
                    <div>
                        <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                    </div>
                </section>
                <section className="ml-8 md:ml-16 text-black ">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl md:w-2/3  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Through the expertise of our enterprise application modernization
                        services, uncover true business value.
                    </h1>
                    <p className="pb-4 md:w-1/2 text-lg mr-4">
                        To improve present portfolios, embrace strategies, efforts, and technology that look forward. Reducing business application legacy significantly lowers risks, improves agility, and yields better user experiences.

                    </p >
                    <p className="pb-4 md:w-1/2 text-lg">At NBS, we enable companies to add features that are ready for the future and modernize their portfolios to unlock true commercial value. Our Center of Excellence develops application modernization plans and roadmaps via thorough portfolio reviews.</p>

                    <p className="md:w-1/2 text-lg">Utilizing advancements in Cloud, Web, Mobility, Blockchain, and Analytics, our enterprise application modernization services facilitate swift innovation and effective scaling for enterprises, all while maintaining uninterrupted business operations.</p>
                </section>
                <section className="ml-8 md:ml-16 md:mt-20 mt-10 text-black">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl md:w-2/3  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Empowering organizations to leverage the benefits of
                        innovation through our legacy application modernization services.
                    </h1>
                    <div className=" text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Consulting
                    </div>
                    <ul className=" list-decimal ml-6  ">
                        <li className="text-lg">Application Assessment</li>
                        <li className="text-lg">      Platform Upgradation or Migration Consultation</li>
                        <li className="text-lg">    Migration and Adoption Strategies</li>
                        <li className="text-lg">  Application Re-Architecture Consultation</li>
                    </ul>

                    <div className=" text-black md:text-3xl mb-2 mt-4  md:text-left  text-3xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Technology Modernization
                    </div>
                    <ul className=" list-decimal ml-6  ">
                        <li className="text-lg">Feature and Module Modernization</li>
                        <li className="text-lg">    Legacy Application Modernization</li>
                        <li className="text-lg">    Cloud Migration</li>
                        <li className="text-lg"> Application Re-Platforming</li>
                    </ul>
                    <div className=" text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Architecture Modernization
                    </div>
                    <ul className=" list-decimal ml-6  ">
                        <li className="text-lg">Microservices API Model Creation</li>
                        <li className="text-lg">      Service Orchestration</li>
                        <li className="text-lg">    Cloud-based Architecture for Platform Neutrality and Flexibility</li>
                        <li className="text-lg">    Service Aggregation and Consolidation</li>
                    </ul>
                    <div className=" text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        UI/UX Modernization
                    </div>
                    <ul className=" list-decimal ml-6  ">
                        <li className="text-lg">Design Personalization</li>

                        <li className="text-lg">   User and Device Aware Layout</li>
                        <li className="text-lg">    Content Contextualization</li>
                        <li className="text-lg">   GUI Modernization</li>
                    </ul>
                </section >
                <section className=" md:pl-16 md:pt-16 mt-10 bg-black text-white">
                    <h1 className=" md:text-4xl mb-6 mx-6 md:mx-0 pt-6 md:pt-0 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Why Legacy Application Modernization ?
                    </h1>
                    <p className="pb-4 mx-6 md:mx-0 md:w-1/2 text-lg mr-4">
                        Revitalize your legacy business applications by harnessing modern technologies.

                    </p >

                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 md:mr-16 pb-16">
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> Our in-house developed RAPADIT (Rapid Application Development using pre-established, tried-and-true frameworks) framework.</p>
                        </div>
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> Expert advice on application modernization is offered by an area of specialization.</p>
                        </div>
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> Tailored service offerings supported by maintenance and support.</p>
                        </div>

                    </div>
                </section>
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

export default Modernization;