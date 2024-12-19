import React, { useEffect, useState } from "react";

const SearchBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger fade-in effect when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // Delay for fade-in animation to start
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center h-auto md:h-96 w-full px-4 py-8"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/7983140/pexels-photo-7983140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, // Replace with your actual image URL
            }}
        >
            {/* Heading Section */}
            <div className="text-center text-white mb-6 px-2 md:px-4 w-full md:max-w-3xl">
                {/* Heading with Fade-in and Left-to-right slide */}
                <h1
    className={`${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
    } transition-all duration-700 ease-out text-base sm:text-xl md:text-4xl lg:text-5xl font-bold animate-charcter`}
>
    Welcome to JobHub
</h1>

                {/* Subheading with Fade-in and Left-to-right slide */}
                <p
                    className={`${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    } transition-all duration-700 ease-out text-sm sm:text-lg md:text-xl mt-2`}
                >
                    Find your dream job easily and quickly!
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row bg-white justify-between items-center px-4 py-4 space-y-3 md:space-y-0 w-full max-w-lg md:max-w-4xl md:h-16 border rounded-md shadow-md">
                {/* Job Title / Keywords Input */}
                <div className="flex items-center w-full md:w-auto bg-white">
                    <div className="sm:pl-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 text-gray-500"
                        >
                            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Job title, keywords, or company"
                        className="w-full py-2 px-2 text-sm sm:text-base focus:outline-none"
                    />
                </div>

                {/* Location Input */}
                <div className="flex items-center w-full md:w-auto bg-white">
                    <div className="px-0 md:border-l md:pl-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 text-gray-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Jaipur, Rajasthan"
                        className="w-full py-2 px-2 text-sm sm:text-base focus:outline-none"
                    />
                </div>

                {/* Find Jobs Button */}
                <button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm sm:text-base py-2 px-3 rounded-md shadow-md">
                    Find jobs
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
