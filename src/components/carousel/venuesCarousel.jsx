import { Carousel } from "flowbite-react";
import { GetVenues } from "../../api/calls/GetVenues";

export const VenuesCarousel = () => {
  const {venues} = GetVenues();

  return (
    <Carousel pauseOnHover className="">
      {venues.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </Carousel>
  );
}