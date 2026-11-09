import { useState } from "react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useTheme } from "../utilis/useTheme";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const location = useLocation();

    // const plan = location.state?.plan || "";
    const navigate = useNavigate()
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        plan: location.state?.plan || "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("")
        setErrorMessage("")
        setLoading(true);

        try {
            const response = await fetch(
                "https://formspree.io/f/xbdnlbpq",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(input),
                }
            );


            if (response.ok) {
                setSuccess(
                    "Message sent suucessfully. Redirecting back to Home..."
                );


                setInput({
                    fullName: "",
                    email: "",
                    plan: "",
                    message: "",
                });
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                setErrorMessage("Something went wrong")
            }


        } catch (error) {
            console.log(error);
            setErrorMessage("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const { darkMode } = useTheme()

    return (
        <div>

            <div className="pt-32 2xl:max-w-7xl 2xl:mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pb-10 px-8 md:px-24 space-y-5">
                    <h1 className="font-bold text-3xl md:text-5xl leading-tight">Connect With ForegFit</h1>
                    <p className="leading-7 max-w-xl">Elevate your performance. Reach out to our specialist trainers or inquire about our elite membership tiers.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 px-6 md:px-24 mb-16 text-gray">
                    <motion.form
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1C1B1B] p-10 rounded-xl">

                        <div>
                            <label className="block mb-2 font-medium text-[#85A9FF]">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={input.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-gray-600 bg-transparent text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </div>


                        <div>
                            <label className="block mb-2 font-medium text-[#85A9FF]">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full rounded-lg border border-gray-600 bg-transparent text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </div>


                        <div className="md:col-span-2">
                            <label className="block mb-2 font-medium text-[#85A9FF]">
                                Membership Plan
                            </label>

                            <select
                                name="plan"
                                value={input.plan}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-600 bg-[#1C1B1B]/50  shadow-2xl text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required>

                                <option value="">Select a Plan</option>
                                <option value="Elite Performance">Elite Performance </option>
                                <option value="Forge Elite">Forge Elite</option>
                                <option value="Titan Prestige">Titan Prestige</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-2 font-medium text-[#85A9FF]">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={input.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Tell us about your fitness goals..."
                                className="w-full rounded-lg border border-gray-600 text-white bg-transparent px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </div>

                        {errorMessage && (
                            <div className="w-full mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 md:col-span-2">
                                <p className="text-red-400 text-sm text-center">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        {success && (
                            <div className="mt-4 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 md:col-span-2">
                                <p className="text-green-400 text-sm text-center">
                                    {success}
                                </p>
                            </div>
                        )}

                        <div className="md:col-span-2 m-auto md:m-0">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 rounded-full bg-[#85A9FF] px-8 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                                {loading ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Claim Your Membership"
                                )}
                            </button>
                        </div>
                    </motion.form>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black px-8 py-6 rounded-xl">
                            <IoLocationOutline
                                className="text-2xl my-2 text-[#85A9FF]" />

                            <p className="font-bold text-md  py-2">HeadQuarter</p>
                            <p className="text-sm dark:text-white">Zone 1 road 4 Tella Estate Akobo Ojurin Akobo Ibadan.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black px-8 py-6 rounded-xl">
                            <FaPhone
                                className="text-2xl my-2 text-[#85A9FF]" />

                            <p className="font-bold text-md  py-2">Phone</p>

                            <div className="text-sm">
                                <p>+234 8086157432</p>
                                <p>+234 09061307116</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black px-8 py-6 rounded-xl">
                            <FaRegClock
                                className="text-2xl my-2 text-[#85A9FF]" />

                            <p className="font-bold text-md  py-2">Hours</p>

                            <p className="text-sm">Mon-Fri: 04:00 - 23:00</p>
                            <p>Sat-Sun: 06:00 - 21:00</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black px-8 py-6 rounded-xl">
                            <MdOutlineMail
                                className="text-2xl my-2 text-[#85A9FF]" />
                            <p className="font-bold text-md  py-2">E-mail</p>
                            <p className="text-sm">concierge@forgefit.com
                                olajidepraisekehinde@gmail.com</p>
                        </motion.div>

                        <div className="px-5 py-4 grid grid-cols-2 md:grid-cols-2 gap-8 items-center">
                            <div className=" ">
                                <p className="text-md text-blue-900 font-bold transition hover:text-black">Follow Us on</p>
                            </div>

                            <div className={`flex gap-4 md:gap-5 ${darkMode ?
                                "text-white" : "text-black"}`}>

                                <a
                                    href="https://www.tiktok.com/@HeraWaveCodes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaTiktok
                                        className="text-xl hover:text-[#85A9FF] transition duration-300" />
                                </a>
                                <a
                                    href="https://x.com/@Heragoddessjuno"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaXTwitter
                                        className="text-xl hover:text-[#85A9FF] transition duration-300" />
                                </a>

                                <a
                                    href="https://www.instagram.com/herawavecodes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaInstagram
                                        className="text-xl hover:text-[#85A9FF] transition duration-300" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/olajide-praise-kehinde-610565411"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin
                                        className="text-xl hover:text-[#85A9FF] transition duration-300" />
                                </a>

                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl md:col-span-2 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.113079183766!2d3.9405355442184904!3d7.434429281220754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ecd92e1fa771%3A0x89dcb84ba719e104!2sAkobo%2C%20Ibadan%20200132%2C%20Oyo!5e0!3m2!1sen!2sng!4v1784094769455!5m2!1sen!2sng"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ForgeFit Location"
                                className="rounded-xl"
                            ></iframe>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
