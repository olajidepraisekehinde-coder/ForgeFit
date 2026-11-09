import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function Contact() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    const navigate = useNavigate()
    const revealUp = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const revealLeft = {
        hidden: { opacity: 0, x: -28 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const revealRight = {
        hidden: { opacity: 0, x: 28 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const [input, setInput] = useState({
        fullName: "",
        email: "",
        plan: location.state?.plan || "",
        message: "",
        subject: ""
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
                "https://formspree.io/f/xyegjqlr",
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


    if (isLoading) {
        return (
            <div className="pt-32 2xl:max-w-7xl 2xl:mx-auto">
                <div className="space-y-5 px-8 pb-10 md:px-24">
                    <SkeletonText className="h-12 w-80 md:w-[32rem]" />
                    <SkeletonText className="h-5 w-3/4 md:w-[34rem]" />
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-24 mb-16">
                    <div className="space-y-6 rounded-xl bg-[#2C1F33] p-5 md:p-10">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <SkeletonBlock className="h-16 w-full rounded-lg" />
                            <SkeletonBlock className="h-16 w-full rounded-lg" />
                            <SkeletonBlock className="col-span-2 h-16 w-full rounded-lg" />
                            <SkeletonBlock className="col-span-2 h-36 w-full rounded-lg" />
                            <SkeletonBlock className="col-span-2 mx-auto h-16 w-44 rounded-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonBlock key={index} className="h-36 w-full rounded-xl" />
                        ))}
                        <SkeletonBlock className="h-64 w-full rounded-xl md:col-span-2" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>

            <div className="pt-24 md:pt-34 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                    className="pb-10 px-8 md:px-24 space-y-5">
                    <motion.h1 variants={revealUp} className="font-bold text-3xl md:text-6xl leading-tight font-serif">Connect With Nestora</motion.h1>
                    {/* <motion.p variants={revealUp} className="leading-7 max-w-xl">Elevate your performance. Reach out to our specialist trainers or inquire about our elite membership tiers.</motion.p> */}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                    className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 px-6 mb-16 text-gray">
                    <motion.form
                        variants={revealLeft}
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#2C1F33] px-5 py-8 md:p-10 rounded-xl shadow-[-8px_-16px_16px_rgba(72,52,82,0.6),16px_8px_16px_rgba(0,0,0,0.5)]">

                        <motion.div variants={revealUp} className="col-span-2 md:col-span-1">
                            <label className="block mb-2 font-medium text-gray-300">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={input.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-gray-600 bg-transparent text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </motion.div>

                        <motion.div variants={revealUp} className="col-span-2 md:col-span-1">
                            <label className="block mb-2 font-medium text-gray-300">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full rounded-lg border border-gray-600 bg-transparent text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </motion.div>

                        <motion.div variants={revealUp} className="col-span-2">
                            <label className="block mb-2 font-medium text-gray-300">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                value={input.subject}
                                onChange={handleChange}
                                placeholder="hall inquiry"
                                className="w-full rounded-lg border border-gray-600 bg-transparent text-white px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </motion.div>

                        <motion.div variants={revealUp} className="col-span-2">
                            <label className="block mb-2 font-medium text-gray-300">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={input.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="What can we do for you"
                                className="w-full rounded-lg border border-gray-600 text-white bg-transparent px-4 py-3 outline-none focus:border-[#85A9FF]" required />
                        </motion.div>

                        {errorMessage && (
                            <motion.div variants={revealUp} className="w-full mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 md:col-span-2">
                                <p className="text-red-400 text-sm text-center">
                                    {errorMessage}
                                </p>
                            </motion.div>
                        )}

                        {success && (
                            <motion.div variants={revealUp} className="mt-4 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 md:col-span-2">
                                <p className="text-green-400 text-sm text-center">
                                    {success}
                                </p>
                            </motion.div>
                        )}

                        <motion.div variants={revealUp} className="md:col-span-2 m-auto">
                            <button
                                type="submit"
                                disabled={loading}
                                className="text-lg md:text-xl flex items-center justify-center gap-2 rounded-4xl shadow-2xl bg-[#B9A38B] md:px-16 px-10 py-5 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                                {loading ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Contact us"
                                )}
                            </button>
                        </motion.div>
                    </motion.form>

                    <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
                        <motion.div variants={revealRight} className="px-8 py-6 rounded-xl bg-[#B9A38B] ">
                            <IoLocationOutline className="text-2xl my-2 text-[#2C1F33]" />
                            <p className="font-bold text-md  py-2">HeadQuarter</p>
                            <p className="text-sm dark:text-white">Zone 1 road 4 Tella Estate Akobo Ojurin Akobo Ibadan.</p>
                        </motion.div>

                        <motion.div variants={revealRight} className="bg-[#B9A38B] px-8 py-6 rounded-xl">
                            <FaPhone className="text-2xl my-2 text-[#2C1F33]" />
                            <p className="font-bold text-md  py-2">Phone</p>
                            <div className="text-sm">
                                <p>+234 8086157432</p>
                                <p>+234 09061307116</p>
                            </div>
                        </motion.div>

                        <motion.div variants={revealRight} className="bg-[#B9A38B]  px-8 py-6 rounded-xl">
                            <FaRegClock className="text-2xl my-2 text-[#2C1F33]" />
                            <p className="font-bold text-md  py-2">Hours</p>
                            <p className="text-sm">Mon-Fri: 04:00 - 23:00</p>
                            <p>Sat-Sun: 06:00 - 21:00</p>
                        </motion.div>

                        <motion.div variants={revealRight} className="px-8 py-6 rounded-xl bg-[#B9A38B] ">
                            <MdOutlineMail className="text-2xl my-2 text-[#2C1F33]" />
                            <p className="font-bold text-md  py-2">E-mail</p>
                            <p className="text-sm">concierge@forgefit.com
                                olajidepraisekehinde@gmail.com</p>
                        </motion.div>

                        <motion.div variants={revealRight} className="rounded-2xl md:col-span-2 shadow-lg">
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
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
