"use client";
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
    const { state } = useTheme();

    return (
        <section className={`font-size-${state.userPreferences.fontSize} py-20`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 max-w-l mx-auto text-center">
                <img
                    src="https://scontent.farn2-2.fna.fbcdn.net/v/t39.30808-6/424928883_783655863790790_8510291933938260959_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WYJ8vyx2uh0Q7kNvgHo2365&_nc_ht=scontent.farn2-2.fna&oh=00_AYBhVeK46HF8RxfxVOUeTnEu6PiYKTTcCi-e3ehJaJpSnQ&oe=66694529"
                    alt="Profile"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h1 className={`text-4xl font-bold mb-4 ${state.theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Welcome to My Portfolio
                </h1>
                <p className={`text-xl ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    I'm a frontend developer with a passion for creating interactive and dynamic user experiences.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
