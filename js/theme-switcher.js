const { useState, useEffect } = React;

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false); // Set initial state to false for light theme

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prevIsDark => !prevIsDark);
    };

    return React.createElement('button', {
        onClick: toggleTheme,
        className: "fixed top-4 right-24 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-sm border border-opacity-20 transition-all duration-300 hover:scale-110 " + 
                 (isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"),
        style: {
            background: isDark ? '#1a1a1a' : '#ffffff',
            border: `1px solid ${isDark ? '#333333' : '#e5e7eb'}`
        }
    }, isDark ? 
        React.createElement('span', { className: "block w-5 h-5", style: { fontSize: '20px' } }, "☀️") :
        React.createElement('span', { className: "block w-5 h-5", style: { fontSize: '20px' } }, "🌙")
    );
};

const container = document.getElementById('theme-toggle-root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(ThemeToggle));
