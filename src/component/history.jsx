import images from "../assets/hall/hall4.jpg"
import { history } from "../utilis/history"
import Numbers from "./numbers"
export default function History() {
    return (
        <div>
            <section className="text-center space-y-5 md:space-y-8 py-16 px-5">
                <h1 className="text-3xl font-extrabold uppercase text-[#B9A38B]"> OUR HISTORY</h1>

                <p>THE NESTORA ARCHIVE</p>

                <p className="px-4">A legacy built quietly.
                    A standard built to last.</p>
            </section>

            <div className="relative overflow-hidden max-w-7xl m-auto">
                <div
                    className="absolute left-12 md:left-30 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#B9A38B] to-transparent md:-translate-x-1/2">

                </div>

                <div className="space-y-32 px-4 md:px-0">
                    {history.map((history, index) => (
                        <div key={history.index}
                            className="relative grid md:grid-cols-2 gap-10">

                            <div className="pl-14 md:pl-0 md:pr-16">
                                <p className="font-serif text-7xl md:text-9xl leading-none text-white/[0.035] opacity-35">{history.year} </p>
                                <p className="hidden md:block mt-6 text-[10px] uppercase tracking-[0.5em] text-white/30 text-center"> Chapter {String(index + 1).padStart(2, "0")}</p>
                            </div>

                            <div className="pl-14 md:pl-0 md:pr-5">
                                <div className="group flex flex-col lg:flex-row gap-8">
                                    <div className="relative shrink-0 w-full lg:w-72 h-80 overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem]">
                                        <img src={history.image}
                                            alt={history.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                                    </div>

                                    <div className="flex flex-col justify-center max-w-md">
                                        <span className="text-[#B9A38B] text-xs tracking-[0.35em]">{history.year}</span>
                                        <h2 className="mt-4 font-serif text-3xl md:text-4xl">{history.title}</h2>
                                        <div className="mt-5 w-12 h-px bg-[#B9A38B]/60"></div>
                                        <p className="mt-5 text-gray-400 leading-8"> {history.text} </p>

                                        <span className="mt-8 text-[10px] uppercase tracking-[0.4em] text-white/30"> Nestora Heritage </span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-6 md:left-30 top-8 w-4 h-4 rounded-full bg-[#0d0d0d] border border-[#B9A38B] md:-translate-x-1/2">
                                <div className="absolute inset-1 rounded-full bg-[#B9A38B]"></div>
                            </div>
                        </div>
                    ))}
                </div >
            </div>

            <div className="max-w-5xl m-auto text-center py-16 space-y-8 px-8">
                <h1 className="text-3xl font-extrabold uppercase text-[#B9A38B]">What Luxury Means To Us</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 py-6">
                    <div className="leading-10">
                        <p>DISCRETION</p>

                        <div className="flex items-center justify-center m-auto w-8 h-8 rounded-full bg-[#B9A38B]">
                            <p className="">01</p>
                        </div>
                    </div>

                    <div className="leading-10">
                        <p>PRECISION</p>

                        <div className="flex items-center justify-center m-auto w-8 h-8 rounded-full bg-[#B9A38B]">
                            <p className="">02</p>
                        </div>
                    </div>

                    <div className="col-span-2 text-4xl font-extrabold">
                        <h1>Nestora</h1>
                    </div>

                    <div className="leading-10">
                        <p>SERVICE</p>

                        <div className="flex items-center justify-center m-auto w-8 h-8 rounded-full bg-[#B9A38B]">
                            <p className="">03</p>
                        </div>
                    </div>

                    <div className="leading-10">
                        <p>EXPERIENCE</p>

                        <div className="flex items-center justify-center m-auto w-8 h-8 rounded-full bg-[#B9A38B]">
                            <p className="">04</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="max-w-5xl m-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
                    <img
                        src={images}
                        alt="images"
                        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full" />

                    {/* <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#B9A38B] to-transparent md:-translate-x-1/2"></div> */}

                    {/* <div className="space-y-8">
                        <h1 className="uppercase font-extrabold text-3xl">The nestora standard</h1>
                        <ul className="list-disc space-y-5 px-6">
                            <li>Personal concierge</li>
                            <li>Absolute privacy</li>
                            <li>Fine dining</li>
                            <li>Private transport</li>
                            <li>Bespoke experience</li>
                        </ul>
                    </div>
                </div> */}

            {/* </div> */} 
            <Numbers />
        </div>
    )
}

