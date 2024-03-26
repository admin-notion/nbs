
import Link from "next/link";

export default function Home() {
  return (
    <main className=" max-w-7xl  mx-auto px-4 pt-8 md:px-6 lg:px-8 xl:px-10 bg-white">
      <section className=" firstContainer w-full md:py-10 bg-white ">
        <div className=" pt-36 ml-8 py-16  md:ml-16 md:mr-28  md:mb-64 mb-10 justify-center  align-middle">
          <div className=" text-black md:text-5xl mb-4 pb-3 md:text-left  text-4xl  md:w-1/2  font-bold font-['Urbanist']leading-normal md:leading-snug  ">
            Evolving
          </div>
          <div className="flex flex-wrap mb-12  text-black md:text-xl md:text-left  text-xl font-light font-['Urbanist'] leading-normal md:leading-snug  ">
            <h1 className="md:mr-10 mr-6">Build</h1>
            <h1 className="md:mr-10 mr-6">Integrate</h1>
            <h1 className="">Experience</h1>
          </div>
          <div>
            <Link href="/enquire" >  <button className=" border border-black text-center justify-center h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button></Link>
          </div>
        </div>
      </section>

      <section className=" secondContainer  bg-white grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-3 px-10 mb-10 md:mb-28 justify-center items-center align-middle  place-content-center">
        <div className="md:py-28 py-16">
          <div className=" secondContainer1   md:pr-7 md:py-6  md:ml-10 md:pl-1   text-black  md:text-4xl text-2xl font-semibold  font-['Urbanist'] leading-snug">
            IT and Digital services elevate
            Industry Standards for businesses.
          </div>
          <div className="">
            <p className=" md:mt-3 mt-6 text-lg pl-1 md:pr-8 md:text-lg  md:ml-10   md:font-normal  md:font-['Poppins']  md:text-black text-black  font-['Poppins']  leading-9">
              It is pertinent to question norms in order to adapt to the one constant—&apos;Change&apos;.At <span className="text-xl text-black font-extrabold">NBS</span> , we combine enterprise, subject experience, and contemporary technology to redefine company possibility. We&apos;ve continuously gone above and beyond expectations and boundaries, changing the face of enterprise web services over time. And this is just the beginning.
            </p>
          </div>
        </div>
        <div className=" mx-8 md:py-16 ">
          <img className="" src="/images/nbs_homepic.png" alt="" />
        </div>
      </section>

      <section className=" thirdContainer   pb-10 md:pb-28  sm:w-full border border-white  bg-black ">
        <div className="pt-6 mb-6 md:mb-10 mx-8  ">
          <div className="md:ml-6 text-white  md:text-4xl text-3xl md:w-2/3 md:pt-16  font-semibold font-['Urbanist'] md:leading-snug ">
            Discover the potential of innovation through our comprehensive range of integrated services.
          </div>
        </div>
        <div className=" md:mx-14 mx-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 col-span-2  text-white">

          <div className="  pt-10 border border-white relative">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Application Services</h1>
            <p className=" px-10 text-lg md:mb-20 mb-24">Empowering businesses with tailored solutions for seamless application development, integration, and optimization</p>
            <Link href="/applicationServices" >    <div className="absolute bottom-0 right-0"><img className="" src="/images/Vector_black.svg" alt="" /></div>
            </Link>
          </div>

          <div className="  pt-10 border border-white relative">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Dev Ops</h1>
            <p className=" px-10 text-lg md:mb-20 mb-24">DevOps prioritizes scalability, continuous integration, and automation of software delivery.</p>
            <Link href="/devops" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className="pt-10 border border-white relative ">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">IT Staffing</h1>
            <p className=" px-10 text-lg md:mb-20 mb-24">Sourcing, screening, and onboarding for IT positions. This process is known as IT staffing.</p>
            <Link href="/itStaff" >   <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className="pt-10 border border-white relative">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">QA & Testing </h1>
            <p className=" px-10 text-lg  md:mb-20 mb-24">Ensure outstanding quality and improve customer service.</p>
            <Link href="/testing" >   <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className="pt-10 border border-white relative">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Product Engineering </h1>
            <p className=" px-10 text-lg  md:mb-20 mb-24">Build resilient, flexible, and customer-focused products.</p>
            <Link href="/product" >   <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className="pt-10 border border-white relative">
            <h1 className=" px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">System Migration</h1>
            <p className=" px-10 text-lg md:mb-20 mb-24">Securely move data between systems, formats, minimizing downtime and loss.</p>
            <Link href="/migration" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>

        </div>

      </section>

      <section className="bg-white w-full pt-10">
        <div className="  md:my-14 md:py-48 py-20 px-8 border border-solid border-black mb-8 ">
          <h1 className="  text-black md:text-4xl md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug ">Our Mission</h1>
          <h3 className=" text-black md:text-3xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug ">Compassion for Technological innovation and Customer Satisfaction</h3>
        </div>
      </section>

      <section className="md:max-w-7xl bg-white  md:pb-16">
        <div className="    md:py-48 py-20 px-8 border border-solid border-black">
          <h1 className="  text-black md:text-4xl md:text-left  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug ">Notion Business Solutions</h1>
          <h3 className=" text-black md:text-3xl md:text-left  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug "> A Consulting and Digital Service Providers</h3>
          <p className=" pt-6 md:text-lg  md:font-normal md:font-['Poppins']  md:text-black md:w-2/3 text-black text-base font-['Poppins'] leading-9">
            Team has over 15 years of combined experience and offers a wide range of IT knowledge to startups, Enterprise level, small and medium-sized businesses. In order to provide client-focused outcomes that increase business value, we place a strong emphasis on fusing technical expertise with business domain knowledge. Our expertise is in providing creative and practical IT outsourcing solutions and consulting that can propel your company to new heights.
          </p>
        </div>
      </section>

      <section className="bg-black md:max-w-7xl md:pb-20 ">
        <div className="md:mx-14  mb-8 md:pt-20 mt-8 mx-8 ">
          <h1 className=" pt-6 justify-center text-center text-white md:text-4xl md:text-left md:w-3/4  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug ">We serve a wide range of sectors. Our customized solutions tackle particular problems in each industry, guaranteeing our clients continued success in a variety of fields and improved operations.</h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 md:mx-14  mb-10">
          <div className=" pt-10 border border-white  relative">
            <h1 className="px-10 text-2xl font-semibold text-white font-['Urbanist'] leading-snug pb-3">Start up</h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">The Significance of Technology for Startups: Leveraging IT to Drive Success in Your Startup Venture</p>
            <Link href="/startup" >    <div className="absolute bottom-0 right-0 "> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white  relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Retail Sector</h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Enhancing Retail Success with Effective IT Solutions.</p>
            <Link href="/retailSector" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white  relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Professional Services</h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24"> The Crucial Role of Technology Solutions in the Professional Services Sector</p>
            <Link href="/professional" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white  relative" >
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Not for Profit  </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">The Vital Role of IT Solutions in the Success of Not-for-Profit Organizations</p>
            <Link href="/notForProfit" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Manufacturing and Distribution  </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Optimizing Efficiency and Fostering Innovation in Manufacturing and Distribution through IT Solutions</p>
            <Link href="/manufacturing" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Health Care and Life Science </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Enhancing Patient Care and Ensuring Data Security: The Critical Role of IT Solutions in the Healthcare and Life Sciences Sector</p>
            <Link href="/healthCare" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3"> Food and Beverage</h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Harnessing Technology for Success: The Impact of IT Solutions in the Food & Beverage Industry</p>
            <Link href="/food" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3"> Fin Tech </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">The Impact of Technology on Financial Technology Companies</p>
            <Link href="finTech" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3"> Engineering </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Utilizing Technology to Amplify Success in the Engineering Industry</p>
            <Link href="/engineering" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10 border border-white relative">
            <h1 className="px-10 text-white   text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3"> Energy </h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">Empowering Your Business with IT Solutions</p>
            <Link href="/energy" >    <div className="absolute bottom-0 right-0"> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          <div className=" pt-10  border border-white md:mb-0 mb-10 relative">
            <h1 className="px-10 text-white  text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Education</h1>
            <p className="px-10 text-white  text-lg md:mb-20 mb-24">The Significance of IT Solutions in Education: Advancing Learning and Administration</p>
            <Link href="/education" >    <div className="absolute bottom-0 right-0 "> <img className="" src="/images/Vector_black.svg" alt="" /></div></Link>
          </div>
          {/* <div className=" pt-10 border border-black">
            <h1 className="px-10 text-2xl font-semibold  font-['Urbanist'] leading-snug pb-3">Digital Agencies</h1>
            <p className="px-10 text-lg">The online presence brings growth for businesses through digital marketing, online branding, and SEO strategies.
            </p>
            <Link href="" >    <div className="md:ml-72 md:mt-12"> <img className="" src="/images/Vector_white.svg" alt="" /></div></Link>
          </div> */}
        </div>
      </section>
      <section className="bg-white w-full md:pb-20 border border-black md:mt-20">
        <div className="md:py-20 ">
          <div className="md:mx-14  mb-8 md:mt-20 mt-8 mx-8 text-black ">
            <h1 className="justify-center text-center  md:text-3xl md:text-left md:w-3/4  text-3xl font-semibold font-['Urbanist'] leading-normal md:leading-snug ">Is your business prepared to take a leap into the future?
              <br />
              <br />
              We offer a complete range of services that seamlessly integrate IT solutions, captivating design and reliable cloud services to enhance your organisations.</h1>
          </div>
          <div className="md:ml-14 mb-10 md:mb-0 text-center flex justify-center items-center md:text-left md:justify-start">
            <button className=" border border-black text-center flex justify-center items-center  h-10 w-40 bg-black hover:bg-yellow-300 hover:text-black  text-white md:text-xl md:text-center  text-2xl font-light font-['Urbanist'] leading-normal md:leading-snug">Talk to us</button>
          </div>
        </div>
      </section>


      <section className=" bg-gray-50 items-center justify-between w-full  mx-auto px-4 pt-8 md:px-6 lg:px-8 xl:px-10">
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 ">
          <div className="flex text-center justify-center  md:mb-10 mt-4">
            <Link href="https://www.facebook.com/profile.php?id=61557453839432&is_tour_completed=true" > <img
              className=" mr-2 md:mr-2.5 hover:ease-in duration-300   hover:scale-125"
              src="/footer/Group-272.svg"
              alt=""
              width="32"
              height="32"
            /></Link>
            <Link href="https://www.instagram.com/rajesh.mylahalli/">   <img
              className="mr-2 md:mr-2.5 hover:ease-in duration-300   hover:scale-125"
              src="/footer/Vector.svg"
              alt=""
              width="32"
              height="32"
            /></Link>
            <Link href="https://www.youtube.com/channel/UCHBGnzbRP_FyqWDUQRwZcpQ"> <img
              className="mr-2 md:mr-2.5 hover:ease-in duration-300   hover:scale-125"
              src="/footer/Group-273.svg"
              alt=""
              width="32"
              height="32"
            /></Link>
            <Link href="https://www.linkedin.com/in/rajesh-ms-92904b2bb/"> <img
              className="mr-2 md:mr-2.5 hover:ease-in duration-300   hover:scale-125"
              src="/footer/Vector1.svg"
              alt=""
              width="32"
              height="32"
            /></Link>
            <Link href="https://twitter.com/notionwav">        <img

              className="mr-2 md:mr-2.5 hover:ease-in duration-300   hover:scale-125"
              src="/footer/Vector2.svg"
              alt=""
              width="32"
              height="32"
            /></Link>
          </div>
          <div className="">
            <h1 className="md:mt-0 mt-6 text-black md:text-xl  text-center  text-2xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
              PHONE
            </h1>
            <Link href="tel:+918884208188">   <h1 className=" hover:underline text-black md:text-xl  text-center  text-2xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">

              +91 888 420 8188
            </h1></Link>
          </div>
          <div>
            <h1 className="md:mt-0 mt-6 text-black md:text-xl  text-center  text-2xl   font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
              EMAIL

            </h1>
            <Link href="mailto:people@notion.business"> <h1 className="mb-10 md:mb-0 hover:underline text-black md:text-xl text-center  text-2xl font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
              people@notion.business
            </h1></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
