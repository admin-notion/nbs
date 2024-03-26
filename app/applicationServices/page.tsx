import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";
import Image from "next/image";
import Accordion from "../components/reusableComponents/accordion";



const ApplicationServices = () => {
    const faqs = [
        {
            title: "Which platforms are employed in your application development process?",
            text: "Notion Business Solutions possesses robust proficiency and extensive experience across various application development platforms, such as iOS, Android, Xamarin, Ionic, HTML5, React Native, Flutter, and Cordova.",
            active: false,
        },
        {
            title: "I currently have a business application. Are you able to improve or upgrade it?",
            text: "Certainly! Our team comprises seasoned professionals with extensive expertise in the modernization of existing business applications.",
            active: false,
        },
        {
            title: "In which industries do you provide your services?",
            text: "We work in more than 25 different industries, including real estate, banking & finance, healthcare, eCommerce, and education.",
            active: false,
        },
        {
            title: "Are you open to signing a non-disclosure agreement (NDA)?",
            text: "We do, after all, abide strictly by non-disclosure agreements (NDAs) with clients and team members. We promise to provide you with the best application services possible while maintaining the strictest confidentiality regarding your business idea.",
            active: false,
        },

    ]

    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" firstContainer w-full py-16 md:py-28 mb-10 ">
                    <div className=" ml-8  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4 pr-16  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Application Services
                        </h1>
                        <p className="mb-8 text-lg text-black">&quot;Next-generation Enterprise Applications for Intelligent Business Operations.&quot;
                        </p>
                        <div>
                            <Link href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></Link>
                        </div>
                    </div>
                </section>

                <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                    <h1 className=" text-black md:text-4xl mb-6 pr-2 md:text-left  text-4xl md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        &quot;Transform Business Agility through
                        Custom build Application Services.&quot;
                    </h1>
                    <p className="pb-4 md:w-3/4 text-lg mr-4 text-black">
                        Through enterprise application services, we enable businesses to transform their sectors by addressing the challenges of outdated applications. Our method helps businesses connect with changing concepts and customer expectations by leveraging modern technologies like cloud, artificial intelligence, mobility, and machine learning.
                    </p >
                    <p className="md:w-3/4 text-black text-lg">By combining creativity and agility, we offer solutions that are relevant and useful both now and in the future. NBS offers application services that include frameworks that have been proven in the market, industry solutions, and strategic alliances with international technology vendors.</p>
                </section>
                <section>


                    <div className=" md:my-16 py-8 bg-black text-white  md:px-14  ">
                        <div className=" text-white bg-black md:text-4xl mb-4  md:text-left md:pt-10 ml-8 text-4xl pr-2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Application Services Offerings
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ">

                            <div className="border border-solid border-white pt-10 my-10 relative">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Development
                                </div>
                                <p className="text-white text-lg px-10 md:mb-20 mb-24">Transforming obsolete products into modular apps that are flexible and future-proof. Our services for cloud, mobile, and online applications enable businesses to reduce expenses, make changes, and increase productivity.`&quot;
                                </p>
                                <div>
                                    <Link href="/development">
                                        <div className="absolute bottom-0 right-0"> <img className=" " src="/images/Vector_black.svg" alt="" /></div>
                                    </Link>
                                </div>
                            </div>

                            <div className="border border-solid border-white  pt-10 my-10 relative">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Modernization
                                </div>
                                <p className="text-white text-lg px-10 md:mb-20 mb-24">Shifting to more contemporary, adaptable platforms will renew legacy environments. In order to deliver future-ready solutions with improved usability, security, and agility, we assess and test legacy systems while utilizing the best modernization strategies.
                                </p>
                                <Link href="/modernization">
                                    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div>
                                </Link>
                            </div>
                            <div className="border border-solid border-white pt-10 my-10 relative">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Management
                                </div>
                                <p className="text-white text-lg px-10 md:mb-20 mb-24">Combining a technological and strategic approach to optimize IT ecosystems over their whole lifecycle, including bug fixes, version upgrades, issue tracking, troubleshooting, performance monitoring, timely analysis of product features, and product complexity maximizing the efficiency in an environment of market orientation.
                                </p>
                                <Link href="/management">
                                    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="border border-black md:py-28 mt-10 mb-10">
                    <div className="ml-8 md:ml-16 ">
                        <h1 className="mt-6 text-black md:text-4xl mb-6  md:text-left  text-4xl md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            &quot;Utilize Legacy Transformation to Transform
                            Conventional Portfolios.&quot;
                        </h1>

                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-3xl md:w-1/2  font-light font-['Urbanist'] leading-normal md:leading-snug  ">To Future-Proof Your Portfolio, Adopt Cloud, SaaS-based Business Models, and Cutting-Edge Technology Stacks.
                        </h1>
                    </div>

                    <div className="md:flex ml-8 md:ml-16 mb-6">
                        <div >
                            <a href="#forms">   <button className="mr-2 border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                        <div >
                            <Link href="/transformation">    <button className="mt-3 md:mt-0 border border-black text-center justify-center bg-gray-500 hover:bg-yellow-300 hover:text-black h-10 w-40  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Explore</button></Link>
                        </div>
                    </div>
                </section>
                <section className="pr-10 md:pr-0 bg-black text-white mt-4">
                    <div className="ml-8 md:ml-16 md:mt-16 pt-10 ">
                        <h1 className=" md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Growth Engine
                        </h1>
                    </div>
                    <p className="ml-8 md:ml-16 text-lg leading-snug md:w-3/4">Businesses are able to focus on strategic projects, decision-making, and expansion by managing applications well.</p>
                </section>

                <div className="bg-black text-white grid md:grid-cols-2 sm:grid-cols-1 md:pl-16 md:pr-16  pt-10 gap-5 pb-16">
                    <div className="border border-solid border-white md:w-full w-full bg-black  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Agility
                        </div>
                        <p className=" px-10  text-lg">Frameworks that are contemporary and adaptable, easily evolving to meet changing needs.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Operational Cost
                        </div>
                        <p className="px-10  text-lg">minimized maintenance costs and technical debts, which lead to lower expenditures.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10 md:text-3xl mb-4 md:mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Productivity
                        </div>
                        <p className=" px-10 text-lg">eliminated roadblocks and taking proactive measures to manage programs to enhance workflow.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4 md:mt-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            New Opportunities
                        </div>
                        <p className="px-10  text-lg">Access untapped markets and channels with an accelerated time to market for services.
                        </p>
                    </div>
                </div>
                <section>
                    <div className="ml-8 md:ml-16 md:mt-20 mt-10 mr-4">
                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl  md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
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

export default ApplicationServices;