import { Helmet } from "react-helmet";
import { Nav } from "../../layout/nav/Nav";

export const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for a Holidaze account" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        SignUpPage
      </h1>
      <Nav />
    </div>
  );
};
