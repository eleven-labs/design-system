import React from 'react';

// This hook was created to remove warnings when used with SSR
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : (): void => {};
