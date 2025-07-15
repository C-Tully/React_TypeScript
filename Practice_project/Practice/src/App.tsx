import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";
import SessionsPage from "./pages/Sessions.tsx";
import SessionPage from "./pages/Session.tsx";
import Root from "./pages/Root.tsx";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },

  {
    path: "/logout",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
  {
    path: "/settings",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
  {
    path: "/sessions",
    element: <SessionsPage />,
    loader: async () => {
      const isLoggedIn = checkAuth(); // can be from a cookie or session
      const res = await fetch(
        isLoggedIn
          ? "/api/sessions/user" // last 5 user sessions
          : "/api/sessions/random" // 5 random sessions
      );
      return res.json();
    },
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
