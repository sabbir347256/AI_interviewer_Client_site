import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthContext from './components/AuthProvider/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import Root from "./components/Root/Root";
import Layout from "./components/Pages/AdminAndAgentDashBoard/Admin/DashBoardLayout/Layout";
import Login from "./components/Pages/Authentication/Login/Login";
import DashBoardroot from "./components/Pages/AdminAndAgentDashBoard/Admin/DashBoardLayout/Dashboard/DashBoardroot";
import Interview from "./components/Pages/Interview/Interview";
import PerformerInsight from "./components/Pages/PerformerInsight/PerformerInsight";
import Talent from "./components/Pages/Talent/Talent";
import Underconstraction from "./components/Pages/utilies/Underconstraction";
import AuthPage from "./components/Pages/Authentication/AuthPage/AuthPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Layout></Layout>,
        children: [
          {
            path: '/',
            element: <DashBoardroot></DashBoardroot>
          },
          {
            path: '/ai-interview',
            element: <Interview></Interview>
          },
          {
            path: '/insight',
            element: <PerformerInsight></PerformerInsight>
          },
          {
            path: '/talent',
            element: <Talent></Talent>
          },
        ]
      },
      {
        path: "*",
        element: <Underconstraction></Underconstraction>
      }
    ]
  },
  {
    path: "/login",
    element: <AuthPage></AuthPage>
  }
])

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthContext>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </HelmetProvider>
    </AuthContext>
  </QueryClientProvider>
)
