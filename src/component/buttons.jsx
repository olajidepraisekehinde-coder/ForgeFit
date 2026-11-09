import { Link } from "react-router-dom";

export default function Button() {
    return (
        <div>
            <Link to="/room">
                <button className="bg-[#2C1F33] text-[#B9A38B] font-semibold rounded-3xl transition-all duration-300 cursor-pointer 
                shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] hover:shadow-[-10px_-10px_20px_rgba(72,52,82,0.7),10px_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:scale-105
                 active:translate-y-1 active:scale-95 active:shadow-[inset_-4px_-4px_8px_rgba(72,52,82,0.5),inset_4px_4px_8px_rgba(0,0,0,0.6)]">

                    <div
                        className="group relative overflow-hidden px-6 py-5 rounded-3xl bg-[rgba(44,31,51,0.45)] backdrop-blur-2xl  border border-[rgba(185,163,139,0.18) text-[#B9A38B] font-medium tracking-wide shadow-[0_8px_32px_rgba(185,163,139,0.18)] transition-all duration-500 hover:scale-105 hover:shadow-[0_12px_50px_rgba(185,163,139,0.35)] active:scale-95">
                        {/* Top glass reflection */}
                        <span
                            className=" absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none " />

                        {/* Shine animation */}
                        <span
                            className=" absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                        <span className="relative z-10 flex items-center gap-3">
                            Explore Our Rooms
                            {/* <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">
                            <LuMoveRight
                            className="text-md w-full" />
                        </span> */}
                        </span>
                    </div>
                </button> </Link>

        </div>
    )
}
