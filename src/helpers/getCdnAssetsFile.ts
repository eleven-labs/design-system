export const getCdnAssetsFile = (path: string): string => `${import.meta.env.VITE_CDN_PATH}${path.slice(1)}`;
