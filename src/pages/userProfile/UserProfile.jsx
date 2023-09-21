import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";

export const UserProfile = () => {
  return (
    <Layout>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Your Holidaze Profile page" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        userProfilePage
      </h1>
    </Layout>
  );
};
