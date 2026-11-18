import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthContext from "./components/AuthProvider/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import Root from "./components/Root/Root";
import Layout from "./components/Pages/AdminAndAgentDashBoard/Admin/DashBoardLayout/Layout";
import Login from "./components/Pages/Authentication/Login/Login";
import DashBoardroot from "./components/Pages/AdminAndAgentDashBoard/Admin/DashBoardLayout/Dashboard/DashBoardroot";
import Interview from "./components/Pages/Interview/Interview";
import PerformerInsight from "./components/Pages/PerformerInsight/PerformerInsight";
import Talent from "./components/Pages/Talent/Talent";
import Underconstraction from "./components/Pages/utilies/Underconstraction";
import AuthPage from "./components/Pages/Authentication/AuthPage/AuthPage";
import Landing from "./components/Pages/Landing/Landing";
import { AuthProvider } from "./components/AuthProvider/CreateContext";

const queryClient = new QueryClient();

const MainContent = () => {
  const {user} = useContext(AuthProvider);
  // const user = auth?.user;

  console.log(user)

  if (!user) {
    return <Landing />;
  }

  return <Layout />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <MainContent></MainContent>,
        children: [
          {
            path: "",
            element: <DashBoardroot></DashBoardroot>,
          },
          {
            path: "/ai-interview",
            element: <Interview></Interview>,
          },
          {
            path: "/insight",
            element: <PerformerInsight></PerformerInsight>,
          },
          {
            path: "/talent",
            element: <Talent></Talent>,
          },
        ],
      },
      {
        path: "*",
        element: <Underconstraction></Underconstraction>,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage></AuthPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthContext>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </HelmetProvider>
    </AuthContext>
  </QueryClientProvider>,
);
