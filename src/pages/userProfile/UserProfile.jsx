import { Helmet } from "react-helmet";
// import { Nav } from "../../layout/nav/Nav";

export const UserProfile = () => {
  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Your Holidaze Profile page" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        userProfilePage
      </h1>
      {/* <Nav /> */}
    </div>
  );
};
