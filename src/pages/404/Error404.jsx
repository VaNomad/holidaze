import { Link } from "react-router-dom"
import {FiHome} from "react-icons/fi"
import { Helmet } from "react-helmet";

export const Error404 = () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
        <meta name="description" content="This is a broken link"/>
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl text-red-900">Error404</h1>
      <Link to="/" className="flex flex-col items-center">
        <h1 className="flex items-center text-blue-800 underline underline-offset-1">Go back to the <FiHome className="mx-1"/> page</h1>
      </Link>
    </div>
  );
}