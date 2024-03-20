import FormsPage from "../components/reusableComponents/formsPage";

const Professional = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Professional Services
                        </h1>
                        <p className="mb-16 text-lg">The Crucial Role of Technology Solutions in the Professional Services Sector

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>
                <section className="mx-8 md:ml-16  md:mt-28">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-3/4   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Professional services organizations need to give access to trustworthy IT solutions and services top priority in the modern world. Businesses run the danger of falling behind rivals and losing the trust of their customers without these tools. In addition to being necessary, investing in IT solutions gives businesses a competitive edge in the digital era.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        Professional services organizations, which include accounting, legal, and consulting firms, rely significantly on technology to operate efficiently. Thus, for efficient operations, IT managed services, digital workplace solutions, business continuity, cloud services, cybersecurity, procurement services, and technology audits are essential.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">In the professional services sector, IT consulting is essential because it provides knowledgeable guidance on technology solutions that are suited to company requirements, from network and security design to hardware and software selection. This advice increases production and efficiency.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Professionals may operate remotely thanks to digital workplace solutions, which use cloud-based file storage and video conferencing to facilitate easy communication.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Through network and server monitoring, software support, and hardware maintenance, IT managed services offer firms support and upkeep, assuring seamless technology operations.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Cloud-based backup and disaster recovery systems guarantee access to crucial data even in the event of outages, underscoring the need of business continuity.</p>

                    <p className="pb-4 md:w-3/4 text-lg">With the flexibility and scalability of cloud services, you may access software and apps without having to make a significant physical investment.



                    </p>
                    <p className="pb-4 md:w-3/4 text-lg"> Cybersecurity uses firewalls, antivirus programs, and secure data storage to guard against online attacks and preserve critical data.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Procurement Services optimizes technology expenditures by streamlining purchasing procedures and providing sourcing, negotiating, and contract management..</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Technology audits evaluate the infrastructure that is in place and pinpoint areas that may be improved or costs that can be reduced to maximize technology investments.</p>


                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default Professional;