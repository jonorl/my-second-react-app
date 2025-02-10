import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter
import App from "./App";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

export default router;
