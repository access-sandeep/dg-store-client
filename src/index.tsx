import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from './modules/common/ErrorPage';
import ContactUs from './modules/ContactUs';
import Home from './modules/Home';
import Products from './modules/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact-us/",
        element: <ContactUs />,
      },
      {
        path: "products/",
        children: [
          {
            path: "all/",
            element: <Products />,
          },
        ]
      }
    ]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
