import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // you can install react-icons or use any icon

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#042D71] text-white shadow-lg transition-opacity duration-300 ease-in-out ${
                visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } hover:bg-[#0649b6]`}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
}