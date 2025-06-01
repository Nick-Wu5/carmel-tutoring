import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Consolidated nav link style with underline roll-out effect
    const linkStyle = `
        relative inline-block pb-1
        text-[#5B5A5A] hover:text-[#042D71]
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#042D71]
        after:transition-all after:duration-300 after:ease-in-out
        hover:after:w-full
    `;

    return (
        <nav className="top-0 z-50 w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <a href="#home">
                        <img src={logo} alt="Carmel Tutors Logo" className="h-10 w-auto max-w-[150px] object-contain" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-8 text-md font-karla">
                    <li><a href="#about" className={linkStyle}>About Me</a></li>
                    <li><a href="#classes" className={linkStyle}>View Classes</a></li>
                    <li><a href="#classes" className={linkStyle}>FAQs</a></li>
                    <li><a href="#book" className={linkStyle}>Book Now</a></li>
                </ul>

                {/* Hamburger Menu Icon - Mobile */}
                <button
                    className="lg:hidden text-[#5B5A5A] text-2xl z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`block h-0.5 w-6 bg-[#5B5A5A] transition-all duration-300 transform origin-center
                        ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-[#5B5A5A] transition-all duration-300 my-1
                        ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-[#5B5A5A] transition-all duration-300 transform origin-center
                        ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Dropdown Panel */}
            <div
                className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-48 bg-white shadow-lg transform transition-transform
                duration-300 ease-in-out z-40 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className="flex flex-col px-6 pb-4 space-y-3 font-karla text-sm">
                    <li><a href="#about" className={linkStyle}>About Me</a></li>
                    <li><a href="#classes" className={linkStyle}>View Classes</a></li>
                    <li><a href="#classes" className={linkStyle}>FAQs</a></li>
                    <li><a href="#book" className={linkStyle}>Book Now</a></li>
                </ul>
            </div>
        </nav>
    );
}