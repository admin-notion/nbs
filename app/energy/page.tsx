import FormsPage from "../components/reusableComponents/formsPage";

const Energy = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Energy
                        </h1>
                        <p className="mb-16 text-lg">Empowering Your Business with IT Solutions

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mt-28">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl md:w-3/4   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        In our fast-paced world, the energy sector must embrace technological innovation to remain competitive. IT solutions and services optimize processes and efficiency, ensuring relevance.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        The energy sector depends on technology for exploration, production, distribution, and customer management. Thus, IT consultancy, digital workplace solutions, managed services, and cybersecurity are vital for efficiency.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">In the energy industry, IT consulting is providing professional counsel and direction on utilizing information technology to accomplish organizational objectives. This entails putting in place CRM platforms, ERP software, and supply chain management solutions that are suited to the demands of the sector.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> With cloud-based file sharing, video conferencing, and virtual collaboration tools, Digital Workplace Solutions ensure productivity and allow remote work flexibility in the energy sector.In the energy sector, IT managed services refer to the outsourcing of IT infrastructure upkeep with the goal of simplifying and streamlining processes.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> In the energy industry, business continuity planning guarantees continuous operations in the event of calamities or cyberattacks, preserving productivity.</p>

                    <p className="pb-4 md:w-3/4 text-lg">Cloud services eliminate the need for on-premises infrastructure by offering scalable and flexible computing resources for data access and storage in the energy sector.
                    </p>
                    <p className="pb-4 md:w-3/4 text-lg">  Cybersecurity measures secure financial records and consumer information by shielding critical data and systems from online threats in the energy sector.</p>
                    <p className="pb-4 md:w-3/4 text-lg">  Procurement services help energy companies get the best prices for operational support by assisting in the acquisition of IT products and services from outside vendors.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Technology audits assess how technology is used in the energy sector, pinpointing opportunities for development and putting up plans to boost productivity.</p>

                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default Energy;









