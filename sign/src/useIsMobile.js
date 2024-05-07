import { useState, useEffect } from 'react';

// Hook para comprobar si estamos en un dispositivo móvil
const useIsMobile = (mobileWidth = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidth);
    };

    // Añade el listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileWidth]); // Solo se volverá a ejecutar si mobileWidth cambia

  return isMobile;
};