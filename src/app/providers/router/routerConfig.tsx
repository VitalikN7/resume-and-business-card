//* router
import { createHashRouter } from "react-router";
//* pages
import { Home } from "@pages/Home";
//* все роуты приложения
export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
