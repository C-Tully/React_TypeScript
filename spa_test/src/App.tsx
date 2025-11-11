import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageAlpha from "./pages/PageAlpha";
import PageBravo from "./pages/PageBravo";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageAlpha />,
  },
  {
    path: "/authCheck",
    element: <PageBravo />,
    //Note this process is to determine if we need to prefetch data based on a users state.
    loader: async () => {
      const isLoggedIn = checkAuth();
      const response = await fetch(isLoggedIn ? "/api/fetch" : "/api/default");
    },
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
