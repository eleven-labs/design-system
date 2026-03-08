import React from 'react';

import './webmecanik.css';

export interface WebmecanikFormStylesProps {
  children: React.ReactNode;
}

// Isolates third-party Webmecanik/Mautic form styling from the core design-system components.
export const WebmecanikFormStyles: React.FC<WebmecanikFormStylesProps> = ({ children }) => <>{children}</>;
