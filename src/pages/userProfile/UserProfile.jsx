import { Helmet } from "react-helmet";

export const UserProfile = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze | Profile</title>
        <meta name="description" content="Your Holidaze Profile page" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Profile
      </h1>
    </>
  );
};
