import { API_BASE_URL } from "../endPoints/endpoints";
import { useState, useEffect } from "react";

export const VenuesAPI = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(`${API_BASE_URL}/venues`);
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
    )
  }

  if (error) {
    return (
      <div>There was an ERROR Loading Venues</div>
    )
  }

  return (
    <div>
      {venues.map((venue) => (
        <div key={venue.id}>
          <h2>{venue.name}</h2>
          <p>{venue.description}</p>
          <p>Price: ${venue.price}</p>
          <p>Max Guests: {venue.maxGuests}</p>
          <p>Rating: {venue.rating}</p>
          {/* Render the venue image */}
          <img src={venue.media[0]} alt={venue.name} />

          {/* Example of displaying meta information */}
          <p>Wi-Fi: {venue.meta.wifi ? "Yes" : "No"}</p>
          <p>Parking: {venue.meta.parking ? "Yes" : "No"}</p>
          <p>Breakfast: {venue.meta.breakfast ? "Yes" : "No"}</p>
          <p>Pets: {venue.meta.pets ? "Allowed" : "Not Allowed"}</p>

          {/* Render other venue details as needed */}
        </div>
      ))}
    </div>
  );
}

