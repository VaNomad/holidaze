import { GridLoader } from "react-spinners";
import { FetchVenue } from "../../api/calls/FetchVenue";
import { Carousel } from "flowbite-react";

export const VenuesCarousel = () => {
  const { venue, loading, error } = FetchVenue()
  
  if (loading) {
    return (
      <div>
        <GridLoader />
      </div>
    )
  }

  if (error) {
    <div>Error: { error }</div>
  }

  if (!venue || !venue.media || venue.media.length === 0) {
    return (
      <div>
        <h1>No images available for this venue!</h1>
      </div>
    );
  }

  // if (!images || images.length === 0) {
  //   return <div>No images available</div>
  // }

  return (
    <Carousel pauseOnHover>
      {venue.media.map((image, index) => (
        <img key={index} src={image} alt={`Venue Image ${index}`} />
      ))}
    </Carousel>
  );
}