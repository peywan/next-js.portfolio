import HeroSection from '../components/HeroSection';
import ThemeSwitcher from '../components/ThemeSwitcher';
import AboutMe from '../components/AboutMe';
import CV from '../components/CV';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <ThemeSwitcher />
            <HeroSection />
            <AboutMe />
            <CV />
            <Footer />
        </div>
    );
}
