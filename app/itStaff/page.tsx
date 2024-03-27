import FormsPage from "../components/reusableComponents/formsPage";

const Itstaffing = () => {
    return (
        <>
            <div>
                <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                    <section className=" ml-8 py-16 md:my-28  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            IT Staffing Services
                        </h1>
                        <p className="mb-8 text-lg">“Addressing all your IT staffing challenges.”
                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </section>

                    <section className=" text-black  md:mt-16 border border-black md:py-28 md:px-16 px-10 py-10 mb-10">
                        <h1 className=" text-black md:text-4xl mb-6 md:w-3/4  md:text-left  text-3xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            All-inclusive Managed Staffing Options for IT Organizations
                        </h1>
                        <p className="pb-4 md:w-3/4 text-lg mr-4">Agility is essential in the changing corporate environment of today. we place a high value on getting to know our clients&apos; needs and each person&apos;s career goals in order to provide a distinctive viewpoint on the nexus between talent and business. Being a top IT staffing company, we enable you to maximize the vital element of business success, which is identifying the appropriate individuals with the appropriate abilities, aptitudes, and dispositions.</p >
                        <p className="md:w-3/4 pb-4 text-lg"> Our partnership strategy is customized to meet your unique needs, whether they be contract-to-hire talent for project-based support, short-term, seasonal, or temporary staffing needs, or finding top talent for your company on a long-term basis. We provide contract staffing services for IT, offering onshore, offsite, and offshore solutions.</p>
                        <p className="md:w-3/4  text-lg">We provide a wide range of temporary staffing services, including IT staff augmentation, temporary staffing, as one of the most respected IT staffing firms.</p>
                    </section>
                    <section className=" text-black  md:mt-16 border border-white md:py-28 md:px-16">
                        <h1 className=" text-black md:text-4xl mb-6 md:w-3/4 md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            As an IT staffing services and recruiting company, we set ourselves
                            apart due to several key factors:
                        </h1>
                        <p className="pb-4 md:w-3/4 text-lg">We source the best talent to meet your specific demands, so we can ensure quality.
                            We guarantee that we will provide you with a carefully selected list of the top
                            applicants who meet your needs thanks to our stringent qualification process.</p>
                        <p className="pb-4 md:w-3/4 text-lg">We employ a sourcing strategy based on referrals.</p>
                        <p className="pb-4 md:w-3/4 text-lg">We promise to look for the ideal fit for your needs. We ensure performance and
                            retention while cultivating relationships with this true aim.</p>
                    </section>
                    <section className="  mt-10 bg-black text-white">
                        <h1 className=" text-white md:text-4xl mb-6  md:text-left pt-10 px-14 text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Our services in technology staffing.
                        </h1>
                        <div className="md:mx-14  grid md:grid-cols-2 sm:grid-cols-1 gap-4 pb-10">
                            <div className="py-10 md:px-10 px-8 border border-white">
                                <h1 className=" text-white md:text-4xl mb-6  md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Contract Staffing and Placement
                                </h1>
                                <p className=" text-lg">As one of the most seasoned IT staffing companies, we have a team of knowledgeable
                                    recruiters who choose candidates with the exact qualifications and abilities needed for
                                    each project. Our technical staffing services include hiring contract or permanent
                                    professionals onshore or offsite, providing specialized technology staffing solutions,
                                    and outsourcing IT staffing to support existing in-house teams or create new ones.</p>

                            </div>
                            <div className="border  border-white py-10 md:px-10 px-8">

                                <h1 className=" text-white md:text-4xl mb-6 mt-6 md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                                    Recruitment and Assignment Assistance
                                </h1>
                                <p className=" text-lg">Our technical staffing services offer a consistent flow of technical personnel that are in line with your business goals, such as project managers, QA specialists, and software developers. We are aware that finding applicants is only one aspect of technical recruitment. Our services cover every facet of the working relationship, making sure that the employer&apos;s and the employee&apos;s expectations are met.</p>
                            </div>
                        </div>
                    </section>
                    <FormsPage />
                </main >
            </div>
        </>
    );
}
export default Itstaffing; 