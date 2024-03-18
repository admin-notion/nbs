import React from "react";
import ReactDOM from "react";
import Contact from "../components/contact";

const Brand_identity = () => {
  return (
    <div className="w-full">
      <section className="w-full">
        <div className="w-full bg-gradient-to-r from-gray-700 to-gray-700 relative">
          <img
            src="/branding/Robo.png"
            className=" w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="pl-8 pr-8 pb-10 md:pb-16 w-full md:pl-[154px]">
            <div className=" flex text-white md:text-[58px] text-4xl font-bold font-['Urbanist'] pt-10 pb-10">
              <h1>Brand Identity</h1>
            </div>
            <div className="flex pr-4 pb-6 md:w-[741px] text-white text-2xl md:text-[32px] font-light font-['Urbanist'] leading-[46.08px] md:pb-10">
              <p>
                Develop a strong brand identity that reflects the startup&apos;s
                values, mission, and unique value proposition. <br />
                <br />
                This includes designing a compelling logo, selecting brand
                colors and typography, and establishing brand guidelines for
                consistent visual representation across all platforms.
              </p>
            </div>
            <div className=" flex justify-center w-[120px] md:w-[160px] md:h-[50px] bg-white rounded items-center">
              <button className=" text-gray-800 md:text-2xl text-xl font-semibold font-['Urbanist'] leading-[34.56px]">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className=" pl-8 pr-8 pt-8 md:pl-[154px] bg-[#232534]">
          <div className=" pb-8 pr-8 text-3xl md:pt-12 md:pb-16 flex text-white md:text-[32px] font-light font-['Urbanist'] leading-[46.08px]">
            <h3>
              Developing a strong brand identity involves several key steps.
              Here is a general outline of the process:
            </h3>
          </div>
          <div className="w-full flex flex-wrap justify-between md:pr-20">
            <div className="md:flex-wrap justify-evenly md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  01
                </div>
                <div className="pt-6 flex md:w-[209px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Research and Analysis:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Conduct market research to understand your target audience,
                    competitors, industry trends, and market positioning.
                  </li>
                  <br />
                  <li>
                    Identify your brand&apos;s unique value proposition and key
                    differentiators.
                  </li>
                  <br />
                  <li>
                    Analyze your brand&apos; strengths, weaknesses, opportunities,
                    and threats (SWOT analysis).
                  </li>
                  <br />
                  <li>
                    Collect feedback from stakeholders, customers, and employees
                    to gain insights.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 sm:pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  02
                </div>
                <div className="pt-6 md:w-[209px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Define Brand Strategy:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Clearly define your brand&apos;s mission, vision, and core
                    values.
                  </li>
                  <br />
                  <li>Determine your brand&apos;s personality and tone of voice.</li>
                  <br />
                  <li>
                    Identify your target audience and understand their needs,
                    preferences, and behaviors.
                  </li>
                  <br />
                  <li>
                    Set specific brand objectives and goals to guide the
                    development process.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  03
                </div>
                <div className="pt-6 md:w-[209px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  logo <br /> Design
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Create a visually distinctive and memorable logo that
                    represents your brands identity.
                  </li>{" "}
                  <br />
                  <li>
                    Consider the use of typography, colors, symbols, and imagery
                    that align with your brand attributes and appeal to your
                    target audience.
                  </li>{" "}
                  <br />
                  <li>
                    Ensure that the logo is versatile, scalable, and easily
                    recognizable across different mediums and sizes.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  04
                </div>
                <div className="pt-6 md:w-[209px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Visual <br />
                  Identity:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Develop a cohesive visual identity system that extends
                    beyond the logo.
                  </li>{" "}
                  <br />
                  <li>
                    Select color palettes, typography, and graphic elements that
                    align with your brand&apos;s personality and values.
                  </li>{" "}
                  <br />
                  <li>
                    Create guidelines for the consistent use of these visual
                    elements across various touch points, including print
                    materials, websites, social media, and packaging.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  05
                </div>
                <div className="pt-6 md:w-[209px] w-[150px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Brand Messaging:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Craft compelling brand messaging that communicates your
                    brand&apos;s value proposition, story, and key messages.
                  </li>
                  <br />
                  <li>
                    Develop a brand voice and tone that resonates with your
                    target audience and reflects your brand&apos;s personality.
                  </li>
                  <br />
                  <li>
                    Create messaging frameworks and guidelines to maintain
                    consistency in brand communication......
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8 ">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  06
                </div>
                <div className="pt-6 md:w-[209px] w-[150px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Brand Collateral:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Design marketing and promotional materials such as business
                    cards, brochures, stationery, and signage that reflect your
                    brand identity.
                  </li>
                  <br />
                  <li>
                    Develop templates and guidelines for consistent branding
                    across these collateral materials.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  07
                </div>
                <div className="pt-6 md:w-[209px] w-[150px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Online Presence:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Create a website that embodies your brand&apos;s visual identity
                    and effectively communicates your brand story, offerings,
                    and values.
                  </li>
                  <br />
                  <li>
                    Develop a consistent presence across social media platforms,
                    ensuring that visual elements, messaging, and tone align
                    with your brand identity.
                  </li>
                  <br />
                  <li>
                    Consider the user experience and ensure your online presence
                    reflects your brand&apos;s values and provides a seamless
                    experience for users.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="justify-between text-white text-[80px] font-thin font-['Urbanist']">
                  08
                </div>
                <div className="pt-6 md:w-[209px] w-[150px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Internal Branding:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Educate and align employees with the brand identity, values,
                    and messaging.
                  </li>
                  <br />
                  <li>
                    Foster a brand-centric culture and ensure employees
                    understand how to embody the brand in their interactions
                    with customers and stakeholders.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="md:flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  09
                </div>
                <div className="pt-6 md:w-[209px] w-[150px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Brand Guidelines:{" "}
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Document and share brand guidelines that outline the
                    standards and rules for using the brand identity elements
                    consistently.
                  </li>
                  <br />
                  <li>
                    Provide instructions on logo usage, typography, color
                    palettes, imagery, tone of voice, and other key design and
                    messaging considerations.
                  </li>
                  <br />
                </ul>
              </div>
            </div>

            <div className="flex-wrap md:pb-16 pb-8">
              <div className="flex pb-4">
                <div className="pr-2 text-white text-[80px] font-thin font-['Urbanist']">
                  10
                </div>
                <div className="md:pt-6 md:w-[300.91px] md:h-[71px] text-white text-3xl font-semibold font-['Urbanist'] leading-9">
                  Continuous Evaluation and Adaptation:
                </div>
              </div>
              <div className="md:w-[450px] text-white text-lg font-semibold font-['Urbanist'] leading-[29.34px]">
                <ul className="list-disc">
                  <li>
                    Regularly assess the effectiveness and impact of your brand
                    identity.
                  </li>
                  <br />
                  <li>
                    Gather feedback from customers, employees, and stakeholders
                    to make informed adjustments and improvements to your brand
                    strategy and execution.
                  </li>
                  <br />
                  <li>
                    Stay aware of market trends and competitor activities to
                    ensure your brand remains relevant and competitive.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className=" md:flex-wrap">
          <div>
            <Contact />
            { }
          </div>
        </section>
      </section>
    </div>
  );
};

export default Brand_identity;
