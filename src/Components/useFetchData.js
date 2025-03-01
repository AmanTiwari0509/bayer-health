import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); // For cleanup

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error on each fetch

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (runs when the component unmounts or url changes)
    return () => abortController.abort();

  }, [url]); // Re-run effect when url changes

  return { data, loading, error };
}

export default useFetchData;