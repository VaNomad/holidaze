import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Layout } from "../../layout/Layout";

export const Login = () => {
  return (
    <Layout>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Holidaze Login and sign-up page" />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">
        LoginPage
      </h1>
      <Link to="/signUp" className="relative top-[30%] left-0 right-0 m-auto">
        <h1 className="flex justify-center underline text-blue-800">
          No account? SignUp here
        </h1>
      </Link>
    </Layout>
  );
};
