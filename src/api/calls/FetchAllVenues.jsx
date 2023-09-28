import { useState, useEffect } from "react";
import { API_BASE_URL } from "../endPoints/endpoints";
import { Card } from "flowbite-react";
import { GridLoader } from "react-spinners";

export async function FetchAllVenues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setHasError(null);
        setIsLoading(true);

        const response = await fetch(`${API_BASE_URL}/venues`);
        console.log(response)
        // eslint-disable-next-line no-unused-vars
        const data = await response.json();

        setVenues(data);
        console.log("VEnues Data:", data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching venue details:", error);
        setHasError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !venues) {
    return (
      <div>
        <GridLoader size={50} color="purple" />
      </div>
    );
  }

  if (hasError) {
    return <div>{hasError}</div>;
  }

  return (
    <div>
      {venues.map((place) => {
        return <Card key={place.id} place={place} />;
      })}
    </div>
  );
}
