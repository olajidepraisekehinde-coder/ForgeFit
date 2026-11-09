import React from 'react'
import { BiSolidPhone,  } from 'react-icons/bi'
import { FaConciergeBell } from 'react-icons/fa'
import { FaAward, FaHeadset, FaWhatsapp } from 'react-icons/fa6'
import { GrSecure } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import logo from "../assets/hero/logo.jpeg"

export default function WhyUs() {
    return (
        <div>
            <div className="px-8">
                <h1 className="text-center font-bold text-4xl capitalize">Why choose Nestora</h1>
                <div className="max-w-6xl m-auto grid sm:grid-cols-2 lg:grid-cols-4 py-12 px-6 gap-8">
                    <div className='flex flex-col items-center space-y-3 text-center'>
                        <span className='text-center text-3xl font-extrabold'>
                            <FaAward />
                        </span>
                        <p className='text-lg text-[#B9A38B]'>Best Rate Guarantee</p>
                        <p>Enjoy the most Exclusive Rate</p>
                    </div>

                    <div className='flex flex-col items-center space-y-3 text-center'>
                        <span className='text-center text-3xl font-extrabold'>
                            <FaConciergeBell />
                        </span>
                        <p className='text-lg text-[#B9A38B]'>Exclusive Privileges</p>
                        <p className='text-center'>Access Complimentry upgrades and offer</p>
                    </div>

                    <div className='flex flex-col items-center space-y-3 text-center'>
                        <span className='text-center text-3xl font-extrabold'>
                            <GrSecure />
                        </span>
                        <p className='text-lg text-[#B9A38B]'>Secure Booking</p>
                        <p>Information is safe and protected</p>
                    </div>

                    <div className='flex flex-col items-center space-y-3 text-center'>
                        <span className='text-center text-3xl font-extrabold'>
                            <FaHeadset />
                        </span>
                        <p className='text-lg text-[#B9A38B]'>24/7 Concierge</p>
                        <p>Our team is always here for you</p>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl m-auto px-3'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-white shadow-2xl px-8 py-12 bg-black rounded-4xl items-center">
                    <div className='text-center'>
                        <img
                            src={logo}
                            alt="logo"
                            className="w-80 object-cover"
                        />
                        <p className='text-sm'>NESTORA</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl md:text-3xl font-bold font-serif'>Need More Assitance</h1>
                        <p className='max-w-xs'>Our concierge team is ready to help you plan your perfect stay</p>

                        <div className='flex flex-col space-y-3 items-center pt-6'>
                            <a
                                href="tel:+2348086157432"
                                className="flex items-center gap-2 font-bold text-sm">
                                <BiSolidPhone className="text-4xl text-[#B9A38B] " />
                                08086157432
                            </a>

                            <a
                                href="https://wa.me/2348086157432?text=Hi%20There!%20I'm%20curious%20about%20Nestora%20Hotel."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-bold text-sm">
                                <FaWhatsapp
                                    className="font-bold text-4xl text-[#B9A38B]" size={30} /> Chat us On Whatsapp
                            </a>

                            <a
                                href="mailto:olajidepraisekehinde@gmail.com"
                                className="flex items-center gap-2 font-bold text-sm">
                                <MdEmail className="text-4xl text-[#B9A38B]" />
                                olajidepraisekehinde@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
