import { API_BASE_URL } from "../endPoints/endpoints";
import { useState, useEffect } from "react";

export const FetchVenues = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setHasError(null);
        setIsLoading(true);

        const response = await fetch(`${API_BASE_URL}/venues?sort=created`);
        const data = await response.json();
        setVenues(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    }

    fetchData();
  }, []);

  // if (loading) {
  //   return (
  //     <div>Loading Venues</div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>There was an ERROR Loading Venues</div>
  //   );
  // }

  return {venues, isLoading, hasError};
  
};

