import { Helmet } from "react-helmet";

export const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for a Holidaze account" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        SignUpPage
      </h1>
    </>
  );
};
