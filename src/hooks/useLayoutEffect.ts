import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : (): void => {};
