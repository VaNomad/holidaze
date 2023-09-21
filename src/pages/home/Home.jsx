import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Holidaze Home" />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">
        HomePage
      </h1>
    </Layout>
  );
};
