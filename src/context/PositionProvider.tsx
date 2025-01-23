import React, { useState } from 'react';
import { ComponentWithChildren } from '../interfaces/Reusable';
import { PositionContext } from './PositionContext';

export const PositionProvider: React.FC<ComponentWithChildren> = ({ children }) => {
  const [position, setPosition] = useState<DOMRect | null>(null);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};
export { PositionContext };

