import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../endPoints/endpoints";
import {GridLoader} from "react-spinners"

export const FetchVenue = () => {
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(`${API_BASE_URL}/venues/${id}`)
        if (!response.ok) {
          throw new Error("FAILES to fetch venue details");
        }
        const data = await response.json()

        console.log("Venue Data:", data)

        setVenue(data)
      } catch (error) {
        console.log("Error fetching venue details:", error)
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(`${API_BASE_URL}/venues/${id}`)
    console.log(fetchData())
    
  }, [id])

  if (isLoading || !venue) {
    return (
      <div>
        <GridLoader size={50} color="purple" />
      </div>
    );
  }

  if (hasError) {
    return <div>{hasError}</div>;
  }

  return { venue, isLoading, hasError };
  
};

