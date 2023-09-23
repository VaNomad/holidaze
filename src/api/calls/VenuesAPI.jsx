import { API_BASE_URL } from "../endPoints/endpoints";
import { useState, useEffect } from "react";

export const useVenuesAPI = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(`${API_BASE_URL}/venues?sort=created`);
        const data = await response.json();
        setVenues(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    getData();
  }, []);

  if (loading) {
    return (
      <div>Loading Venues</div>
    );
  }

  if (error) {
    return (
      <div>There was an ERROR Loading Venues</div>
    );
  }

  return { venues, loading, error };
  
};

