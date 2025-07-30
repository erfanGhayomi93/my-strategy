import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from '@/pages/login';
import App from './App';
import Root from '@/components/layout/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      { index: true , element : <App /> }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
