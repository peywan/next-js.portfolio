"use client";
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
    const { state } = useTheme();

    return (
        <section className={`font-size-${state.userPreferences.fontSize} py-20`}>
            <img
                src="https://www.facebook.com/photo/?fbid=783655873790789&set=a.103212895168427"
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h1 className={`text-4xl font-bold mb-4 ${state.theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Welcome to My Portfolio
            </h1>
            <p className={`text-xl ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                I'm a frontend developer with a passion for creating interactive and dynamic user experiences.
            </p>
        </section>
    );
};

export default HeroSection;
