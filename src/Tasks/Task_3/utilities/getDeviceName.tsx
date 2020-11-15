type availableMedia =
  | '(max-width: 425px)'
  | '(min-width: 426px) and (max-width: 768px)'
  | '(min-width: 769px)';

interface IMedia {
  [key: string]: availableMedia;
}

export const getDeviceName = () => {
  const media: IMedia = {
    mobile: '(max-width: 425px)',
    tablet: '(min-width: 426px) and (max-width: 768px)',
    desktop: '(min-width: 769px)',
  };
  return Object.keys(media).find(key => window.matchMedia(media[key]).matches);
};
