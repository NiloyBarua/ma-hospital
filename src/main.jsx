import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import AllDoctors from './Components/AllDoctors/AllDoctors.jsx';
import Appointments from './Components/Appointments/Appointments.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/allDoctors',
        element : <AllDoctors></AllDoctors>
      },
      {
        path : `/appointment/:doctor_id`,
        element : <Appointments></Appointments>
      }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
