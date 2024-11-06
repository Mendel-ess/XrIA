import { createBrowserRouter, Navigate} from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Login } from "../screens/Login/Login";
import { ModelUI } from "../screens/ModelUI/ModelUI";
import { Payment } from "../screens/Payment/Payment";
import { Register } from "../screens/Register/Register";
import { Pricing } from "../screens/Pricing/Pricing";
import { Goals } from "../screens/Goals/Goals";
import { Docs } from "../screens/Docs/Docs";
import { Layout } from "../Layout/Layout";

export const AppRouter = createBrowserRouter([
  {
  path: "/",
  element: <Navigate to={"/landing"} />,
  },
  {
    path: "/landing",
    element: <Layout><Landing /></Layout>
  },
  {
    path: "/login",
    element: <Layout> <Login /> </Layout>
  },
  {
    path: "/model-ui",
    element: <ModelUI />
  },
  {
    path: "/payment",
    element: <Payment />
  },
  {
    path: "/register",
    element: <Layout><Register /></Layout>
  },
  {
    path: "/pricing",
    element: <Layout><Pricing /></Layout>
  },
  {
    path: "/goals",
    element: <Layout><Goals /></Layout>
  },
  {
    path: "/docs",
    element: <Layout><Docs /></Layout>
  }
]);