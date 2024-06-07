import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { state, dispatch } = useTheme();

    return (
        <div>
            <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
                Switch to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <select
                value={state.userPreferences.fontSize}
                onChange={(e) => dispatch({ type: 'SET_FONT_SIZE', payload: e.target.value })}
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button onClick={() => dispatch({ type: 'TOGGLE_ANIMATIONS' })}>
                {state.userPreferences.reduceAnimations ? 'Enable' : 'Disable'} Animations
            </button>
        </div>
    );
};

export default ThemeSwitcher;
