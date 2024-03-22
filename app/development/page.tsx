import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";

const Development = () => {
    const faqs = [
        {
            title: "Which technologies are used by your application development company to make unique apps?",
            text: "The technologies used in the development of custom applications differ from project to project since they are based on the needs and desired features or functionalities of the customer. Because we are able to supply the proper blend of necessary technologies, using our application development services becomes a perfect alternative. We cover a wide stack of technologies, from legacy to upcoming ones.",
            active: false,
        },
        {
            title: "What is the pricing for custom application development outsourced from a web application development company?",
            text: "The cost of developing a custom application depends on various factors such as the type of application, integration of third-party features, project scope, engagement model, technological stack, and other relevant aspects.",
            active: false,
        },
        {
            title: "What are the business benefits of enterprise application development?",
            text: "Among the many advantages of creating an enterprise application for your company are better customer service, more efficiency, higher sales and return on investment, elevated brand awareness, and increased customer engagement. To build such solutions, a bespoke application development business offers an extensive array of services.",
            active: false,
        },
        {
            title: "Is it possible to request custom application development services for minor adjustments?",
            text: "Of course, You can work with our skilled developers if you already have an application and need professional help with small changes. Using our professional services, we assess the functionality as it exists now and the expectations of our clients to create a roadmap, which is then carefully designed at our center of competence.",
            active: false,
        },

    ]
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" ml-8 py-16  md:ml-16 text-black md:py-28 mb-10">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Application Development
                    </h1>
                    <p className="mb-8 text-lg">Enhance Operational Efficiency and Redefine Processes
                        through Enterprise Application Development
                    </p>
                    <div>
                        <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                    </div>
                </section>
                <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Delivering Efficient Results with Flexible, Secure, and Scalable Solutions
                    </h1>
                    <p className="  text-black pb-4 md:w-3/4 text-lg mr-4">
                        Utilize the potential of cutting-edge technology, cloud computing, and UX techniques to equip your company with innovative apps that are designed to satisfy market and business needs and promote growth.
                    </p >
                    <p className="md:w-3/4 text-lg  text-black">Scalable software system and application design and development are made easier by NBS Application Development services. We get best results by doing a thorough assessment of our clients&apos; technology environment and business requirements. Every application goes through a rigorous process that includes requirement collecting, MVP design, coding, quality assurance, implementation, and debugging..</p>
                </section>


                <section className=" md:ml-16 md:mt-16 mt-6 text-black">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left md:w-3/4 text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Creating forward-looking Customer, Enterprise, Mobile, and Cloud Applications
                    </h1>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 md:pr-16 pt-10 gap-5 pb-16">
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className=" px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Technology Consulting
                            </div>
                            <ul className=" px-10 list-decimal ml-6  ">
                                <li className="text-lg">Application Development Consulting</li>
                                <li className="text-lg">   Architectural Consulting</li>
                                <li className="text-lg">  Cloud Consulting</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4  md:text-left  text-3xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Application Design
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">UI/UX Design</li>
                                <li className="text-lg">   Responsive Web Design</li>
                                <li className="text-lg">   Mobile Design</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                Application Design
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">Custom Web Application Development</li>
                                <li className="text-lg">Cloud Application Development</li>
                                <li className="text-lg">Mobile Application Development</li>
                                <li className="text-lg">CMS Development</li>
                            </ul>
                        </div>
                        <div className="border border-solid border-black md:w-full w-full bg-white  py-10">
                            <div className="px-10 text-black md:text-3xl mb-2 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                API Integrations
                            </div>
                            <ul className="px-10 list-decimal ml-6  ">
                                <li className="text-lg">Custom API Development and Integration</li>
                                <li className="text-lg">   3rd Party API integration</li>
                                <li className="text-lg">   API Transformation</li>
                            </ul>
                        </div>
                    </div>
                </section >

                <section className=" md:pl-16 md:pt-16 mt-10 bg-black text-white">
                    <h1 className=" mx-6 md:mx-0 md:text-4xl mb-6 pt-6  md:text-left  text-3xl md:w-3/4 font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Why choose NBS for Enterprise Application Development Services?
                    </h1>
                    <p className=" mx-6 md:mx-0 pb-4 md:w-1/2 text-lg mr-4 mb-4">
                        we provide full-cycle application development services leveraging
                        emerging technologies, frameworks, APIs, and databases to unlock your
                        business&apos;s potential.

                    </p >

                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 md:mr-16  bg-black text-white">
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> Creative and innovative application development services in Java, JQuery, TypeScript, Swift, Angular, React, PHP,.Net, Python, and JavaScript.</p>
                        </div>
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg "> We utilize our proprietary framework – RAPADIT (Rapid Application Development with predefined time-tested frameworks) for delivering reliable web application development services..</p>
                        </div>
                        <div className="border border-solid border-white px-10 py-10">
                            <p className="text-lg"> Strategically integrate
                                emerging technologies
                                such as Cloud, Data Analytics,
                                AI, ML, Blockchain, and more.</p>
                        </div>
                        <div className="border border-solid border-white px-10 py-10 md:mb-20">
                            <p className="text-lg "> Proficient in cross-industry implementations utilizing flexible engagement models.</p>
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
                    <FormsPage />
                </section>
            </main >
        </>
    );
}

export default Development;