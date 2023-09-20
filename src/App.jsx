import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { VenueDetails } from "./pages/venueDetails/VenueDetails";
import { VenueList } from "./pages/venueList/VenueList";
import { Error404 } from "./pages/404/Error404";
// import { NavBar } from "./layout/nav/NavBar";
// import { Nav } from "./layout/nav/Nav";
import { Header } from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer"
// import { Layout } from "./layout/Layout";
// import { RouterConfig } from "./routes/Routes";


function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/venueDetails" element={<VenueDetails />} />
        <Route path="/venueList" element={<VenueList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
