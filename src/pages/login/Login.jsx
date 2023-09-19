import { Nav } from "../../layout/Nav"
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        LoginPage
      </h1>
      <Link to="/signUp">
        <h1 className="flex justify-center underline text-blue-800">
          No account? SignUp here
        </h1>
      </Link>
      <Nav />
    </div>
  );
}