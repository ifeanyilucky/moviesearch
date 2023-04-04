import React from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage, MovieDetail } from '../pages';
import Navbar from '../layout/Navbar';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/:id', element: <MovieDetail /> },
        {
          path: '/about',
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