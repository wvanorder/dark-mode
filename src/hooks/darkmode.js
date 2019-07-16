import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, toggleDarkMode] = useLocalStorage('your key here');
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode]);

    return [ darkMode, toggleDarkMode ];
}

export default useDarkMode;