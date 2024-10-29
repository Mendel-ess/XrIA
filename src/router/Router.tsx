import { createBrowserRouter, Navigate} from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Login } from "../screens/Login/Login";
import { ModelUI } from "../screens/ModelUI/ModelUI";
import { Payment } from "../screens/Payment/Payment";
import { Register } from "../screens/Register/Register";
import { Pricing } from "../screens/Pricing/Pricing";
import { Goals } from "../screens/Goals/Goals";
import { Docs } from "../screens/Docs/Docs";

export const AppRouter = createBrowserRouter([
  {
  path: "/",
  element: <Navigate to={"/landing"} />,
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
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
    element: <Register />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/goals",
    element: <Goals />
  },
  {
    path: "/docs",
    element: <Docs />
  }
]);