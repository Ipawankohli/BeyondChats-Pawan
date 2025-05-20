const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

return (
    <div className={darkMode ? 'dark-mode' : ''}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
);
