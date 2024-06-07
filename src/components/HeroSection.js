"use client";
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
    const { state } = useTheme();

    return (
        <section className={`font-size-${state.userPreferences.fontSize} py-20`}>
            <h1 className={`text-4xl font-bold mb-4 text-${state.theme === 'light' ? 'gray-900' : 'white'}`}>
                Welcome to My Portfolio
            </h1>
            <p className={`text-xl text-${state.theme === 'light' ? 'gray-700' : 'gray-300'}`}>
                I'm a frontend developer...
            </p>
        </section>
    );
};

export default HeroSection;
