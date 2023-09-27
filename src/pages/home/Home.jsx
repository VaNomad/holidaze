import { Helmet } from "react-helmet";
// import { AllVenuesCard } from "../../components/card/AllVenuesCard";
// import { Carousel } from "flowbite-react";
import { FetchAllVenues } from "../../api/calls/FetchAllVenues";
// import { VenuesCard } from "../../components/card/VenuesCard";
// import { VenuesCarousel} from "../../components/carousel/venuesCarousel"


export const Home = () => {
  // console.log("Venues Card", AllVenuesCard)
  // console.log("VenuesCarousel", Carousel)
  return (
    <>
      <Helmet>
        <title>Holidaze | Home</title>
        <meta name="description" content="Holidaze Home" />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">Home</h1>
      {/* <AllVenuesCard /> */ }
      <FetchAllVenues />
      {/* <VenuesCarousel /> */}
    </>
  );
};
