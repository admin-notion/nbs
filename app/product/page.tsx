import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";
import Accordion from "../components/reusableComponents/accordion";
const Product = () => {
    const faqs = [
        {
            title: "What sets software product engineering apart from custom software development?",
            text: "Product engineers typically focus on developing digital items that are sold and have a revenue model, while custom software developers produce enterprise software that is primarily customized to meet the demands of certain businesses.",
            active: false,
        },
        {
            title: "What phases are usually involved in product engineering services?",
            text: <ul className=" list-decimal"><p>The stages included in the typical product engineering workflow are as
                follows:</p>
                <li>Conceptualization</li>
                <li>Product Planning and Feasibility Study </li>
                <li>Design, Development, and Quality Control </li>
                <li>Prototyping </li>
                <li>Production or Manufacturing </li>
                <li>Maintenance</li>
            </ul>,
            active: false,
        },

    ]
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" firstContainer w-full md:py-28 mb-10 text-black">
                    <div className=" ml-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Product Engineering Services
                        </h1>
                        <p className="mb-8 text-lg">Complete software product creation, administration, and modernization services.

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className=" border border-black md:py-28 py-10 mb-10 px-10 md:pl-16">
                    <h1 className=" text-black md:text-4xl mb-6  md:text-left  text-3xl  md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Create cutting-edge, commercially successful software applications more quickly.
                    </h1>
                    <p className=" text-black pb-4 md:w-3/4 text-lg mr-4">
                        Companies that provide software products need to adapt to the changing needs of their customers in the quickly changing market of today. To prepare for future trends and shifting needs, this means that their ecosystem and portfolio must be updated on a regular basis. Maintaining competitiveness and future-proofing their firm requires incorporating state-of-the-art technology into their products.


                    </p >
                    <p className=" text-black md:w-3/4 text-lg">Our product engineering services help companies reach this objective by encouraging creativity, accelerating the creation of new products, and facilitating the expansion of their markets at a lower cost. We serve companies, independent software vendor, and product startups, enabling them to use our Agile, Comprehensive, and Accelerated Cloud Transformation Methodology to adjust to changing market conditions. This guarantees that businesses across all sectors and sizes can efficiently respond to changing consumer demands and market trends while making the most use of their resources.</p>
                </section>
                <section>
                    <div className=" py-16 my-10 md:mt-16 md:pl-16 bg-black text-white">
                        <div className="mx-10 md:mx-0  md:text-4xl mb-8 md:text-left  text-3xl  md:w-2/3  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Offerings <br /> <span >Evolving Software Portfolios With Our Solutions for Product Engineering</span>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 md:mr-16">
                            <div className="border border-solid border-white  py-10">
                                <div className="px-10  md:text-3xl mb-4 md:text-left  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Product Engineering
                                    Consulting
                                </div>
                                <p className="px-10 text-lg">evaluating product architecture and modernization options as part of a thorough technological stack evaluation, with the help of our team, in order to create a strategic plan. We give end-to-end assessments for setting up innovation centers according to our clients needs and offer advice on cutting-edge technologies like machine learning and the Internet of Things.
                                </p>

                            </div>
                            <div className="border border-solid border-white  py-10">
                                <div className="px-10  md:text-3xl mb-4  md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Product Development
                                </div>
                                <p className="px-10 text-lg">A complete product cycle includes engineering design for improvements, documenting of specifications and needs, conceptual development, and product development utilizing relevant technologies.
                                </p>

                            </div>
                            <div className="border border-solid border-white  py-10">
                                <div className="px-10  md:text-3xl mb-4  md:text-left  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Mobile Product
                                    Development

                                </div>
                                <p className="px-10 text-lg">Encouraging a smooth user experience and cross-device communication to improve results via enterprise and user-facing mobile products, using our tried-and-true RAPADIT wireframes that are customized on-demand to match client requirements.
                                </p>
                            </div>
                            <div className="border border-solid border-white  py-10">
                                <div className="px-10  md:text-3xl mb-4  md:text-left  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Product Modernization

                                </div>
                                <p className="px-10 text-lg">Utilizing cutting-edge technology to transform and rejuvenate current portfolios, staying abreast of innovation. Enhancing software and platforms to deliver a superior digital experience through Technology Upgrades, UX Enhancements, Architecture Modernization, Analytics Enablement, and beyond.
                                </p>
                            </div>
                            <div className="border border-solid border-white  py-10">
                                <div className="px-10  md:text-3xl mb-4  md:text-left  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Product Testing

                                </div>
                                <p className="px-10 text-lg">Before a product is released onto the market, extensive testing that includes Functional (Manual/Automated), Integration, Performance, Mobile App, Compatibility, Security, and Graphic User Interface (GUI) Testing is carried out.
                                </p>
                            </div>
                            <div className="border border-solid border-white py-10">
                                <div className="px-10  md:text-3xl mb-4  md:text-left  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Product Support & Maintenance

                                </div>
                                <p className="px-10 text-lg">Our skilled maintenance services, which include product support services, product rationalization, and product sustainance engineering, are tailored to rejuvenated portfolios. These services are intended to maintain the software environment, improve user satisfaction, and maximize productivity.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="pr-10 md:pr-0 bg-white text-text">
                    <div className="ml-8 md:ml-16 md:mt-16  ">
                        <h1 className=" md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Business Benefits
                        </h1>
                    </div>
                    <p className="ml-8 md:ml-16 md:w-3/4 text-lg leading-snug">Product engineering services give companies a competitive edge by helping them match their portfolios with emerging trends.</p>
                </section>

                <div className=" text-white grid md:grid-cols-2 sm:grid-cols-1 md:pl-16 md:pr-16 pt-10 gap-5 pb-16">
                    <div className="border border-solid border-black md:w-full py-10">
                        <div className="px-10  text-black  md:text-3xl mb-4  md:text-left  text-2xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Accelerated time to market
                        </div>
                        <p className=" text-black  px-10  text-lg">Rapidly launch products with fresh features and functionalities into the market.
                        </p>
                    </div>
                    <div className="border border-solid border-black md:w-full  py-10">
                        <div className="px-10  text-black  md:text-3xl mb-4  md:text-left  text-2xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Enhanced Productivity
                        </div>
                        <p className="px-10  text-black   text-lg">Attain heightened automation in business operations, resulting in enhanced efficiency.
                        </p>
                    </div>
                    <div className="border border-solid border-black md:w-full  py-10">
                        <div className="px-10 text-black  md:text-3xl mb-4 md:mt-4 md:text-left  text-2xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Cost-effectiveness
                        </div>
                        <p className=" px-10  text-black text-lg">Portfolio upgrades without the need to upgrade the internal engineering team.
                        </p>
                    </div>
                    <div className="border border-solid border-black md:w-full  py-10">
                        <div className="px-10  text-black  md:text-3xl mb-4 md:mt-4  md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Access to New Opportunities
                        </div>
                        <p className="px-10 text-black  text-lg">Take advantage of new developments in technology and trends to open up new possibilities.
                        </p>
                    </div>
                </div>
                <section>
                    <div className="ml-8 md:ml-16 md:mt-0 mt-10 mr-4 text-black">
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
                </section>
                <FormsPage />
            </main >
        </>
    );
}

export default Product;