import { Helmet } from "react-helmet";
import { VenuesAPI } from "../../api/calls/VenuesAPI";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze | Home</title>
        <meta name="description" content="Holidaze Home" />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">
        Home
      </h1>
      <VenuesAPI />
    </>
  );
};
