import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { HomePage, MovieDetail } from "../pages";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/:id", element: <MovieDetail /> },
        {
          path: "/about",
          element: (
            <div>
              <h2>About us</h2>
            </div>
          ),
        },
      ],
    },
  ]);
}
