import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import AuthProvider from './providers/AuthProvider.jsx';
import AddAToy from './components/AddAToy/AddAToy.jsx';
import AllToys from './components/AllToys/AllToys.jsx';

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
        element: <AddAToy></AddAToy>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
