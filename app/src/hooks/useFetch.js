
import { useState, useEffect } from 'react';


export const useFetch = (callback, args) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {

      try {
        setIsLoading(true);
        const response = await callback(args);
        
        if (!Object.keys(response).length) {
          setError({ message: `No se encontraron resultados`, status: 404 });
        } else {
            setData(response);
        }
      } catch (err) {
        setError({ 
          message: "Ops, parece que hubo un problema, intenta nuevamente", 
          status: 500,
          error: err
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [args]);

  return [data, isLoading, error];
};
