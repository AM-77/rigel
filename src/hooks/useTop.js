import { useEffect, useState } from 'react';

const useTop = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [top, setTop] = useState('310px');

  window.addEventListener('resize', () => setWidth(window.innerWidth));

  useEffect(() => {
    if (innerWidth < 768) {
      setTop('calc(100vh - 85px)');
    } else {
      setTop('310px');
    }
  }, [width]);

  return top;
};

export default useTop;
