import { Routes as RouterConfig, Route } from "react-router-dom";
import { Error404 } from "../pages/404/Error404";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signUp/SignUp";
import { UserProfile } from "../pages/userProfile/UserProfile";
import { VenueDetails } from "../pages/venueDetails/VenueDetails";
import { VenueList } from "../pages/venueList/VenueList";

export const Routes = () => {
  return (
    <RouterConfig>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/venueDetails" element={<VenueDetails />} />
      <Route path="/venueList" element={<VenueList />} />
      <Route path="*" element={<Error404 />} />
    </RouterConfig>
  );
};
