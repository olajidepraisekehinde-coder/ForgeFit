import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function NotFound() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center px-6 text-white">
                <div className="w-full max-w-2xl text-center">
                    <SkeletonText className="mx-auto h-5 w-28" />
                    <SkeletonText className="mx-auto mt-8 h-32 w-72 md:h-40 md:w-96" />
                    <SkeletonText className="mx-auto mt-10 h-10 w-64 md:w-80" />
                    <div className="mt-8 space-y-3">
                        <SkeletonText className="mx-auto h-4 w-3/4" />
                        <SkeletonText className="mx-auto h-4 w-2/3" />
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <SkeletonBlock className="h-14 w-52 rounded-full" />
                        <SkeletonBlock className="h-14 w-52 rounded-full" />
                    </div>
                </div>
            </main>
        )
    }
    
    return (
        <main className="min-h-screen text-white flex items-center justify-center px-6">

            <div className="text-center max-w-2xl">

                <p className="text-[#B9A38B] uppercase tracking-[0.4em] text-sm py-5">
                    Nestora
                </p>

                <h1 className="text-[7rem] md:text-[10rem] font-extrabold leading-none text-[#B9A38B]/20">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold mt-16">
                   The Path Has Diverged
                </h2>

                <p className="text-gray-400 leading-7 max-w-lg mx-auto mt-6">
                   You have stepped into a corridor that doesn't exist. While our architects designed many secrets, this page is not one of them. 
                   Perhaps you were seeking a whisper that has already been carried away by the wind. Let us guide you back to the sanctuary.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    <Link
                        to="/"
                        className="bg-[#B9A38B] text-[#1B1420] px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300">
                        Return to Reality
                    </Link>

                    <Link
                        to="/rooms"
                        className="border border-[#B9A38B] text-[#B9A38B] px-8 py-4 rounded-full font-semibold hover:bg-[#B9A38B] hover:text-[#1B1420] transition duration-300">
                        Explore Rooms
                    </Link>

                </div>

            </div>

        </main>
    );
}

 