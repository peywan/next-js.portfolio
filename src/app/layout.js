"use client";
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import '../app/globals.css';

const AppWrapper = ({ children }) => {
    const { state } = useTheme();

    useEffect(() => {
        if (state.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [state.theme]);

    useEffect(() => {
        if (state.userPreferences.reduceAnimations) {
            document.documentElement.classList.add('reduce-animations');
        } else {
            document.documentElement.classList.remove('reduce-animations');
        }
    }, [state.userPreferences.reduceAnimations]);

    return <div className={`container font-size-${state.userPreferences.fontSize}`}>{children}</div>;
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <AppWrapper>
                {children}
            </AppWrapper>
        </ThemeProvider>
        </body>
        </html>
    );
}
