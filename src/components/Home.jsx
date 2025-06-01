import tutoring_pic from "../assets/tutoring_home.jpg"

export default function Home() {
    return (
        <section id="home" className="relative bg-white py-24 md:py-40 px-5 md:px-20 overflow-hidden" data-aos="fade-up">

            {/* Gradient */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <radialGradient id="blobGradient" x1="100%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#042D71"/>
                        <stop offset="100%" stopColor="#0856D7"/>
                    </radialGradient>
                </defs>
            </svg>

            {/* Background Blobs */}
            <div
                className="absolute bottom-12 left-50 -translate-x-1/2 w-[500px] md:w-[800px] pointer-events-none z-0">
                <svg id="leftBlob" viewBox="0 0 900 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(450 400)">
                        <path fill="url(#blobGradient)"
                              d="M85.3 -127.9C102.4 -121.6 102.6 -84.3 122.7 -52.5C142.8 -20.6 182.7 5.7 193.4 37.6C204.1 69.6 185.6 107.2 158.5 136C131.4 164.9 95.9 185.1 61 185C26.1 184.9 -8.1 164.4 -46 154.3C-83.8 144.2 -125.4 144.5 -141.8 123.8C-158.2 103.2 -149.4 61.7 -151.9 23.7C-154.3 -14.2 -168.1 -48.7 -158 -72.6C-147.8 -96.6 -113.6 -110.1 -83.3 -110.4C-53 -110.6 -26.5 -97.5 3.8 -103.4C34.1 -109.3 68.1 -134.1 85.3 -127.9"
                        ></path>
                    </g>
                </svg>
            </div>
            <div
                className="absolute top-10 md:-top-5 left-1/2 -translate-x-1/2 w-[500px] md:w-[1000px] pointer-events-none z-0">
                <svg id="topBlob" viewBox="0 0 900 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(450 200)">
                        <path fill="url(#blobGradient)"
                              d="M112.9 -152.6C148.9 -152.4 182.7 -125.6 206.6 -89.6C230.4 -53.5 244.4 -8.2 227.8 25.2C211.3 58.6 164.2 80.1 124.7 85.9C85.1 91.7 53.1 81.8 26.7 88.6C0.2 95.3 -20.8 118.7 -41.2 121.3C-61.6 123.9 -81.4 105.8 -111.1 87.4C-140.8 69 -180.3 50.3 -208.9 14.9C-237.5 -20.5 -255.2 -72.6 -240.4 -111.9C-225.7 -151.2 -178.5 -177.8 -133.1 -173.7C-87.6 -169.6 -43.8 -134.8 -2.7 -130.6C38.4 -126.4 76.8 -152.8 112.9 -152.6"
                        ></path>
                    </g>¯
                </svg>
            </div>

            <div className="absolute -bottom-10 md:bottom-0 right-0 translate-x-1/3 w-[400px] md:w-[600px] lg:w-[700px] pointer-events-none z-0">
                <svg id="rightBlob" viewBox="0 0 900 900" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(450 400)">
                        <path fill="url(#blobGradient)"
                              d="M117.5 -202.5C154 -182.5 186.6 -154.5 214.5 -119.4C242.4 -84.3 265.7 -42.2 240 -14.8C214.3 12.5 139.6 25 110.6 58.2C81.6 91.4 98.3 145.3 87.5 189C76.7 232.8 38.3 266.4 7.8 253C-22.8 239.5 -45.7 179.1 -80.2 149C-114.7 118.9 -160.8 119.2 -163.6 99.4C-166.3 79.7 -125.7 39.8 -118.2 4.3C-110.6 -31.2 -136.3 -62.3 -136.4 -87C-136.5 -111.7 -111 -129.9 -84 -155.5C-57 -181.1 -28.5 -214 6 -224.4C40.5 -234.8 81 -222.6 117.5 -202.5"
                        ></path>
                    </g>
                </svg>
            </div>

            {/* Main Card */}
            <div className="relative max-w-6xl mx-auto z-10 bg-[#f5f5f5] px-0 md:px-20 py-20 flex flex-col rounded-[15px] md:flex-row
                            items-center justify-between shadow">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    {/* Grouped heading + subtext */}
                    <div className="space-y-2">
                        <h1 className="text-3xl lg:text-6xl font-extrabold text-gray-900 font-antonio">
                            Carmel Tutoring
                        </h1>
                        <p className="text-md sm:text-2xl text-gray-600 font-karla">
                            Tutoring that meets kids where they are
                        </p>
                    </div>

                    {/* Spaced button */}
                    <div className="mt-10">
                        <a href="#book" className="inline-block px-16 py-3 bg-[#F4B400] hover:scale-105 hover:bg-yellow-500 text-white
                                                   font-semibold rounded-[50px] shadow transition">
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex md:w-1/2 justify center mt-10 md:mt-0">
                    <img src={tutoring_pic} alt="Tutoring session"
                         className="rounded-[15px] shadow-lg max-w-lg w-full"/>
                </div>
            </div>
        </section>
    );
}