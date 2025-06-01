export default function BookForm() {
    return (
        <section id="form" className="relative px-4 py-12 bg-white overflow-hidden" data-aos="fade-up">
            <div className="max-w-5xl mx-auto">

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none"></div>

                {/* Form Container */}
                <div className="relative pb-[150%] sm:pb-[75%] border-8 overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe9IjHskxmNVnN7VGqPl4K0BXvGZLVG2QFh2cfqEsk8zi2x9Q/viewform?embedded=true"
                        width="640"
                        height="2909"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        title="Tutoring Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    );
}