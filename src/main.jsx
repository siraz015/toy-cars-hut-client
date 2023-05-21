import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Blogs from './components/Blogs/blogs.jsx';
import AddAToy from './components/AddAToy/AddAToy.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import ToyDetails from './components/ToyDetails/ToyDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import React from 'react';
import AuthProvider from './providers/AuthProvider';
import UpdateToy from './components/UpdateToy/UpdateToy';
import Error from './components/Error/Error';
import TabDetails from './components/ShopByCategory/TabDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/addatoy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-cars-hut-server.vercel.app/alltoys')
      },
      {
        path: '/toydetails/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-cars-hut-server.vercel.app/alltoys/${params.id}`)
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-cars-hut-server.vercel.app/mytoys/${params.id}`)
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><TabDetails></TabDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-cars-hut-server.vercel.app/toy/${params.id}`)

      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
