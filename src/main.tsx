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
import StrategyPage from '@/pages/strategy';
import StrategyCrud from '@/pages/strategy-crud';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@/components/theme-provider';
import Test from '@/pages/test';
// import 'assets/app.scss';



const router = createBrowserRouter([
  {
    path: "/",
    element: <StrategyCrud />,
    children: [
      { index: true, element: <App /> }
    ]
  },
  {
    path: "/strategy",
    element: <StrategyPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new-strategy",
    element: <Root />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const queryClient = new QueryClient({

  defaultOptions: {
    queries: {
      meta: {
        requiresAuth: true
      },
      retry: false
    },
    mutations: {
      meta: {
        requiresAuth: true
      }
    }
  }
})



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer
          rtl
          position='bottom-left'
        />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
