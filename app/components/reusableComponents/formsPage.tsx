"use client"
import { FormEvent, useState } from "react";

const FormsPage = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [mobile, setMobile] = useState('');
    const [company, setCompany] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    mail,
                    mobile,
                    company,
                    content
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })



        } catch (err: any) {
            console.error('Err', err)
        }
    }


    return (
        <>
            <div id="forms">
                <div className="max-w-7xl md:ml-6 md:mt-10  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
                    <h1 className=" text-black md:text-3xl mb-6  md:text-left  text-4xl  font-semibold font-['Urbanist'] leading-normal md:leading-snug  ">
                        Is your business prepared to take a leap into the future?
                    </h1>
                    <form onSubmit={onSubmit}>

                        <div className=" text-lg font-medium leading-relaxed pt-3 text-black">Hola!  I am :
                            <input value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="ml-4 border-b border-black md:w-96 w-80 outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                placeholder=""
                            />
                        </div>


                        <div className=" text-lg font-medium leading-relaxed pt-3 text-black"> Email :
                            <input value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className="ml-4 border-b border-black md:w-96 w-80  outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder=" "
                            />
                        </div>
                        <div className=" text-lg font-medium leading-relaxed pt-3 text-black">Mobile :
                            <input value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="ml-4 border-b border-black md:w-96 w-80  outline-none   text-lg font-normal font-['Poppins'] leading-loose"
                                type="tel"
                                name="tel"
                                id="tel"
                                autoComplete="tel"
                                placeholder=" "
                            />
                        </div>

                        <div className=" text-lg font-medium leading-relaxed pt-3  text-black">Company :
                            <input value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="ml-4 border-b border-black md:w-96 w-80  outline-none  text-lg font-normal font-['Poppins'] leading-loose"
                                type="text"
                                name="text"
                                id="text"
                                placeholder=" "
                            />
                        </div>

                        <div className="col-span-full ">
                            <label
                                htmlFor="about"
                                className="block  text-lg font-medium leading-relaxed pt-6 text-black"
                            >
                                How can we help you ?
                            </label>
                            <div className="mt-2">
                                <input value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    type="text"
                                    id="about"
                                    name="about"
                                    className=" block md:w-96 w-80 md:h-28   rounded-sm  px-1.5  text-black border border-black outline-none sm:text-sm sm:leading-relaxed"
                                ></input>
                            </div>
                        </div>
                        <div className="relative flex gap-x-3 mt-10">
                            <div className="flex h-6 items-center">
                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">Get strategy guides, industry insights, trend reports, and more delivered straight to your email by subscribing to our resources!</label>

                            </div>
                        </div>


                        <button
                            type="submit"
                            className=" mt-10 rounded-sm bg-gray-300  text-black text-center text-base font-medium font-['Poppins'] leading-tight px-2.5 py-1.5 shadow-sm  hover:text-[#fe2712] md:w-44 md:h-12 w-32 h-11 "
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormsPage;