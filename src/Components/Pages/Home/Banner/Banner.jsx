const Banner = () => {
    return (
        <div>
            <header className="bg-white dark:bg-gray-900">
                <div className="lg:flex">
                    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                                Build Your Professional <span className="text-green-600 dark:text-green-400">Resume</span> with Ease
                            </h2>

                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                                At <span className="bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent">Career Canvas</span>, we provide you with the tools to create a standout resume in minutes. Showcase your skills, achievements, and experiences with our user-friendly resume builder designed for modern professionals.
                            </p>

                            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-gray-700">
                                    Get Started
                                </a>
                                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://i.ibb.co.com/qdj6Y73/banner-image.webp')" }}>
                            <div className="w-full h-full"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;
