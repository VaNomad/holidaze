import { Helmet } from "react-helmet";
// import { Nav } from "../../layout/nav/Nav";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Holidaze Login and sign-up page" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        LoginPage
      </h1>
      <Link to="/signUp" className="absolute top-[30%] left-0 right-0 m-auto">
        <h1 className="flex justify-center underline text-blue-800">
          No account? SignUp here
        </h1>
      </Link>
      {/* <Nav /> */}
    </div>
  );
};
