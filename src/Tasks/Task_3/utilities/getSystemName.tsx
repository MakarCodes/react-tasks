type availableSystemTypes =
  | 'iphone'
  | 'android'
  | 'windows'
  | 'linux'
  | 'mac os';

interface ISystems {
  [key: string]: availableSystemTypes;
}

export const getSystemName = (): availableSystemTypes => {
  const systems: ISystems = {
    ios: 'iphone',
    android: 'android',
    windows: 'windows',
    linus: 'linux',
    macos: 'mac os',
  };
  const appVersion: string = window.navigator.appVersion.toLowerCase();
  const userSystem = Object.values(systems).find(system =>
    appVersion.includes(systems[system])
  );
  if (userSystem === undefined) {
    throw new Error('Sorry, system is not recognized!');
  }
  return userSystem;
};
