import FormsPage from "../components/reusableComponents/formsPage";

const Education = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Education
                        </h1>
                        <p className="mb-16 text-lg">The Significance of IT Solutions in Education: Advancing Learning and Administration

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mr-16">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-full  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        To improve learning outcomes, boost productivity, and stay up to date with emerging technologies, the education sector needs IT services and solutions. Without these resources, educational establishments run the risk of falling behind in the digital age and giving their pupils a poor education.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        The educational sector continually evolves with new technologies, where IT consultancy, digital workplace solutions, IT managed services, business continuity, cloud services, cyber security, procurement services, and technology audits are pivotal in driving this transformation.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">IT consulting helps academic institutions solve technological issues and introduce new technologies to improve operational effectiveness.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Staff members and students can collaborate effortlessly with one other thanks to digital workplace solutions like collaboration tools.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> IT Managed Services provide continuous IT system support, upkeep, and training to guarantee seamless functioning.</p>

                    <p className="pb-4 md:w-3/4 text-lg">For educational institutions to continue operating without interruption, business continuity is essential. Cloud services provide flexibility and resilience in this regard.
                    </p>
                    <p className="pb-4 md:w-3/4 text-lg">  For educational institutions to protect sensitive data and reduce cyberthreats, cybersecurity is essential.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Procurement services offer professional advice on how to get technology goods and services at the best possible rates.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Technology audits assist educational institutions in evaluating their current IT infrastructure and making plans for their future technological needs.</p>

                </section>

                <FormsPage />
            </main>
        </>
    );
}

export default Education;
















