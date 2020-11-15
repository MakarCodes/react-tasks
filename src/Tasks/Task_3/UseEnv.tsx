// stwórz hooka, który zwróci wartości dotyczące informacji o przeglądarce oraz stronie
// - wymiary okna oraz wymiary strony (pamiętaj, że zmieniają się one w przypadku window.resize)
// - typ urządzenia (mobile/tablet/laptop)
// - rodzaj przeglądarki uzytkownika (ie/edge/firefox/opera/chrome)
// - system operacyjny uzytkownika (ios/android/windows/linux/macos)
// - informację czy dane urządzenie posiada ekran dotykowy
// - informację czy dane urządzenie jest offline czy online

import React, { useState, useEffect } from 'react';

const UseEnv = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleWindowResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {});
  return <div></div>;
};

export default UseEnv;
