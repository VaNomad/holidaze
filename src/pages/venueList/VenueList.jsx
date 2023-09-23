import { Helmet } from "react-helmet";

export const VenueList = () => {
  return (
    <>
      <Helmet>
        <title>Venue List</title>
        <meta name="description" content="List of all venues" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Venue List
      </h1>
    </>
  );
};
