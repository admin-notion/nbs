import FormsPage from "../components/reusableComponents/formsPage";

const Food = () => {
    return (<>
        <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black">
            <section className=" w-full md:py-10">
                <div className=" mx-8 py-16  md:ml-16 ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Food and Beverage
                    </h1>
                    <p className="mb-16 md:w-3/4  text-lg">Harnessing Technology for Success: The Impact of IT Solutions in the Food & Beverage Industry

                    </p>
                    <div>
                        <a href="#forms" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                    </div>
                </div>
            </section>
            <section className="mx-8 md:ml-16  md:mt-28">
                <h1 className=" text-black md:text-4xl  mb-6 pr-6 md:text-left  text-2xl md:w-3/4  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                    Reliability and efficiency in IT solutions and services are critical in today&apos;s competitive and fast changing food and beverage industry. Whether it&apos;s improving customer service, streamlining inventory control, or increasing production, choosing the right technology can make all the difference in building a successful and profitable business.
                </h1>
                <p className="pb-4 md:mt-10 md:w-3/4 text-lg ">
                    Technology plays a major role in the food and beverage industry&apos;s consumer relations, distribution, and production processes. Thus, for effective operations in this industry, IT consulting, digital workplace solutions, IT managed services, business continuity, cloud services, cybersecurity, procurement services, and technology audits are essential.
                </p >
                <p className="pb-4 md:w-3/4 text-lg">IT consulting services for the food and beverage sector include advice on how to use tools like CRM platforms, supply chain management systems, and enterprise resource planning (ERP) software to efficiently accomplish company goals.</p>                    <p className="pb-4 md:w-3/4 text-lg">By using cloud-based platforms and virtual tools to enable distant collaboration, digital workplace solutions improve productivity and connectivity.</p>
                <p className="pb-4 md:w-3/4 text-lg"> Outsourcing IT Managed Services to outside vendors simplifies IT operations and lowers the difficulty of internal system management.Planning for business continuity keeps operations running smoothly in the event of calamities like natural disasters or cyberattacks, preserving output.</p>
                <p className="pb-4 md:w-3/4 text-lg">Cloud services replace on-premises infrastructure by providing scalable computer resources for data access and storage.Cybersecurity protects private information from online dangers such as hacks and assaults in the food and beverage sector.</p>

                <p className="pb-4 md:w-3/4 text-lg">Procurement services find the best deals for operational requirements by streamlining the sourcing process for goods and services. <br /> Technology audits evaluate how technology is used in the food and beverage industry to find areas for improvement and match tactics with corporate goals.
                </p>
            </ section >

            <FormsPage />
        </main>
    </>);
}

export default Food;