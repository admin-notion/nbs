import FormsPage from "../components/reusableComponents/formsPage";

const Engineering = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Engineering
                        </h1>
                        <p className="mb-16 text-lg">Utilizing Technology to Amplify Success in the Engineering Industry

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mr-16">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-full  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        In the dynamic realm of technology, the engineering sector must prioritize IT solutions and services. These tools, spanning design, simulation, project management, and communication, are indispensable for enhancing efficiency, boosting productivity, and maintaining competitiveness.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        Technology plays a major role in the engineering sectors design and construction of many kinds of structures, goods, and systems. Consequently, in order to guarantee that the sector runs smoothly, the critical functions of IT consulting, digital workplace solutions, IT managed services, business continuity, cloud services, cyber security, procurement services, and technology audits are essential.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">Engineering companies can benefit from the professional advice of IT consultants when it comes to using technology such as project management tools, communication platforms, and computer-aided design (CAD) software to achieve operational excellence.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Digital workplace solutions improve efficiency and connectivity in engineering teams by facilitating remote collaboration through virtual tools, cloud storage, and video conferencing.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> By outsourcing infrastructure management, IT managed services simplify IT operations while lowering complexity and increasing productivity.</p>

                    <p className="pb-4 md:w-3/4 text-lg">By preparing for business continuity, engineering businesses may remain productive even in the face of unforeseen events such as natural catastrophes or cyberattacks.
                    </p>
                    <p className="pb-4 md:w-3/4 text-lg"> Through the internet, cloud services provide scalable computer resources that give accessibility and flexibility for apps and data storage.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Cybersecurity protects intellectual property and engineering data from online dangers like cyberattacks and data breaches.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> In order to support engineering operations, procurement services help find the best goods and services, guaranteeing the best possible deals and resources.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Technology audits in the engineering sector assess how technology is used to find areas where it may be improved, increasing productivity and aligning with business objectives.</p>
                </section>
                <FormsPage />
            </main>

        </>
    );
}

export default Engineering;








