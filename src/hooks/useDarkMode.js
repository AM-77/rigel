import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const localMode = window.localStorage.getItem('mode');

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localMode
    ) {
      setMode('dark');
    } else if (localMode) {
      setMode(localMode);
    } else {
      setMode('light');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('mode', mode);
  }, [mode]);

  return [mode, setMode];
};

export default useDarkMode;
