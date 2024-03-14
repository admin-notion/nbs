import img from "next/image";
const About = () => {
  return (
    <div>
      <div className="bg-[#232534] md:w-full font-bold font-['Urbanist'] md:leading-[85.12px]">
        <div className="text-4xl pl-8 pb-20 pt-36 md:pl-20 md:pt-80 md:pb-20 text-white md:text-6xl">
          About Us
          <div className="w-7 h-1.5 bg-white"></div>
        </div>
      </div>
      <div className="pt-14 px-8 w-full md:text-center md:justify-between bg-white">
        <div className=" pb-8 text-4xl leading-normal bg-white md:text-6xl md:pt-32 font-extrabold text-gray-800 font-['Urbanist'] md:leading-normal">
          Bringing high-grade delivery
        </div>
        <div className="pb-10 leading-9 md:mt-10 md:mx-80 text-gray-800 text-base md:pb-28 font-normal font-['Poppins'] md:leading-[35px]">
          Our solution-focused company provides IT services in the following
          areas: AR/VR Development, Internet of Things, UI/UX Design, and Full
          Stack Development.
        </div>
        <div className="md:flex justify-evenly  md:space-x-3">
          <div className="pb-8">
            <img
              className=""
              src="/about/image-243.png"
              alt=""
              width="434"
              height="265"
            />
          </div>
          <div className="pb-8">
            <img
              className=""
              src="/about/Rectangle-487.png"
              alt=""
              width="434"
              height="265"
            />
          </div>
          <div className="pb-8">
            <img
              className=""
              src="/about/Rectangle-488.png"
              alt=""
              width="434"
              height="265"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white px-8">
        <div className=" text-[#232534] text-4xl pt-10 leading-9 pb-8 md:text-center md:pt-32 md:text-[76px] md:font-bold font-['Urbanist'] md:leading-[100.32px]">
          The ethical vision we hold
        </div>
        <div className="md:mt-10 md:mx-80 leading-8 md:text-center text-gray-800 text-base md:pb-28 md:font-normal md:font-['Poppins'] md:leading-[35px]">
          A studio that values inclusivity and elevates various ideas to achieve
          excellence in design and success for clients.
        </div>
      </div>
      <div className=" px-8 pt-8 pb-28 md:flex md:justify-evenly md:px-12 md:pb-10 md:space-x-16 bg-white">
        <div className="w-full pb-16">
          <img src="/about/image-244.png" alt="" width="650" height="697" />
        </div>
        <div className="leading-10 md:flex-wrap w-full">
          <div className="pb-8 text-4xl text-gray-800 md:text-6xl md:pb-6 font-bold font-['Urbanist'] md:leading-[79.20px]">
            Finding more about us for an exciting experience.
          </div>
          <div className=" text-gray-800 md:text-sm md:font-normal md:font-['Poppins'] md:leading-[35px]">
            Our solution-focused company provides IT services in the following
            areas: AR/VR Development, Internet of Things, UI/UX Design, and Full
            Stack Development.
            <br />
            Team has over 15 years of combined experience and offers a wide
            range of IT knowledge to startups, Enterprise level, small and
            medium-sized businesses. In order to provide client-focused outcomes
            that increase business value, we place a strong emphasis on fusing
            technical expertise with business domain knowledge. Our expertise is
            in providing creative and practical IT outsourcing solutions and
            consulting that can propel your company to new heights.
          </div>
        </div>
      </div>
      <div className="px-8 md:flex-wrap bg-gray-100 md:px-14">
        <div className="text-gray-800 text-6xl leading-10 md:text-8xl font-bold font-['Urbanist'] md:leading-normal md:pt-24 pt-10">
          <h1>Culture</h1>
        </div>
        <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>

        <div className="">
          <div className="flex space-x-7">
            <div className="text-gray-800 text-[76px] leading-[91.20px] md:text-8xl font-light font-['Urbanist'] md:leading-[115.20px] ">
              01
            </div>
            <div className="text-gray-800 md:text-6xl text-4xl leading-[43.20px] font-medium font-['Urbanist'] md:leading-[79.20px] md:pl-4 md:pt-8">
              <h1>Nurture the Human Factor</h1>
              <div className="md:flex flex_wrap items-center md:space-x-8">
                <div className="">
                  <button className="mt-6 mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] md:leading-snug opacity-75 rounded-[29px] md:pt-2 md:pb-2 md:pl-4 md:pr-4">
                    Committed
                  </button>
                </div>
                <div className="">
                  <button className="mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:pt-2 md:pb-2 md:pl-4 md:pr-4">
                    Caring
                  </button>
                </div>
                <div className="">
                  <button className=" mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:pt-2 md:pb-2 md:pl-4 md:pr-4">
                    Interactions
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
          <div className="flex space-x-7">
            <div className="text-gray-800 text-[76px] leading-[91.20px] md:text-8xl font-light font-['Urbanist'] md:leading-[115.20px]">
              02
            </div>
            <div className="text-gray-800 text-4xl leading-[43.20px] md:text-6xl font-medium font-['Urbanist'] md:leading-[79.20px] md:pt-8">
              <h1>Make It Happen</h1>
              <div className="md:flex flex_wrap md:space-x-8">
                <div className="">
                  <button className="mt-6 mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 md:px-4">
                    Passion
                  </button>
                </div>
                <div>
                  <button className="mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 px-4">
                    Dedication
                  </button>
                </div>
                <div className="">
                  <button className="mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 px-4">
                    Inventiveness
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
          <div className="flex space-x-7">
            <div className="text-gray-800 text-[76px] leading-[91.20px] md:text-8xl font-light font-['Urbanist'] md:leading-[115.20px]">
              03
            </div>
            <div className=" text-gray-800 text-4xl leading-[43.20px] md:text-6xl font-medium font-['Urbanist'] md:leading-[79.20px] md:pt-8">
              <h1>Success Takes Unity</h1>
              <div className="md:flex flex_wrap md:space-x-8">
                <div>
                  <button className="mt-6 mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 md:px-4">
                    Productive
                  </button>
                </div>
                <div>
                  <button className="mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 md:px-4">
                    Effective
                  </button>
                </div>
                <div>
                  <button className="mb-6 w-[190px] h-[54px] md:w-[165px] md:h-[48px] text-center text-zinc-800 bg-gray-300 text-lg font-medium font-['Poppins'] leading-snug opacity-75 rounded-[29px] md:py-2 md:px-4">
                    Trustworthy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
