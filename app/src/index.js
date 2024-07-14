import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.scss'
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home/index'
import Detail from './components/item/details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/items",
        element: <Home/>
      },
      {
        path: "/items/:id",
        element: <Detail/>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
