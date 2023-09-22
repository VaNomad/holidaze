import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { VenueDetails } from "./pages/venueDetails/VenueDetails";
import { VenueList } from "./pages/venueList/VenueList";
import { Error404 } from "./pages/404/Error404";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <div className="bg-blackish min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={ <Home /> } />
          <Route path="/home" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/venue/:id" element={<VenueDetails />} />
          <Route path="/venue" element={<VenueList />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
