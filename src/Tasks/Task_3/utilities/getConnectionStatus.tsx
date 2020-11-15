export const getConnectionStatus = () => {
  return window.navigator.onLine ? 'online' : 'offline';
};
