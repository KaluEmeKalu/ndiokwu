import React, { PropsWithChildren } from 'react';

export const NdiokwuText: React.FC<PropsWithChildren> = ({ children }) => (
  <div style={{ fontFamily: 'Ndiokwu, sans-serif' }}>
    {children}
  </div>
);

export default NdiokwuText;
