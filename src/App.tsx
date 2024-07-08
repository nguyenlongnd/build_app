import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loading from './components/Loading'
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute'
import { Suspense, lazy } from 'react'
import FallbackLoading from './components/FallbackLoading'
const Login = lazy(() => import('./components/Login'))
const Product = lazy(() => import('./components/Product'))
const Dashboard = lazy(() =>  import('./components/Dashboard'))
import "@bitnoi.se/react-scheduler/dist/style.css";
import Schedules from './components/Schedules'
const SuspenseLayout = () => (
  <Suspense fallback={<FallbackLoading />}>
    <Outlet />
  </Suspense>
)
const router = createBrowserRouter([
  {
    element: <SuspenseLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Dashboard />,
          </PrivateRoute>
        )
      },
      {
        path: '/product',
        element: (
          <PrivateRoute>
            <Product />,
          </PrivateRoute>
        )
      },
      {
        path: '/schedules',
        element: (
          <PrivateRoute>
            <Schedules />,
          </PrivateRoute>
        )
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App;
