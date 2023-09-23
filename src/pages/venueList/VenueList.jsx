import { Helmet } from "react-helmet";

export const Venues = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze | Venues</title>
        <meta name="description" content="List of all venues" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Venue List
      </h1>
    </>
  );
};
