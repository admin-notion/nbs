import FormsPage from "../components/reusableComponents/formsPage";

const FinTech = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Fin Tech
                        </h1>
                        <p className="mb-16 text-lg">The Impact of Technology on Financial Technology Companies

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mr-16">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-full  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        In the quick-paced world of finance, where transactions happen quickly and consumer expectations change all the time, fintech companies need IT solutions and services to be competitive and provide excellent user experiences. Fintech companies run the danger of falling behind in an industry that values efficiency and innovation if they lack a strong IT infrastructure and support.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        Technology plays a major role in the food and beverage industry&apos;s consumer relations, distribution, and production processes. Thus, for effective operations in this industry, IT consulting, digital workplace solutions, IT managed services, business continuity, cloud services, cybersecurity, procurement services, and technology audits are essential.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">In fintech companies, where technology plays a major role in customer service and financial transactions, IT consulting is essential.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Consultants assist in the identification and implementation of customized IT solutions, including managed services, cloud computing, cybersecurity, digital workplaces, and business continuity.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Employee collaboration and remote information access are made possible by digital workplace solutions, which also improve data security and productivity for financial companies.</p>

                    <p className="pb-4 md:w-3/4 text-lg">IT managed services include upkeep, troubleshooting, and assistance to guarantee the smooth running of finance IT systems.
                    </p>
                    <p className="pb-4 md:w-3/4 text-lg">  Fintech companies are protected from disruptions by business continuity, which uses cloud services and data backups to enable quick recovery.</p>
                    <p className="pb-4 md:w-3/4 text-lg">   Fintech places a high priority on cybersecurity, safeguarding sensitive financial data with tools like security training and antivirus software.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> By assisting fintech companies in obtaining affordable IT solutions, procurement services guarantee a competitive edge in the adoption of new technologies.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Fintech IT systems are evaluated by technology audits, which pinpoint any enhancement in efficiency and security.</p>
                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default FinTech;



