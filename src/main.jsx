import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import MainLAyout from './Layouts/MainLAyout.jsx';
import Bookmarks from './Pages/Bookmarks.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLAyout></MainLAyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        loader: () => fetch(`https://dev.to/api/articles?per_page=20?top=7`),
        element: <Blogs></Blogs>
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      },
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
