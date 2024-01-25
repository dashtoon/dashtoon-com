import {useEffect, useState} from 'react';

const useScrollVisibility = () => {
    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const scrollingDown = prevScrollpos < currentScrollPos;

            setIsVisible(!scrollingDown);

            setPrevScrollpos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);

    return isVisible;
};

export default useScrollVisibility;
