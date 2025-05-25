import React, { PropsWithChildren } from 'react';

export const NdiokwuText: React.FC<PropsWithChildren> = ({ children }) => (
  <span style={{ fontFamily: 'Ndiokwu, sans-serif' }}>
    {children}
  </span>
);

export default NdiokwuText;
