import { useContext } from 'react';
import { PositionContext } from '../context/PositionProvider';

export const usePosition = () => {
  const context = useContext(PositionContext);
  if (context === undefined) {
    throw new Error('usePosition must be used within a PositionProvider');
  }
  return context;
};
