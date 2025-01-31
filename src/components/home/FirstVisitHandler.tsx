import React, { useEffect, useRef, useState } from 'react';
import HomeWithAnimations from './HomeWithAnimations'; // Componente con animaciones
import Home from './Home'; // Componente normal

const FirstVisitHandler: React.FC = () => {
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      const visited = localStorage.getItem('hasVisited');
      if (visited === null) {
        localStorage.setItem('hasVisited', 'true');
        setHasVisited(false);
      } else {
        setHasVisited(true);
      }

      isInitialRender.current = false;
    }
  }, []);

  if (hasVisited === null) {
    return null;
  }

  return hasVisited ? <Home /> : <HomeWithAnimations />;
};
export default FirstVisitHandler;
