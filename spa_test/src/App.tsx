import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageAlpha from "./pages/PageAlpha";
import PageBravo from "./pages/PageBravo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAlpha />,
  },
  {
    path: "/authCheck",
    element: <PageBravo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
