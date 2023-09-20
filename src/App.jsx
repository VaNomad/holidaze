import { Helmet } from "react-helmet";
import { RouterConfig } from "./routes/Routes";

function App() {
  return (
    <RouterConfig>
      <Helmet>
        <title>Holidaze</title>
        <meta name="description" content="Travel Accommodation"/>
      </Helmet>
    </RouterConfig>
  );
}

export default App;
