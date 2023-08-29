import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { HomePage, Movie, MovieDetail, Person } from "../pages";
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
        { path: "/people/:id", element: <Person /> },
        { path: "/:id", element: <MovieDetail /> },
        { path: "movie/:id", element: <Movie /> },

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
