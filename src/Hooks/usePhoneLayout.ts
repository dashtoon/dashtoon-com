import { useEffect, useState } from 'react';

const usePhoneLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const update = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    }
    if (window.innerWidth > 768) {
      setIsSmallScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  return { isSmallScreen };
};

export default usePhoneLayout;
