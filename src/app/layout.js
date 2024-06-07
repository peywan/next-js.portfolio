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

    return <div className="container">{children}</div>;
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
