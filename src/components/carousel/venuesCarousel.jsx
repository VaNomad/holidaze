import { Carousel } from "flowbite-react";

export const VenuesCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images available</div>
  }

  return (
    <Carousel pauseOnHover>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Venue Image ${index}`} />
      ))}
    </Carousel>
  );
}