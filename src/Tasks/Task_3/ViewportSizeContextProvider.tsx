import React, { createContext, ReactNode, useState, useEffect } from 'react';

interface IVieportSizeContexProps {
  width: number;
  height: number;
}

export const viewportSizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
} as IVieportSizeContexProps);

// const getWidth = () => window.innerWidth
//   || document.documentElement.clientWidth
//   || document.body.clientWidth;

const ViewportSizeContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleWindowResize = () => {
    console.log('effect resize');
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    console.log('add event listener');
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      console.log('remove');
    };
  }, []);
  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <viewportSizeContext.Provider value={windowSize}>
      {children}
    </viewportSizeContext.Provider>
  );
};

export default ViewportSizeContextProvider;
