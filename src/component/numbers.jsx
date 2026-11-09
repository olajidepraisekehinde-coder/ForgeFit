
export default function Numbers() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-10 px-10 space-y-5">

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[#B9A38B] text-4xl font-extrabold">500</p>
                    <p className="max-w-64 md:max-w-45 text-gray-300">
                        Handcrafted suites, each uniquely designed.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[#B9A38B] text-4xl font-extrabold">
                        28 <span className="text-lg font-medium">years</span>
                    </p>
                    <p className="max-w-64 md:max-w-45 text-gray-300">
                        Of safeguarding privacy and discretion.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[#B9A38B] text-4xl font-extrabold">12</p>
                    <p className="max-w-64 md:max-w-45 text-gray-300">
                        Culinary temples, not merely restaurants.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[#B9A38B] text-4xl font-extrabold">70+</p>
                    <p className="max-w-64 md:max-w-45 text-gray-300">
                        Nationalities who trust us with their serenity.
                    </p>
                </div>

            </div>
        </div>
    )
}
