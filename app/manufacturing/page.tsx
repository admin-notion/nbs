import FormsPage from "../components/reusableComponents/formsPage";

const Manufacturing = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
                <section className=" w-full md:py-10">
                    <div className=" mx-8 py-16  md:ml-16 ">
                        <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                            Manufacturing and Distribution
                        </h1>
                        <p className="mb-16 md:w-3/4  text-lg">Optimizing Efficiency and Fostering Innovation in Manufacturing and Distribution through IT Solutions

                        </p>
                        <div>
                            <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        </div>
                    </div>
                </section>

                <section className="mx-8 md:ml-16  md:mt-28">
                    <h1 className=" text-black md:text-4xl mb-6 pr-6 md:text-left  text-2xl  md:w-3/4   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        It is imperative for manufacturing sectors to integrate IT solutions and services to maintain global competitiveness, optimize operations, and increase productivity. In an industry that is always changing, businesses run the risk of falling behind if they don&apos;t use new technologies.
                    </h1>
                    <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                        Technology plays a major role in the manufacturing and distribution industry by optimizing processes, increasing productivity, and maintaining a competitive edge. Therefore, in order to facilitate seamless operations and promote industrial growth, IT consulting, digital workplace solutions, IT managed services, business continuity, cloud services, cybersecurity, procurement services, and technology audits are essential.
                    </p >
                    <p className="pb-4 md:w-3/4 text-lg">IT consulting is essential to the Manufacturing and Distribution sector since it evaluates companies&apos; existing IT infrastructure and identifies areas that could be improved. Expert advice on digital workplace solutions, business continuity, cloud services, cybersecurity, procurement services, and technology audits is provided by consultants.

                    </p>
                    <p className="pb-4 md:w-3/4 text-lg"> Cloud-based collaboration tools and virtual communication platforms are examples of Digital Workplace solutions that help Manufacturing and Distribution organizations stay connected and productive, particularly when working remotely. By enhancing teamwork and communication, these solutions promote innovation and more efficient operations.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Manufacturing and distribution companies can concentrate on their core business activities by using IT managed services, which relieve them of the stress of managing their IT infrastructure. Network management, security, and data backup are among the services that guarantee the effectiveness and seamless operation of IT systems.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Manufacturing and distribution companies need to ensure business continuity, which calls for extensive preparations to keep things running in the event of an emergency. IT consultants and managed service providers can help firms put efficient continuity plans into place.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Cloud services provide flexible and scalable computer resources that save costs while improving security and productivity. This technology is essential to the manufacturing and distribution industries contemporary IT infrastructure.</p>
                    <p className="pb-4 md:w-3/4 text-lg" >Cybersecurity is critical, and managed service providers and IT consultants help put strong defenses against online attacks and data breaches in place.</p>
                    <p className="pb-4 md:w-3/4 text-lg"> Procurement services help manufacturing and distribution organizations get the best bargains and improve supply chain management by streamlining the purchasing process.</p>
                    <p className="pb-4 md:w-3/4 text-lg">Technology audits support both innovation and IT infrastructure optimization. Consultants support the process of determining areas for improvement and formulating plans to use cutting-edge technologies for business growth</p>

                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default Manufacturing;