import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ContactUS from "../Pages/ContactUS/ContactUS";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/contact-us",
            element: <ContactUS />,
         },
      ],
   },
]);
