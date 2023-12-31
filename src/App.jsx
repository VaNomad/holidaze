import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./components/forms/signUp/SignUp";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { VenueDetails } from "./pages/venueDetails/VenueDetails";
import { VenueList } from "./pages/venueList/VenueList";
import { Error404 } from "./pages/404/Error404";
import { Layout } from "./layout/Layout";
import { AddVenue } from "./components/forms/addVenue/AddVenue";

function App() {
  return (
    <div className="bg-blackish min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/add-venue" element={<AddVenue />} />
          <Route path="/venue/:id" element={<VenueDetails />} />
          <Route path="/venues" element={<VenueList />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
