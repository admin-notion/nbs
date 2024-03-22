import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";
const devops = () => {
    const faqs = [
        {
            title: "What is DevOps? How to choose a DevOps service provider?",
            text: "The goal of DevOps is to improve an organization's capacity to provide software, applications, and services quickly by combining tools and procedures. Give consideration to a DevOps service provider's track record and experience. ",
            active: false,
        },
        {
            title: "What tools do you use for DevOps?",
            text: "At NBS, we use a wide range of DevOps tools, including Docker, Jenkins, Puppet, Chef, Bitbucket, Vagrant, Ansible, Datadog, and others, utilizing our experience as a top DevOps consulting company.",
            active: false,
        },
        {
            title: "In which industries do you provide your services?",
            text: "They are not the same, no. Software development methodologies like Agile and DevOps are meant to make the software development life cycle (SDLC) more efficient. As a provider of DevOps services, NBS has experience with both Agile methodology and DevOps methods.",
            active: false,
        },
        {
            title: "What are the key components in DevOps implementation?",
            text: "Continuous integration (CI), continuous testing, continuous deployment, and continuous monitoring are all part of a regular workflow in a DevOps implementation. A DevOps maturity assessment also aids in understanding the requirements of the project and creating a plan in accordance with those demands.",
            active: false,
        },

    ]

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" firstContainer w-full md:py-10 text-black">
                    <div className=" ml-8 py-16 md:py-28 mb-10 md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl  md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            DevOps Services
                        </h1>
                        <p className="mb-8 text-lg">&quot;Accelerated Application Lifecycle Development and Operations Integrated&quot;

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        &quot;DevOps Services for Persistent Application Evolution&quot;
                    </h1>
                    <p className=" text-black pb-4 md:w-2/3 text-lg mr-4">
                        Streamline delivery pipelines, eliminate inefficiencies, and save costs with quick adoption of continuous delivery and integration. NBS Solutions enables full pipeline visibility, distributes responsibilities, and aligns goals.


                    </p >
                    <p className=" text-black md:w-2/3 text-lg">  Our DevOps approach closes the gap between development and operations, speeding up product releases. DevOps enhances collaborative workflows, automates tasks, and accelerates innovation.</p>
                </section>
                <section>
                    <div className="my-10 py-16 md:mt-16  md:pl-16  bg-black text-white ">
                        <div className="mx-6 md:mx-0 md:text-4xl mb-8  md:text-left  text-4xl  md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            DevOps Services Offerings
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 md:mr-16">
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-16  md:text-left  text-4xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Consulting Services
                                </div>
                                <p className=" text-lg">Through the help of our DevOps consulting services, you may improve the caliber of software builds, foster an agile culture, and accelerate application releases. We apply continuous integration and development using cloud capabilities to help businesses achieve their objectives while cutting expenses.
                                </p>

                            </div>
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-4  md:text-left  text-4xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Implementation &
                                    Containerization Services
                                </div>
                                <p className=" text-lg">Together with our DevOps Implementation & Containerization Services, you can install and manage container-driven workloads effectively, streamline end-to-end delivery pipelines, and accelerate product releases. Our development, operations, and containerization teams work together to create a strategic roadmap that gives companies a competitive edge.
                                </p>

                            </div>
                            <div className="border border-solid border-white px-10 py-10">
                                <div className=" md:text-3xl mb-4  md:text-left  text-4xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Continuous Integration &
                                    Continuous Delivery
                                </div>
                                <p className="text-lg">Create a solid continuous integration and delivery plan so you can release new versions of your product with confidence. Businesses can automate the whole product development cycle and construct a modernized CI/CD pipeline with our DevOps CI/CD Services.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="border border-black md:mt-16 md:py-28 py-6">
                    <div className="ml-8 md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl  md:w-3/4 font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            &quot;Eliminate silos while establishing a stable operating
                            environment through DevOps Implementation.&quot;
                        </h1>

                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-3xl  md:w-3/4  font-light font-['Urbanist'] leading-normal md:leading-snug  ">To Future-Proof Your Portfolio, Adopt Cloud, SaaS-based Business Models, and Cutting-Edge Technology Stacks.
                        </h1>
                    </div>

                    <div className="flex ml-8 md:ml-16 ">
                        <div >
                            <Link href="#forms">    <button className=" border md:mr-10 border-black px-6 h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black   text-white md:text-2xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></Link>
                        </div>

                    </div>
                </section>
                <section className="pr-10 md:pr-0 bg-black text-white mt-4">
                    <div className="ml-8 md:ml-16 md:mt-16 pt-10 ">
                        <h1 className=" md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Growth Engine
                        </h1>
                    </div>
                    <p className="ml-8 md:ml-16 md:w-3/4 text-lg leading-snug">Businesses are able to focus on strategic projects, decision-making, and expansion by managing applications well..</p>
                </section>

                <div className="bg-black text-white grid md:grid-cols-2 sm:grid-cols-1 md:pl-16 md:pr-16 pt-10 gap-5 pb-16">
                    <div className="border border-solid border-white md:w-full w-full bg-black  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Faster Deployment
                        </div>
                        <p className=" px-10  text-lg">DevOps aims to reduce the duration of the software development life cycle, enabling companies to quickly release their products.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Improved Collaboration
                        </div>
                        <p className="px-10 text-lg">DevOps fosters an environment conducive to mutual communication and collaboration between development and operational teams.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10 md:text-3xl mb-4 md:mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Promotes Agility
                        </div>
                        <p className=" px-10  text-lg">The scalability needed to gain a competitive advantage in the market is made possible by DevOps.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4 md:mt-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Early Defect Detection
                        </div>
                        <p className="px-10  text-lg">Early defect discovery is facilitated by the DevOps environment of continuous monitoring and testing.
                        </p>
                    </div>
                </div>
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

export default devops;