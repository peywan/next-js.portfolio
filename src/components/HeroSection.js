import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
    const { state } = useTheme();

    return (
        <section className={`font-size-${state.userPreferences.fontSize}`}>
            <h1 className={`text-${state.theme === 'light' ? 'black' : 'white'}`}>
                Welcome to My Portfolio
            </h1>
            <p className={`text-${state.theme === 'light' ? 'gray-700' : 'gray-300'}`}>
                I'm a frontend developer...
            </p>
        </section>
    );
};

export default HeroSection;
