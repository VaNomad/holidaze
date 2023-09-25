import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../endPoints/endpoints";
import {GridLoader} from "react-spinners"

export const GetVenue = () => {
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch(url)
        const json = await response.json()

        console.log("Venue Data:", json)

        setVenue(json)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getData(`${API_BASE_URL}/venues/${id}`);
  }, [id])

  if (loading || !venue) {
    return (
      <div>
        <GridLoader size={50} color="purple" />
      </div>
    )
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  return { venue, loading, error };
  
};
