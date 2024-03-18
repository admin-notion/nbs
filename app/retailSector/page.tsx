import FormsPage from "../components/reusableComponents/formsPage";

const Startup = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Retail Sector
                        </h1>
                        <p className="mb-16 text-lg">Enhancing Retail Success with Effective IT Solutions

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mr-16">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-full  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        To be competitive and meet the needs of a changing market, the retail industry needs reliable IT solutions and services in the contemporary digital world. Retailers who dont have the right technology run the danger of falling behind and losing business to competitors who are more creative and flexible.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        To be competitive and meet the needs of a changing market, the retail industry needs reliable IT solutions and services in the contemporary digital world. Retailers who dont have the right technology run the danger of falling behind and losing business to competitors who are more creative and flexible.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">IT consultant: An IT consultant helps companies reach their objectives by offering professional advice on how to use technology. This include providing continuing support and maintenance, installing new systems, and helping startups choose the right gear and software.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Digital Workplace Solutions: By permitting remote work, these devices and software improve output and teamwork. Online project management tools, virtual meeting platforms, and cloud-based productivity tools are a few examples.</p>
                    <p className="pb-4 md:w-3/4 text-lg">  ITManaged Services: This type of outsourcing allows businesses to outsource the management of their IT systems to a third party, saving money by avoiding the need to hire internal staff members and giving access to resources and experience.</p>
                    <p className="pb-4 md:w-3/4 text-lg">   Business Continuity: Making sure that operations continue both during and after external disturbances, such as cyberattacks, natural disasters, and data breaches. A strong plan reduces failures and speeds up recovery.</p>

                    <p className="pb-4 md:w-3/4 text-lg">Cloud services: They provide affordable access to processing power and storage without requiring a substantial hardware investment by using shared servers and resources for computing needs.
                    </p>
                    <p className="pb-4 md:w-3/4 text-lg">  Cybersecurity: In the face of an increase in cyberattacks, safeguarding computers, networks, and data from online dangers is essential for preserving assets, goodwill, and consumer confidence.</p>
                    <p className="pb-4 md:w-3/4 text-lg">   Procurement services: controlling the entire process of acquiring suppliers, making payments, and arranging delivery; minimizing expenses and guaranteeing value for money.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Technology auditing is the act of assessing a company IT systems and procedures in order to find areas for improvement and make suggestions for modifications that would increase productivity and cut costs.</p>


                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default Startup;