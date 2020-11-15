// stwórz hooka, który zwróci wartości dotyczące informacji o przeglądarce oraz stronie
// - wymiary okna oraz wymiary strony (pamiętaj, że zmieniają się one w przypadku window.resize)
// - typ urządzenia (mobile/tablet/laptop)
// - rodzaj przeglądarki uzytkownika (ie/edge/firefox/opera/chrome)
// - system operacyjny uzytkownika (ios/android/windows/linux/macos)
// - informację czy dane urządzenie posiada ekran dotykowy
// - informację czy dane urządzenie jest offline czy online

import React, { useState, useEffect } from 'react';
import useViewportSize from './useViewportSize';
import { getBrowserName } from './utilities/getBrowserName';
import { getConnectionStatus } from './utilities/getConnectionStatus';
import { getDeviceName } from './utilities/getDeviceName';
import { getSystemName } from './utilities/getSystemName';
import { isTouchable } from './utilities/isTouchable';

const UseEnv = () => {
  const { width, height } = useViewportSize();
  const [env, setEnv] = useState({
    viewportWidth: width,
    viewportHeight: height,
    platform: window.navigator.platform,
    device: getDeviceName(),
    browser: getBrowserName(),
    system: getSystemName(),
    hasTouchableScreen: isTouchable(),
    connectionStatus: getConnectionStatus(),
  });
  useEffect(() => {
    setEnv(prevEnv => ({
      ...prevEnv,
      viewportWidth: width,
      viewportHeight: height,
      device: getDeviceName(),
    }));
  }, [width, height]);
  return (
    <div>
      <div>
        <span>Width: {env.viewportWidth} px</span>
      </div>
      <div>
        <span>Height: {env.viewportHeight} px</span>
      </div>
      <span>{env.platform}</span>
      <span>{env.device}</span>
      <span>{env.browser}</span>
      <span>{env.system}</span>
      <span>{env.hasTouchableScreen}</span>
      <span>{env.connectionStatus}</span>
    </div>
  );
};

export default UseEnv;
