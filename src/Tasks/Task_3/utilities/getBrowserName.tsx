type availableBrowserNames =
  | 'ie'
  | 'edge'
  | 'firefox'
  | 'opera'
  | 'chrome'
  | 'safari';

export const getBrowserName = (): availableBrowserNames => {
  const browsers: availableBrowserNames[] = [
    'ie',
    'edge',
    'firefox',
    'opera',
    'chrome',
    'safari',
  ];
  const appVersion = window.navigator.appVersion.toLowerCase();
  const userBrowser = browsers.find(browser => appVersion.includes(browser));
  if (userBrowser === undefined) {
    throw new Error('Sorry, browser is not recognized!');
  }
  return userBrowser;
};
