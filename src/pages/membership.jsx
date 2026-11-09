import { IoMdCheckmark, IoMdCheckmarkCircle } from "react-icons/io";
import membership from "../utilis/membership";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiToggleRight } from "react-icons/fi";
import { useState } from "react";
import benefits from "../utilis/benefit";
import Faq from "../FAQ/faq";
import { Link } from "react-router-dom";
import { IoClose, IoCloseCircleOutline } from "react-icons/io5";
import { useTheme } from "@/utilis/useTheme";
import { motion } from "framer-motion";

export default function Membership() {
    // const  prices = 
    const [yearly, setYearly] = useState(false)


    const renderValue = (value) => {
        if (value === true) {
            return (
                <div className="flex justify-center items-center w-full">
                    <IoMdCheckmark className="text-xl text-[#85A9FF]" />
                </div>
            );
        }

        if (value === false) {
            return (
                <div className="flex justify-center items-center w-full">
                    <IoClose className="text-xl text-gray-500" />
                </div>
            );
        }

        return (
            <div className="text-center">
                {value}
            </div>
        );
    };
    const { darkMode } = useTheme()

    return (
        <div>

            <motion.section
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-32 2xl:max-w-7xl 2xl:mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto px-5 text-center">
                    <h1 className="py-4 text-4xl md:text-5xl font-bold">
                        Evaluate Your Performance
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg leading-7 dark:text-gray-400">
                        Select a membership tier that matches your ambition.
                        Precision training meets a luxury environment designed
                        for those who demand excellence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-4 my-10">
                    <span className={!yearly ? "text-gray-500" : "line-through"}>
                        Monthly
                    </span>

                    <div className="w-14 h-8 bg-gray-700 rounded-full flex items-center px-1 cursor-pointer"
                        onClick={() => setYearly(!yearly)}>

                        <FiToggleRight
                            className={`w-6 h-6 rounded-full text-[#85A9FF] transition-transform duration-300 ${yearly ? "translate-x-6" : ""} `} />
                    </div>

                    <p className={yearly ? "text-gray-500" : "line-through"}>
                        Yearly{" "} <span className="text-[#85A9FF]">(save 20%)</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center">

                    {yearly && (
                        <>
                            <p> Yearly Discount</p>
                        </>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
                    {membership.map((plan) => (
                        <div
                            key={plan.id}
                            className={`group rounded-2xl border border-[#787776] bg-[#121311] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(133,169,255,0.35)]
                       ${plan.featured ? "scale-105 border-[#85A9FF] shadow-[0_15px_50px_rgba(133,169,255,0.35)]" : ""}`}>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white">
                                {plan.title}
                            </h2>

                            {/* Price */}
                            <div className="mt-3">
                                <div className="flex items-center text-4xl font-bold text-[#85A9FF]">
                                    <TbCurrencyNaira />
                                    <span>

                                        {yearly
                                            ? (Math.round(plan.price * 0.8))
                                            : plan.price}
                                    </span>

                                    <sub className="ml-1 text-xs text-gray-400">
                                        {plan.duration}
                                    </sub>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mt-10 space-y-5">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature.text}
                                        className="flex items-center gap-3  pb-4">

                                        {feature.included ? (
                                            <IoMdCheckmarkCircle className="text-lg text-[#85A9FF]" />
                                        ) : (
                                            <IoCloseCircleOutline className="text-lg text-gray-500" />
                                        )}

                                        <p className={feature.included ? "text-white" : "text-gray-500 line-through"}>
                                            {feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <Link to="/contact" state={{ plan: "Elite Performance" }}>

                                <button
                                    className={`mt-10 w-full rounded-full py-4 font-semibold transition-all duration-300
                              ${plan.featured ? "bg-[#85A9FF] text-black hover:scale-105" : "border border-[#85A9FF] text-white hover:bg-[#85A9FF] hover:text-black"}`} >
                                    Start Your Journey
                                </button>
                            </Link>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="px-5 md:px-12 lg:px-28 py-5">

                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="text-left py-4">Features</th>
                                <th className="text-center py-4">Basic</th>
                                <th className="text-center py-4">Pro</th>
                                <th className="text-center py-4">Elite</th>
                            </tr>
                        </thead>

                        <tbody>
                            {benefits.map((item) => (
                                <tr key={item.feature} className="border-b border-gray-800">
                                    <td className="py-5">{item.feature}</td>

                                    <td className=" ">
                                        {renderValue(item.basic)}
                                    </td>

                                    <td className="">
                                        {renderValue(item.pro)}
                                    </td>

                                    {/* <div className="flex justify-center items-center"> */}

                                    <td className=" ">
                                        {renderValue(item.elite)}
                                    </td>
                                    {/* </div> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 px-5 text-white" id="faq">
                    <h1 className={`text-center text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-black"}`}>Common Questions</h1>
                    <Faq />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1C1B1B] text-center my-16 mx-5 md:mx-12 rounded-3xl border border-white/10 px-4 py-12 md:px-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                    <div className="">
                        <h1 className="text-3xl l md:text-5xl font-bold leading-tight text-white ">Ready to Begin?</h1>
                        <p className="mt-5 max-w-md text-gray-400 leading-7 m-auto">Join the ForgeFit community today and transform your fitness journey with high-performance training and elite recovery.</p>

                        <div className="text-center pt-5">
                            <Link to="/contact"><button className="rounded-full bg-[#85A9FF] px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">Book A Tour</button></Link>
                        </div>

                    </div>
                </motion.div>
            </motion.section >
        </div>
    );
}