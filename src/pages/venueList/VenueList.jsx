import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";

export const VenueList = () => {
  return (
    <Layout>
      <Helmet>
        <title>Venue List</title>
        <meta name="description" content="List of all venues" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        VenueListPage
      </h1>
    </Layout>
  );
};
