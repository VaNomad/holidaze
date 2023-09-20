import { Helmet } from "react-helmet";
import { Nav } from "../../layout/nav/Nav";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Holidaze Home" />
      </Helmet>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        HomePage
      </h1>
      <Nav />
    </div>
  );
};
