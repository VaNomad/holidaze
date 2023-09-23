import { API_BASE_URL } from "../endPoints/endpoints";
import { useState, useEffect } from "react";

export const VenuesAPI = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useEffect();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_BASE_URL}/venues`)
    }
  })
  return (
    <h1>THis is the VenuesAPI Call!</h1>
  )
}

