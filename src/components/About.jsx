import { useState, useEffect } from 'react';
import headshot from '../assets/jaydon_headshot.jpg';
import carmel_logo from '../assets/carmel_logo.png';
import iu_logo from '../assets/indiana_logo.png';
import miami_logo from '../assets/miami_logo.png';

export default function About() {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <section
            id="about"
            className="relative flex justify-center px-4 py-10 bg-white"
            data-aos="fade-up"
        >
            {/* Background + Foreground Card */}
            <div className="relative w-full max-w-4xl md:max-w-5xl mx-auto px-2 sm:px-4">
                {/* Background Card */}
                <div className="absolute top-0 left-0 right-8 bottom-0 translate-y-2 md:translate-y-4 bg-[#FFBE06] shadow-lg rounded-[20px]"></div>

                {/* Foreground Card */}
                <div
                    className="relative z-10 bg-[#f5f5f5] rounded-[20px] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10"
                >
                    {/* Profile Image */}
                    <div className="w-full max-w-[300px] rounded-[15px] overflow-hidden shadow-md flex-shrink-0">
                        <img src={headshot} alt="Jaydon" className="w-full h-auto object-cover" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-4 text-gray-800 max-w-2xl text-sm sm:text-base">
                        {/* Title + Logos */}
                        <div className="flex flex-row sm:items-center justify-between gap-3">
                            <h2 className="text-2xl sm:text-3xl font-extrabold font-antonio text-black">About Me</h2>
                            <div className="flex gap-3 sm:gap-4">
                                <img src={miami_logo} alt="Miami University" className="h-6 sm:h-8 w-auto" />
                                <img src={iu_logo} alt="IU" className="h-6 sm:h-8 w-auto" />
                                <img src={carmel_logo} alt="CHS" className="h-6 sm:h-10 w-auto" />
                            </div>
                        </div>

                        {/* Paragraphs */}
                        <p>
                            Hi! I'm Jaydon — the tutor behind Carmel Tutors. I'm a CHS graduate now studying{' '}
                            <span className="font-semibold text-[#042D71]">Biomedical Engineering</span> at Miami University of
                            Ohio, and I’m also continuing my education this summer by taking courses through Indiana
                            University.
                        </p>

                        {/* Conditionally show paragraphs on mobile */}
                        {(showMore || !isMobile) && (
                            <>
                                <p className="mb-4">
                                    I wasn’t always the top student, but I’ve learned that hard work and patience go a long way —
                                    and that’s the mindset I bring to every session. I connect well with students of all ages and
                                    enjoy making learning{' '}
                                    <span className="font-semibold text-[#042D71]">less stressful and more rewarding</span>.
                                </p>

                                <p className="mb-4">
                                    I'm proud to work as a paid{' '}
                                    <span className="font-semibold text-[#042D71]">academic tutor at Miami University</span>, where I
                                    support fellow students in math and science courses. My goal is to create a space where
                                    students feel supported, encouraged, and capable of doing their best.
                                </p>
                            </>
                        )}

                        {/* Toggle button only on mobile */}
                        {isMobile && (
                            <button
                                className="text-[#042D71] font-semibold underline mt-2 w-fit"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? 'Read Less...' : 'Read More...'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}