import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login1 } from './Login1.jsx';
import { PasswordReset } from './PasswordReset.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <App />
    ),
  },
  {
    path: "/password-reset",
    element: (< PasswordReset />),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render( 
  <div>
  
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>, 
  </div>
)
