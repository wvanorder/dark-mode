import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, toggleDarkMode] = useLocalStorage('darkMode');
    useEffect(() => {
       if(darkMode) {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('normal-mode')
       } else {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('normal-mode')
       }
    }, [darkMode]);

    return [ darkMode, toggleDarkMode ];
}

export default useDarkMode;