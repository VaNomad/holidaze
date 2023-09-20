import { Helmet } from "react-helmet";
// import { Nav } from "../../layout/nav/Nav";

export const VenueList = () => {
  return (
    <div>
      <Helmet>
        <title>Venue List</title>
        <meta name="description" content="List of all venues" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        VenueListPage
      </h1>
      {/* <Nav /> */}
    </div>
  );
};
