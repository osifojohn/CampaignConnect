import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Landing from '../pages';
import { ROUTES } from './routeEnum';

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <Landing />,
  },
  {
    path: ROUTES.DASHBOARD_HOME,
    element: <Dashboard />,
  },
]);
