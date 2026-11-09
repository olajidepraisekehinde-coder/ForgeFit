import hero2 from "../assets/hero/hero2.jpg";

export default function Hero() {
    return (
        <section>

            <div className="relative h-screen overflow-hidden z-50">
                <img
                    src={hero2}
                    alt="Nestora hotel"
                    className="w-full h-full object-cover"/>

                <div className="absolute inset-0 bg-black/50" />   

                <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-20 pt-30 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#B9A38B] mb-4 font-serif  ">
                        Welcome to Nestora
                    </h1>

                    <p className="text-xl md:text-2xl mb-6 italic font-serif">
                        Where Luxury Meets Legacy.
                    </p>

                    <p className="max-w-3xl mb-4 text-sm md:text-lg leading-8">
                        Nestora is more than a hotel, it's an experience reserved for those
                        who seek perfection, privacy, and elegance. Situated in one of the
                        world's most breathtaking destinations, Nestora combines timeless
                        architecture with modern luxury to create an unforgettable retreat
                        for entrepreneurs, celebrities and visionaries.
                    </p>

                    {/* <p className="max-w-3xl text-sm md:text-lg leading-8">
                        From stunning suites overlooking the ocean to award-winning
                        restaurants, private clubs, and world-class services, every moment at
                        Nestora is designed to exceed expectations. Whether you arrive for
                        business, leisure, or celebration, Nestora welcomes you to a world
                        where luxury knows no limits.
                    </p> */}
                </div>
            </div>
        </section>
    );
}