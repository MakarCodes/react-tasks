export const isTouchable = (): boolean => {
  return 'ontouchstart' in window;
};
