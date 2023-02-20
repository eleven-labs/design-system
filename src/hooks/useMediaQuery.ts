import * as React from 'react';

import { matchMediaQueryList } from '@/constants';
import { useLayoutEffect } from '@/hooks/useLayoutEffect';
import type { MatchBreakpointsType } from '@/types';

export const useMediaQuery = (query: MatchBreakpointsType): boolean => {
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
