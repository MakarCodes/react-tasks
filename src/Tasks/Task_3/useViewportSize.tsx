import { useContext } from 'react';
import { viewportSizeContext } from './ViewportSizeContextProvider';

const useViewportSize = () => {
  const { width, height } = useContext(viewportSizeContext);
  return { width, height };
};

export default useViewportSize;
