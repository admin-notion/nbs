import FormsPage from "../components/reusableComponents/formsPage";

const About = () => {
  return (
    <>
      <main className="max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
        <h1 className="ml-8  md:ml-16 md:mt-20 text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
          &quot;A proactive team that believes in taking action.&quot;
        </h1>
        <p className="ml-8  md:ml-16  md:w-3/4 text-lg">&quot;Our mission at Notion Business Solutions is to empower our clients to achieve their business and strategic goals by providing them with the best information technology solutions available. Our team of seasoned professionals constantly goes above and beyond what our clients expect from us. <br />
          In addition, we have a strong commitment to provide first-rate service, making sure that our customers get the best possible assistance and direction during their partnership with us. <br />
          We truly think that a combination of technical expertise, client-focused service, and a constant commitment to quality is what makes a business successful. We are prepared to help clients achieve their objectives and navigate the ever-changing IT landscape thanks to our skilled team.&quot;
        </p>
        <h1 className="ml-8  md:ml-16 md:mt-20 text-black md:text-4xl mb-4  md:text-left  text-4xl w-96 md:w-1/2  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
          Our commitment
        </h1>
        <p className="ml-8  md:ml-16  md:w-3/4 text-lg">You can depend on NBS to deliver excellent services and solutions that are customized
          to meet your business needs. They are trustworthy, scalable, and well-made.
          Focused on creating long-lasting relationships, NBS is committed to providing
          outstanding services that accelerate our clients`&apos; and partners`&apos; success.
        </p>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3  bg-black text-white mt-10">
          <div className="border border-solid border-white pt-10 my-10 md:mx-16 md:py-6 mx-6 px-2">
            <h1 className="ml-8  md:ml-8  md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
              Customer Collaboration
            </h1>
            <p className="ml-8  md:ml-8 mb-4 md:w-3/4 text-lg">  &quot;We are entrusted with a broad range of IT projects, solutions, and services by our diverse customer, which spans multiple industries. <br /> <br />

              They all have the same expectations, but having different needs: technology should help and smoothly integrate with their enterprises. We provide excellent, long-term solutions that are suited to existing infrastructure as well as present and future business needs. We also give strategic guidance.&quot;</p>
          </div>
          <div className="border border-solid border-white pt-10 my-10 md:mx-16 md:py-6 mx-6 px-2">
            <h1 className="ml-8  md:ml-8 md:text-3xl mb-4  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
              Dedicated to Your Achievements
            </h1>
            <p className="ml-8 mb-4 md:ml-8  md:w-3/4 text-lg">  &quot;We are entrusted with a broad range of IT projects, solutions, and services by our diverse customer, which spans multiple industries. <br /> <br />

              &quot;We are entrusted with a broad range of IT projects, solutions, and services by our diverse customer, which spans multiple industries.

              They all have the same expectations, but having different needs: technology should help and smoothly integrate with their enterprises. We provide excellent, long-term solutions that are suited to existing infrastructure as well as present and future business needs. We also give strategic guidance.&quot;</p>
          </div>
        </div>
        <FormsPage />
      </main>
    </>
  );
}

export default About;