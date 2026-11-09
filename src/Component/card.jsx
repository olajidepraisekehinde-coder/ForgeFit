import { Link } from "react-router-dom";
import abs from "../assets/abs.webp"
import weight from "../assets/weight.webp";
import lift2 from "../assets/lift2.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
export default function Card() {
    return (
        <>
            <section className="text-center my-20">
                <h1 className="text-3xl font-bold">Featuted <span className="text-[#85A9FF]">Programs</span></h1>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">

                    <div className="relative group overflow-hidden rounded-xl">
                        {/* group allows the hover */}

                        <img
                            src={abs}
                            alt="Workout"
                            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />

                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
                        {/* overlay to make a blur background */}

                        <div className="absolute top-2 left-2 z-10 text-[#85A9FF]">
                            <h2 className="text-xl font-bold">V-Up Training</h2>
                        </div>

                        <div className="absolute left-0 right-0 bottom-20 text-white translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm px-6">
                                Build muscle, improve endurance, and train with premium equipment under
                                expert guidance.
                            </p>
                        </div>

                        <div className="absolute left-0 right-25 bottom-0 px-2 flex gap-2 items-center text-[#85A9FF]">
                            <Link to="/program" className="text-left">Explore program</Link>
                            <FaArrowRightLong
                                className="text-xl" />
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl">

                        <img
                            src={weight}
                            alt="Workout"
                            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />

                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>

                        <div className="absolute top-2 left-2 z-10 text-[#85A9FF]">
                            <h2 className="text-xl font-bold">V-Taper Building</h2>
                        </div>

                        <div className="absolute left-0 right-0 bottom-20 text-white translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm px-6">
                                Build that coveted V-Taper and completely transform your physique
                                with this 4 week back and shoulder workout. Simply add it to your current routine!
                            </p>


                        </div>
                        <div className="absolute left-0 right-25 bottom-0 px-2 flex gap-2 items-center text-[#85A9FF]">
                            <Link to="/program" className="text-left">Explore program</Link>
                            <FaArrowRightLong
                                className="text-xl" />
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl">
                        <img
                            src={lift2}
                            alt="Workout"
                            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />

                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>

                        <div className="absolute top-2 left-2  z-10 text-[#85A9FF]">
                            <h2 className="text-xl font-bold">Muscle Training</h2>
                        </div>

                        <div className="absolute left-0 right-0 bottom-20 text-white translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm px-6">
                                This workout is perfect for anyone coming off a long shredding phase and looking for a workout to help you build back some of the strength and muscle lost.e.
                            </p>

                        </div>
                        <div className="absolute left-0 right-25 bottom-0 px-2 flex gap-2 items-center text-[#85A9FF]">
                            <Link to="/program" className="text-left">Explore program</Link>
                            <FaArrowRightLong
                                className="text-xl" />
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
 