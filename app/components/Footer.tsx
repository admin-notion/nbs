import img from "next/image";
import Link from "next/link";
import FormsPage from "./reusableComponents/formsPage";
const Footer = () => {
  return (
    <main id="footers" className=" max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-black text-white ">

      <section className=" w-full ">
        <div className="pt-10 grid md:grid-cols-4 sm:grid-cols-1 gap-0">
          <div id="service">
            <h1 className="px-10 text-xl font-semibold font-Oswald  leading-snug pb-4">SERVICES</h1>
            <Link href="/applicationServices" >  <h1 className=" px-10 text-xl font-light font-Oswald leading-snug pb-3">Application Services</h1>  </Link>
            <Link href="/devops"  >   <h1 className=" px-10 text-xl font-light  font-Oswald  leading-snug pb-3">Dev Ops</h1> </Link>
            <Link href="/itStaff" >  <h1 className=" px-10 text-xl font-light  font-Oswald  leading-snug pb-3">IT Staffing</h1> </Link>
            <Link href="/testing"  >   <h1 className=" px-10 text-xl font-light  font-Oswald  leading-snug pb-3">QA & Testing </h1> </Link>
            <Link href="/product"  >  <h1 className=" px-10 text-xl font-light  font-Oswald  leading-snug pb-3">Product Engineering </h1> </Link>
            <Link href="/migration" >   <h1 className=" px-10 text-xl font-light font-Oswald  leading-snug pb-3">System Migration</h1> </Link>
          </div>
          <div className="">
            <h1 className="px-10 pt-6 md:pt-0 text-xl font-semibold  font-Oswald leading-snug pb-4">INDUSTRIES </h1>
            <Link href="/startup" >  <h1 className="px-10 text-xl font-light font-Oswald leading-snug pb-3">Start up</h1></Link>
            <Link href="/retailSector" >    <h1 className="px-10   text-xl font-light  font-Oswald  leading-snug pb-3">Retail Sector</h1></Link>
            <Link href="/professional" >  <h1 className="px-10 text-xl font-light  font-Oswald leading-snug pb-3">Professional Services</h1></Link>
            <Link href="/notForProfit" >  <h1 className="px-10  text-xl font-light font-Oswald  leading-snug pb-3">Not for Profit  </h1></Link>
            <Link href="/manufacturing" >    <h1 className="px-10 text-xl font-light font-Oswald  leading-snug pb-3">Manufacturing and Distribution  </h1></Link>
            <Link href="/healthCare" >     <h1 className="px-10  text-xl font-light  font-Oswald  leading-snug pb-3">Health Care and Life Science </h1></Link>
            <Link href="/food" >   <h1 className="px-10   text-xl font-light  font-Oswald  leading-snug pb-3"> Food and Beverage</h1></Link>
            <Link href="finTech" >   <h1 className="px-10   text-xl font-light  font-Oswald  leading-snug pb-3"> Fin Tech </h1></Link>
            <Link href="/engineering" >   <h1 className="px-10  text-xl font-light  font-Oswald  leading-snug pb-3"> Engineering </h1></Link>
            <Link href="/energy" >  <h1 className="px-10   text-xl font-light  font-Oswald  leading-snug pb-3"> Energy </h1></Link>
            <Link href="/education" >   <h1 className="px-10  text-xl font-light  font-Oswald  leading-snug pb-3">Education</h1></Link>
          </div>
          <div id="aboutUs">
            <h1 className="px-10 pt-6 md:pt-0 text-xl font-semibold  font-Oswald  leading-snug pb-4">COMPANY</h1>
            <Link href="/about" >  <h1 className="px-10 text-xl font-light font-Oswald leading-snug pb-3">About us </h1></Link>
            <Link href="/careers" >    <h1 className="px-10   text-xl font-light font-Oswald  leading-snug pb-3">careers</h1></Link>
            <Link href="/enquire" >  <h1 className="px-10 text-xl font-light font-Oswald  leading-snug pb-3">Enquiry</h1></Link>
            <Link href="/policyPrivacy" >    <h1 className="px-10 text-xl font-light  font-Oswald  leading-snug pb-3">Privacy policy</h1></Link>
          </div>
          <div className="text-center justify-center items-center align-middle md:mt-40 mt-10 ">
            <h1 className="px-10 text-2xl font-semibold  font-Oswald  leading-snug">Notion Business Solution</h1>
            <h1 className="px-10 text-xl font-normal  font-Oswald  leading-snug">Bengaluru , Karnataka</h1>
            <h1 className="px-10 text-xl font-normal font-Oswald  leading-snug ">INDIA</h1>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Footer;
