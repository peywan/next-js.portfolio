"use client";
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
    const { state } = useTheme();

    return (
        <section className={`font-size-${state.userPreferences.fontSize} py-6`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 mx-auto max-w-3xl">
                <Image
                    src={"https://scontent.farn2-2.fna.fbcdn.net/v/t39.30808-6/424928883_783655863790790_8510291933938260959_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jnQEPSmB1qMQ7kNvgFGRjLG&_nc_ht=scontent.farn2-2.fna&oh=00_AYAV-eAINBcgtEVnsOOn_Hy73i_TtfA8PGImXOgvR_uMgA&oe=666B77A9"}
                    alt="Profile"
                    width={128} // Define the width
                    height={128} // Define the height
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h1 className={`text-4xl font-bold mb-4 ${state.theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Welcome to My Portfolio
                </h1>
                <p className={`text-xl ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    I&apos;m a frontend developer with a passion for creating interactive and dynamic user experiences.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
