export default function Footer() {
    return (
        <footer className="bg-[#042D71] text-white py-6 border-t border-[#0856D7]">
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-y-2 sm:gap-y-0">
                {/* Website Title */}
                <h3 className="text-lg font-bold font-antonio tracking-wide">
                    Carmel Tutoring
                </h3>

                {/* Contact */}
                <p className="text-sm sm:text-base">
                    Questions? Call:{" "}
                    <a
                        href="tel:3176065504"
                        className="hover:text-[#FFBE06] transition-colors"
                    >
                        317-606-5504
                    </a>
                </p>

                {/* Designer Credit */}
                <p className="text-xs italic opacity-80">
                    Designed by Nick Wu.
                </p>
            </div>
        </footer>
    );
}