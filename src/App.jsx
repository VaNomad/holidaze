import { RouterConfig } from "./routes/Routes";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <RouterConfig>
      <Header />
      <Footer />
    </RouterConfig>
  );
}

export default App;
