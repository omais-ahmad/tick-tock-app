import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from './pages/Login';
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from './pages/Dashboard';
import { TimesheetsDetails } from "./pages/TimesheetDetails";
import { PrivateRoute } from './components/PrivateRoute';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
     children: [
      {
        path: "",
        element: <AppLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "details/:id",
            element: <TimesheetsDetails />,
          },
        ]
      }
    ],
  }

]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};





export default App
