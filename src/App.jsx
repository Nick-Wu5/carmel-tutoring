import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import BrowseClasses from './components/BrowseClasses.jsx'
import BookForm from './components/BookForm.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTopButton.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animations in ms
            once: true,    // whether animation should happen only once - while scrolling down
            offset: 0,
        });

        // Refresh AOS after render
        window.addEventListener('load', AOS.refresh);
        window.addEventListener('resize', AOS.refresh);

        return () => {
            window.removeEventListener('load', AOS.refresh);
            window.removeEventListener('resize', AOS.refresh);
        };
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <section className="mb-10">
                <Navbar />
            </section>

                <main className="flex-grow">

                    <section id="home" className="mb-10">
                        <Home />
                    </section>

                    <section id="about" className="mb-10">
                        <About />
                    </section>

                    <section id="classes" className="mt-20">
                        <BrowseClasses />
                    </section>

                    <section id="book" className="mt-20"s>
                        <BookForm />
                    </section>

                </main>
            <Footer />

            {/* Scroll To Top Button */}
            <ScrollToTop />
        </div>
    );
}

export default App;
