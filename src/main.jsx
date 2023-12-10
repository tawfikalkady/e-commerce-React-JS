import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';

// 1. Connect CSS & JS file to main.jsx file
import 'swiper/css';

// /_ bootstrap css _/

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';

// /_ fonts and icons _/

import '././assets/css/icofont.min.css'; 
import '././assets/css/animate.css'; 
import '././assets/css/style.min.css';
import Shop from './shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/blog',element:<Blog/>},
      {path:'/shop',element:<Shop/>}

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
