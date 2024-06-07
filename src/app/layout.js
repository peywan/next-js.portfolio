"use client";
import { ThemeProvider } from '../context/ThemeContext';
import '../app/globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <div className="container">
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
