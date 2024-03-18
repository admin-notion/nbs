import Link from "next/link";
import FormsPage from "../components/reusableComponents/formsPage";

const Transformation = () => {
    return (
        <>
            <main className=" max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">

                <section className=" ml-8 py-16  md:ml-16 ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left md:w-1/2 text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        &quot;Utilize Legacy Transformation to Transform
                        Conventional Portfolios.&quot;
                    </h1>
                    <p className="mb-16 text-lg">Digitize Your Legacy Software to Be Future-Ready
                    </p>
                    <div>
                        <a href="#forms">      <button className=" border border-black px-6 py-2  bg-black hover:bg-yellow-300 hover:text-black   text-white md:text-3xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></a>
                        <Link href="/utilizeLegacy">     <button className=" border border-black px-6 py-2  bg-black hover:bg-yellow-300 hover:text-black   text-white md:text-3xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Explore</button></Link>
                    </div>
                </section>
                <section className="ml-8 md:ml-16 ">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Transformation for an Agile & Efficient Digital Future
                    </h1>
                    <p className="text-lg md:w-1/2">Businesses are forced to modernize their legacy systems due to a number of factors, including market disruptions, customer expectations, a competitive landscape that is becoming more complicated, and the necessity of digitization. Organizations can get agility and flexibility by transforming their IT infrastructure, which makes it easier to supply cutting-edge goods and services quickly and effectively. Our experience includes a wide range of contemporary technologies, applications, security, and industry sectors. We provide full modernization services including enterprise security, digital engineering, cloud enablement, infrastructure services, application stack management, and core application redesign.
                    </p>
                    <p className="text-lg md:w-1/2 mt-5">Together, you and our skilled specialists will develop resilient and agile
                        modernization strategies for relic systems that fulfill growing business
                        demands and reduce the risks associated with change. </p>
                </section>
                <section className="md:mt-20 mt-10 ml-8 md:ml-16">
                    <h1 className=" text-black md:text-4xl mb-4  md:text-left  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Streamlined App Modernization & Migration Services
                    </h1>
                    <p className="text-lg md:w-1/2">Don&quot;t replace, reimagine. NBS unlocks the hidden potential of your legacy apps, transforming and infusing them with cutting-edge digital superpowers.</p>

                    <ul className="list-decimal md:w-1/2 ml-5">
                        <li className="pt-4 ">Legacy System Assessment: Evaluate existing applications and infrastructure to identify outdated components and determine the scope of modernization. </li>
                        <li className="pt-4 ">Cloud Migration Solutions: Facilitate the seamless migration of applications to cloud platforms, optimizing performance and scalability.</li>
                        <li className="pt-4 ">Containerization Services: Utilize container technologies (e.g., Docker) to package and deploy applications consistently across various environments.</li>
                        <li className="pt-4 ">Micro services Architecture: Break down monolithic applications into micro services for improved agility, scalability, and maintainability.</li>
                        <li className="pt-4 "> DevOps Integration: Implement DevOps practices to automate development, testing, and deployment processes, ensuring faster and more reliable application updates.</li>
                        <li className="pt-4 ">Data Migration Strategies: Develop strategies for migrating and transforming data to ensure compatibility with modern databases and data storage solutions.</li>
                        <li className="pt-4 ">User Experience (UX) Enhancement: Improve the user interface and overall user experience of applications to meet modern design standards and enhance user satisfaction.
                        </li>
                        <li className="pt-4 "> Performance Optimization: Identify and address performance bottlenecks, ensuring that modernized applications deliver optimal speed and responsiveness.</li>
                    </ul>
                </section>
                <FormsPage />
            </main>
        </>
    );
}

export default Transformation;