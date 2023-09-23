import { useVenuesAPI } from "../../api/calls/VenuesAPI";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Carousel = () => {
  const { venues, loading, error } = useVenuesAPI();
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  if (loading) {
    return <div>Loading Venues</div>;
  }

  if (error) {
    return <div>There was an ERROR Loading Venues</div>;
  }

  return (
    <div
      className="overflow-hidden bg-gray-600 w-full mx-auto flex items-center justify-center h-[screen]"
      ref={emblaRef}
    >
      <div className="flex">
        {venues?.map((venue) => {
          return (
            <div className="relative h-[100px] w-[100px] object-cover" key={venue.id}>
              <img
                className="w-full h-full"
                src={venue.media}
                alt="venue image"
              />
              <h1 className="">
                {venue.name}
              </h1>
              <p>{venue.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
