"use client";
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { state, dispatch } = useTheme();

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
            <button
                onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Switch to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <select
                value={state.userPreferences.fontSize}
                onChange={(e) => dispatch({ type: 'SET_FONT_SIZE', payload: e.target.value })}
                className="ml-4 p-2 border rounded-md"
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    );
};

export default ThemeSwitcher;
