import { Helmet } from "react-helmet";
import { VenuesCard } from "../../components/card/VenuesCard";
import { VenuesCarousel} from "../../components/carousel/venuesCarousel"


export const Home = () => {
  console.log("Venues Card", VenuesCard)
  console.log("VenuesCarousel", VenuesCarousel)
  return (
    <>
      <Helmet>
        <title>Holidaze | Home</title>
        <meta name="description" content="Holidaze Home" />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">Home</h1>
      <VenuesCard />
      <VenuesCarousel />
    </>
  );
};
