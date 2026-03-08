import * as React from 'react';

import { useLayoutEffect } from '@/hooks/useLayoutEffect';
import { matchMediaQueryList } from '@/tokens';

export const useMediaQuery = (query: keyof typeof matchMediaQueryList): boolean => {
  const [matches, setMatches] = React.useState<boolean>(false);

  useLayoutEffect((): (() => void) => {
    const media = window.matchMedia(matchMediaQueryList[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (): void => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return (): void => window.removeEventListener('resize', listener);
  }, [query, matches, setMatches]);

  return matches;
};
