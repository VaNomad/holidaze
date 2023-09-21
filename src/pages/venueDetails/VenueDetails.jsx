import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";

export const VenueDetails = () => {
  return (
    <Layout>
      <Helmet>
        <title>Venue Details</title>
        <meta name="description" content="Details of chosen venue" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        VenueDetailsPage
      </h1>
    </Layout>
  );
}