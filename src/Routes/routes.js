import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import Offers from "../Pages/Offers/Offers.jsx";
// import GlobalCondition from "../Components/GlobalCondition.jsx";
import GlobalConditions from "../Pages/GlobalConditions/GlobalConditions.jsx";
import AddEditOffer from "../Pages/Offers/AddEditOffer.jsx";

const authProtectedRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/offers", component: Offers },
  { path: "/admin/offer/addOffer", component: AddEditOffer },
  { path: "/admin/offer/edit/:id", component: AddEditOffer },
  { path: "/admin/globalconditions", component: GlobalConditions },
];

export default authProtectedRoutes;
