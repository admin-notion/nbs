import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";

const ApplicationServices = () => {
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" firstContainer w-full md:py-10">
                    <div className=" ml-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Application Services
                        </h1>
                        <p className="mb-16 text-lg">"Next-generation Enterprise Applications for Intelligent Business Operations."
                        </p>
                        <div>
                            <Link href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></Link>
                        </div>
                    </div>
                </section>

                <section className="ml-8 md:ml-16  ">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        "Transform Business Agility through
                        Custom build Application Services."
                    </h1>
                    <p className="pb-4 md:w-2/3 text-lg mr-4">
                        Through enterprise application services, we enable businesses to transform their sectors by addressing the challenges of outdated applications. Our method helps businesses connect with changing concepts and customer expectations by leveraging modern technologies like cloud, artificial intelligence, mobility, and machine learning.
                    </p >
                    <p className="md:w-2/3 text-lg">By combining creativity and agility, we offer solutions that are relevant and useful both now and in the future. NBS offers application services that include frameworks that have been proven in the market, industry solutions, and strategic alliances with international technology vendors.</p>
                </section>
                <section>


                    <div className=" md:my-16 py-8 bg-black text-white  md:pl-16 md:pr-16 ">
                        <div className=" text-white bg-black md:text-4xl mb-4  md:text-left md:pt-10 ml-8 text-4xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Application Services Offerings
                        </div>
                        <div className="bg-black grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-6 ">

                            <div className="border border-solid border-white pt-10 my-10 ">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Development
                                </div>
                                <p className="text-white text-lg px-10">Transforming obsolete products into modular apps that are flexible and future-proof. Our services for cloud, mobile, and online applications enable businesses to reduce expenses, make changes, and increase productivity."
                                </p>
                                <div>
                                    <Link href="/development">  <div className="md:mt-44 mt-5 text-right ">
                                        <div className="lg:ml-64 lg:mt-12"> <img className="" src="/images/Vector_black.svg" alt="" /></div>
                                    </div></Link>
                                </div>
                            </div>

                            <div className="border border-solid border-white  pt-10 my-10">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Modernization
                                </div>
                                <p className="text-white text-lg px-10">Shifting to more contemporary, adaptable platforms will renew legacy environments. In order to deliver future-ready solutions with improved usability, security, and agility, we assess and test legacy systems while utilizing the best modernization strategies.""
                                </p>
                                <Link href="/modernization">  <div className="md:mt-16 mt-5  md:pt-2 text-right ">
                                    <div className="lg:ml-64 lg:mt-12"> <img className="" src="/images/Vector_black.svg" alt="" /></div>
                                </div></Link>
                            </div>
                            <div className="border border-solid border-white pt-10 my-10 ">
                                <div className="px-10 text-white md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Management
                                </div>
                                <p className="text-white text-lg px-10">"Combining a technological and strategic approach to optimize IT ecosystems over their whole lifecycle, including bug fixes, version upgrades, issue tracking, troubleshooting, performance monitoring, timely analysis of product features, and product complexity maximizing the efficiency in an environment of market orientation."
                                </p>
                                <Link href="/management">   <div className="md:mt-4 mt-5  text-right ">
                                    <div className="lg:ml-64 lg:mt-16"> <img className="" src="/images/Vector_black.svg" alt="" /></div>
                                </div></Link>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="ml-8 md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-4xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            "Utilize Legacy Transformation to Transform
                            Conventional Portfolios."
                        </h1>

                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-3xl w-80 md:w-1/2  font-light font-['Urbanist'] leading-normal md:leading-snug  ">To Future-Proof Your Portfolio, Adopt Cloud, SaaS-based Business Models, and Cutting-Edge Technology Stacks.
                        </h1>
                    </div>

                    <div className="flex ml-8 md:ml-16 ">
                        <div >
                            <a href="#forms">   <button className=" border md:mr-10 border-black px-6 h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black   text-white md:text-2xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                        <div>
                            <Link href="/transformation">    <button className=" border border-black px-6  bg-black hover:bg-yellow-300 hover:text-black h-10 w-32  text-white md:text-2xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Explore</button></Link>
                        </div>
                    </div>
                </section>
                <section className="pr-10 md:pr-0 bg-black text-white mt-4">
                    <div className="ml-8 md:ml-16 md:mt-16 pt-10 ">
                        <h1 className=" md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Growth Engine
                        </h1>
                    </div>
                    <p className="ml-8 md:ml-16 text-lg leading-snug">Businesses are able to focus on strategic projects, decision-making, and expansion by managing applications well.</p>
                </section>

                <div className="bg-black text-white grid md:grid-cols-2 sm:grid-cols-1 md:pl-16 md:pr-16 pt-10 gap-5 pb-16">
                    <div className="border border-solid border-white md:w-full w-full bg-black  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Agility
                        </div>
                        <p className=" px-10 w-96 text-lg">Frameworks that are contemporary and adaptable, easily evolving to meet changing needs.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Operational Cost
                        </div>
                        <p className="px-10 w-96 text-lg">minimized maintenance costs and technical debts, which lead to lower expenditures.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10 md:text-3xl mb-4 md:mt-4 md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Productivity
                        </div>
                        <p className=" px-10 w-96 text-lg">eliminated roadblocks and taking proactive measures to manage programs to enhance workflow.
                        </p>
                    </div>
                    <div className="border border-solid border-white md:w-full  py-10">
                        <div className="px-10  md:text-3xl mb-4 md:mt-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            New Opportunities
                        </div>
                        <p className="px-10 w-96 text-lg">Access untapped markets and channels with an accelerated time to market for services.
                        </p>
                    </div>
                </div>
                <section>
                    <div className="ml-8 md:ml-16 md:mt-20 mt-10 mr-4">
                        <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl w-80 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            FAQs
                        </h1>

                        <div className=" text-black md:text-3xl mb-4 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Which platforms are employed in your application development process?
                        </div>
                        <p className="md:w-2/3 text-lg">Notion Business Solutions possesses robust proficiency and extensive experience across various application development platforms, such as iOS, Android, Xamarin, Ionic, HTML5, React Native, Flutter, and Cordova.</p>

                        <div className=" text-black md:text-3xl mb-4 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            I currently have a business application. Are you able to improve or upgrade it?

                        </div>
                        <p className="md:w-2/3 text-lg">Certainly! Our team comprises seasoned professionals with extensive expertise in the modernization of existing business applications.</p>
                        <div className=" text-black md:text-3xl mb-4 mt-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            In which industries do you provide your services?
                        </div>
                        <p className="md:w-2/3 text-lg">We work in more than 25 different industries, including real estate, banking & finance, healthcare, eCommerce, and education.</p>
                        <div className=" text-black md:text-3xl mb-4 mt-4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Are you open to signing a non-disclosure agreement (NDA)?
                        </div>
                        <p className="md:w-2/3 text-lg">We do, after all, abide strictly by non-disclosure agreements (NDAs) with clients and team members. We promise to provide you with the best application services possible while maintaining the strictest confidentiality regarding your business idea.</p>

                    </div>
                    <FormsPage />
                </section>

            </main >
        </>
    );
}

export default ApplicationServices;