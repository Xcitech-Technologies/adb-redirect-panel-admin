import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import Offers from "../Pages/Offers/Offers.jsx";

const authProtectedRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/offers", component: Offers },
];

export default authProtectedRoutes;
